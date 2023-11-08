import { useEffect, useState } from "react";

export default function FetchCompo() {
    const [jsData, setjsData] = useState(null);
  
    useEffect(() => {
      // This function will make a POST request to create a new user
      const createUser = async () => {
        try {
          const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              // Data to be sent in the POST request body
              name: 'John Doe', // Replace with the appropriate data for your request
              job: 'Engineer', // Replace with the appropriate data for your request
            }),
          });
  
          const data = await response.json();
          setjsData(data);
        } catch (error) {
          console.error('Error creating user:', error);
        }
      };
  
      // Execute the function to create a new user
      createUser();
    }, []);
  
    return (
      <div>
        {jsData ? (
          <ul>
            <li>Created User ID: {jsData.id}</li>
          </ul>
        ) : (
          'Loading...'
        )}
      </div>
    );
  }
  