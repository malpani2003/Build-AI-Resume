import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
function EmailList() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // Function to fetch emails from the backend
    const fetchEmails = async () => {
      const code=searchParams.get('code');
      try {
        const response = await fetch(
          `http://localhost:3001/api/emails/gmail?code=${code}`,
          {
            method: "GET",
          }
        );
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
}

export default EmailList;
