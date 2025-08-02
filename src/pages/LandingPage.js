import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-green-900/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          Smart Crop AI
        </h1>
        <p className="text-lg md:text-2xl text-green-100 mt-4 max-w-2xl">
          Your intelligent farming companion for optimal crop yields
        </p>
        <Link
          to="/input"
          className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
        >
          Start Smart Farming
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
