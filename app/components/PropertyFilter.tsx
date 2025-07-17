import React from "react";

const PropertyFilter: React.FC<{
  filterType: string;
  onFilterChange: (type: string) => void;
}> = ({ filterType, onFilterChange }) => {
  const filters = [
    { key: "all", label: "All Properties" },
    { key: "agricultural", label: "Agricultural" },
    { key: "commercial", label: "Commercial" },
    { key: "residential", label: "Residential" },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`px-6 py-2 rounded-lg transition-colors ${
            filterType === filter.key
              ? "bg-green-600 text-white"
              : "bg-white text-gray-700 hover:bg-green-50"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};
export default PropertyFilter;
