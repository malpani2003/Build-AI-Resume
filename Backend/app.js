require("dotenv").config();
const express = require("express");
const { google } = require("googleapis");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

// Load Client ID and Client Secret from environment variables
const ClientID = process.env.CLIENT_ID;
const ClientSecret = process.env.CLIENT_SECRET;

// Create an OAuth2 client with the given credentials
const oauth2Client = new google.auth.OAuth2(
  ClientID,
  ClientSecret,
  `http://localhost:3000/emails`
);

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Update to match your frontend's URL
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Endpoint to get the Google OAuth authentication URL
app.get("/api/auth/gmail", (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://mail.google.com/"],
  });
  res.redirect(authUrl);
});

// Function to fetch emails
async function fetchEmails(oauth2Client) {
  const gmail = google.gmail({ version: "v1", auth: oauth2Client });

  try {
    const response = await gmail.users.messages.list({
      userId: "me",
      maxResults: 5,
    });

    const messageIds = response.data.messages || [];
    const messagesPromises = messageIds.map(async (msg) => {
      const msgResponse = await gmail.users.messages.get({
        userId: "me",
        id: msg.id,
      });

      const headers = msgResponse.data.payload.headers;
      const subjectHeader = headers.find((header) => header.name === "Subject");
      const subject = subjectHeader ? subjectHeader.value : "No Subject";

      return {
        id: msg.id,
        subject,
      };
    });

    return await Promise.all(messagesPromises);
  } catch (error) {
    console.error("Error fetching emails:", error);
    throw new Error("Error fetching emails");
  }
}

// Endpoint to handle OAuth callback and store tokens
app.get("/api/emails/gmail", async (req, res) => {
  const code = req.query.code;
  if (!code) {
    return res.status(400).send("No code provided");
  }

  try {
    const { tokens: newTokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(newTokens);
    // Fetch emails after successful authentication
    const emails = await fetchEmails(oauth2Client);
    res.json({emails,newTokens}); // Send the fetched emails as response
  } catch (error) {
    console.error("Error during authentication or fetching emails:", error);
    res.status(500).send(error);
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
