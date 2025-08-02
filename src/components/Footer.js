import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-md shadow-inner mt-0">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        <div className="max-w-xs">
          <h3 className="text-lg font-bold text-green-700">
            Smart Crop Assistance
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            Helping farmers make data-driven decisions for better crop yield and
            water management using soil and weather insights.
          </p>

          <div className="flex space-x-6 mt-4">
            <a href="#" aria-label="Twitter" className="hover:text-blue-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.24 4.24 0 001.88-2.34c-.83.5-1.75.86-2.73 1.05a4.21 4.21 0 00-7.2 3.83A11.95 11.95 0 013 4.79a4.2 4.2 0 001.3 5.62 4.21 4.21 0 01-1.9-.53v.05a4.21 4.21 0 003.38 4.12 4.24 4.24 0 01-1.89.07 4.21 4.21 0 003.94 2.93A8.47 8.47 0 012 19.54a11.94 11.94 0 006.48 1.9c7.78 0 12.04-6.46 12.04-12.04 0-.18-.01-.36-.02-.54A8.6 8.6 0 0024 5.1a8.4 8.4 0 01-2.54.7z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0114 6h3v3h-3c-.3 0-.5.2-.5.5V12h3.5l-.5 3h-3v7A10 10 0 0022 12z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5zm0 1.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm5.25-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="text-right text-sm">
          <h3 className="text-lg font-bold text-green-700">Contact Us</h3>
          <p className="text-gray-700 mt-2">support@smartcrop.com</p>
          <p className="text-gray-700">+91 98765 43210</p>
        </div>
      </div>

      <div className="border-t border-gray-300 text-center py-2 text-sm text-gray-600">
        © 2025 Smart Crop Assistance | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
