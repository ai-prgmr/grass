"use client";

import React from "react";
import { Phone } from "lucide-react";
import Image from "next/image";
const Header: React.FC<{
  activeTab: string;
  setActiveTab: (tab: string) => void;
}> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="bg-white backdrop-blur-sm sticky top-0 z-40 border-b-4 border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center gap-3">
            <div className="text-white p-2 rounded-lg">
              <Image
                src="/grass-logo-gif.gif"
                alt="Grass Venture Logo"
                width={60}
                height={60}
                priority
                loading="eager"
                unoptimized={true}
                className="w-48 h-24"
              />
            </div>
            {/* <div>
              <h1 className="text-xl font-bold text-green-700">
                Grass Venture
              </h1>
              <p className="text-xs text-green-700">
                Madhya Pradesh Properties
              </p>
            </div> */}
          </div>

          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => setActiveTab("home")}
              className={`text-md font-medium ${
                activeTab === "home"
                  ? "p-2 bg-green-600 text-white rounded-lg"
                  : "text-gray-500 hover:text-green-600"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab("properties")}
              className={`text-md font-medium ${
                activeTab === "properties"
                  ? "p-2 bg-green-600 text-white rounded-lg"
                  : "text-gray-500 hover:text-green-600"
              }`}
            >
              Properties
            </button>
            <button
              onClick={() => setActiveTab("about")}
              className={`text-md font-medium ${
                activeTab === "about"
                  ? "p-2 bg-green-600 text-white rounded-lg"
                  : "text-gray-500 hover:text-green-600"
              }`}
            >
              About
            </button>
          </nav>

          <a
            href="https://wa.me/919876543210"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <Phone size={16} />
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
