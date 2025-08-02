import React from "react";

const CropDetails = () => {
  return (
    <div className="max-w-4xl mx-auto mt-24 p-6 bg-white/30 backdrop-blur-md rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold text-green-700 mb-4">Crop Details</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Best season to sow: Winter</li>
        <li>Water needs: Moderate (20-30mm weekly)</li>
        <li>Fertilizer suggestions: NPK 10:26:26</li>
        <li>Common pests: Aphids, Armyworms</li>
        <li>Profitability tips: Rotate with legumes</li>
      </ul>
    </div>
  );
};

export default CropDetails;
