import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [langOpen, setLangOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 bg-white/70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <div className="flex items-center space-x-2">
          <div className="bg-green-600 w-10 h-10 rounded flex items-center justify-center text-white text-xl font-bold">
            🌱
          </div>
          <div>
            <h1 className="text-xl font-bold text-green-700">Smart Crop</h1>
            <p className="text-xs text-gray-600 -mt-1">
              Intelligent Farming Assistant
            </p>
          </div>
        </div>

        <div className="hidden md:flex space-x-8 font-medium">
          <Link to="/" className="hover:text-green-600">
            Dashboard
          </Link>
          <Link to="/crop-guide" className="hover:text-green-600">
            Crop Guide
          </Link>
          <Link to="/input" className="hover:text-green-600">
            Soil Analysis
          </Link>
          <Link to="/weather" className="hover:text-green-600">
            Weather
          </Link>
        </div>

        <div className="flex items-center space-x-5 relative">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center space-x-1 text-sm hover:text-green-600"
            >
              🌐 <span>EN</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-20 bg-white border rounded shadow-md">
                <button className="block w-full px-3 py-1 hover:bg-gray-100">
                  EN
                </button>
                <button className="block w-full px-3 py-1 hover:bg-gray-100">
                  HI
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
