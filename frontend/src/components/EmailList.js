import React, { useState, useEffect } from "react";

function EmailList(){
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch emails from the backend
    const fetchEmails = async () => {
      try {
        const response = await fetch("/api/emails/gmail", {
          method: "GET",
          credentials: "include", // Important for sending cookies
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setEmails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="email-list">
      <h2 className="text-xl font-bold mb-4">Your Emails</h2>
      <ul>
        {emails.map((email) => (
          <li key={email.id} className="border-b py-2">
            <strong>Subject:</strong> {email.subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailList;
