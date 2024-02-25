import React, { useState } from "react";

const DeleteUser = () => {
  const [id, setid] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("http://localhost:3010/api/v1/user        ", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      });

      const data = await res.json();
      console.log(data);
      setResponse(data);
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
            Delete User (Add Id) :
            <input
              type="text"
              value={id}
              onChange={(e) => setid(e.target.value)}
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
              Success: {response.success ? response.success.toString() : "N/A"}
            </p>
            <p>Message: {response.message ? response.message : "N/A"}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default DeleteUser;