import React, { useState } from "react";

const InputPage = () => {
  const [location, setLocation] = useState("");

  const handleFetchData = () => {
    console.log("Fetching soil & weather data for:", location);
  };

  return (
    <div className="max-w-2xl mx-auto mt-24 p-6 bg-white/30 backdrop-blur-md rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">
        Enter Your Location
      </h2>
      <input
        type="text"
        placeholder="Search locality..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full border rounded-lg px-4 py-2 mb-4"
      />
      <button
        onClick={handleFetchData}
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
      >
        Fetch Data
      </button>
    </div>
  );
};

export default InputPage;
