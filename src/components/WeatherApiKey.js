import React, { useState } from "react";

const WeatherApiKey = () => {
  const [apiKey, setApiKey] = useState("");
  const [response, setResponse] = useState(null);

  const fetchApiKey = async (token) => {
    try {
      //console.log("Btoken", token);
      const res = await fetch("http://localhost:3010/api/v1/weatherapikey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token, // Add token to headers
        },
        body: JSON.stringify({
          newApiKey: apiKey,
        }),
      });

      const data = await res.json();
      //console.log(data);
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
      setResponse(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Fetch token from local storage
      const token = localStorage.getItem("token");
      if (token) {
        fetchApiKey(token);
      } else {
        console.error("Token not found in local storage");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse(null);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-md shadow-md">
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            New Weather API Key:
            <input
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="block w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <button
            type="submit"
            className="block w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </form>

        {response && (
          <div className="mt-4">
            <p>
              Success: {response.success ? response.success.toString() :  "False" }
            </p>
            <p>Message: {response.success ? response.message : response.error.explanation}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherApiKey;
