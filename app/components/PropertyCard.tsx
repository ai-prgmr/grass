import React from "react";
import { Property } from "../type";
import {
  Eye,
  Heart,
  MapPin,
  Shield,
  Star,
  ArrowRight,
  Share2,
} from "lucide-react";

import Image from "next/image";
const PropertyCard: React.FC<{
  property: Property;
  onViewDetails: (property: Property) => void;
}> = ({ property, onViewDetails }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <Image
          src={property.image}
          alt={property.title}
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />

        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
              property.type === "agricultural"
                ? "bg-green-500"
                : property.type === "commercial"
                ? "bg-blue-500"
                : "bg-purple-500"
            }`}
          >
            {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
          </span>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          {property.verified && (
            <div className="bg-green-500 text-white p-2 rounded-full">
              <Shield size={16} />
            </div>
          )}
          <button className="bg-white/80 backdrop-blur-sm text-gray-700 p-2 rounded-full hover:bg-white transition-colors">
            <Heart size={16} />
          </button>
        </div>
        <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full">
          <Eye size={14} />
          <span className="text-xs">{property.views}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {property.title}
        </h3>
        <p className="text-gray-600 mb-3 flex items-center gap-1">
          <MapPin size={16} />
          {property.location}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-green-600">
              {property.price}
            </span>
            <span className="text-gray-500 ml-2">• {property.area}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="text-yellow-500 fill-current" size={16} />
            <span className="text-sm font-semibold">{property.rating}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {property.features.map((feature, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onViewDetails(property)}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            View Details
            <ArrowRight size={16} />
          </button>
          <button className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors">
            <Share2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;
