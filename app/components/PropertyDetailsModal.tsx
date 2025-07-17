import React from "react";
import { Property } from "../type";
import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
const PropertyDetailsModal: React.FC<{
  property: Property;
  onClose: () => void;
}> = ({ property, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <Image
            src={property.image}
            alt={property.title}
            width={500}
            height={300}
            className="w-full h-64 object-cover rounded-t-2xl"
          />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-gray-700 p-2 rounded-full hover:bg-white transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {property.title}
              </h2>
              <p className="text-gray-600 flex items-center gap-1">
                <MapPin size={16} />
                {property.location}
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-600">
                {property.price}
              </div>
              <div className="text-gray-500">{property.area}</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {property.description}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {property.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Phone className="text-green-600" size={20} />
              Connect with Us
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="https://wa.me/919876543210"
                className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                WhatsApp Now
              </a>
              <a
                href="tel:+919876543210"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsModal;
