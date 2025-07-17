// components/PropertyTypeSelector.jsx
"use client";

import Link from "next/link";
interface PropertyType {
  id: string;
  label: string;
  icon: string;
  href: string;
}
// Define button data for easier mapping and consistency
const propertyTypes: PropertyType[] = [
  {
    id: "residential",
    label: "Residential",
    icon: "🏠",
    href: "/properties/residential",
  },
  {
    id: "commercial",
    label: "Commercial",
    icon: "🏢",
    href: "/properties/commercial",
  },
  {
    id: "agricultural",
    label: "Agricultural Land",
    icon: "🚜",
    href: "/properties/agricultural",
  },
];

export default function PropertyTypeSelector() {
  return (
    <section className="py-8 bg-gray-50">
      {" "}
      {/* Added a wrapper section with styling */}
      <div className="container mx-auto px-4">
        {" "}
        {/* Centering container */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Explore Property Types
        </h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          Find the perfect property for your needs – whether it&apos;s a home, a
          business space, or land for farming.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {propertyTypes.map((type) => (
            <Link
              key={type.id}
              href={type.href}
              passHref
              className={`
                flex flex-col items-center justify-center
                p-6 w-40 h-40 rounded-lg shadow-lg
                transition-all duration-300 ease-in-out
                transform hover:scale-105 hover:shadow-xl
                bg-blue-600 text-white border-2 border-blue-700
              `}
            >
              <div className="text-5xl mb-2">{type.icon}</div>
              <span className="text-lg font-semibold text-center">
                {type.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
