import React from "react";

const ResultsPage = () => {
  const recommendedCrop = "Wheat";
  const waterAdvice = "Irrigate 20-30mm weekly";

  return (
    <div className="max-w-4xl mx-auto mt-24 p-6 bg-white/30 backdrop-blur-md rounded-2xl shadow-md space-y-6">
      <h2 className="text-3xl font-bold text-green-700">Recommended Crop</h2>
      <div className="p-4 bg-green-100 rounded-lg">{recommendedCrop}</div>
      <h2 className="text-3xl font-bold text-green-700">Water Usage Advice</h2>
      <div className="p-4 bg-blue-100 rounded-lg">{waterAdvice}</div>
    </div>
  );
};

export default ResultsPage;
