"use client";
import React, { useState } from "react";
import HomePage from "./components/HomePage";
import PropertyListPage from "./components/PropertyListPage";
import AboutPage from "./components/AboutPage";
import PropertyDetailsModal from "./components/PropertyDetailsModal";
import { Property } from "./type";
import { properties } from "./data";

const RealEstateApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [filterType, setFilterType] = useState("all");

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
  };

  const handleNavigateToProperties = () => {
    setActiveTab("properties");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {activeTab === "home" && (
          <HomePage
            properties={properties}
            onPropertyClick={handlePropertyClick}
            onNavigateToProperties={handleNavigateToProperties}
          />
        )}

        {activeTab === "properties" && (
          <PropertyListPage
            properties={properties}
            filterType={filterType}
            onFilterChange={setFilterType}
            onPropertyClick={handlePropertyClick}
          />
        )}

        {activeTab === "about" && <AboutPage />}
      </main>

      {selectedProperty && (
        <PropertyDetailsModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
};

export default RealEstateApp;
