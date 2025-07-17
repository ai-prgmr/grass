"use client";
import React from "react";
import { Property } from "../type";
import {
  MapPin,
  Phone,
  Share2,
  Heart,
  Eye,
  Shield,
  Star,
  ArrowLeft,
  Calendar,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PropertyPage: React.FC<{
  property: Property;
  relatedProperties?: Property[];
}> = ({ property, relatedProperties = [] }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: property.title,
          text: `Check out this ${property.type} property in ${property.location}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      } catch (error) {
        console.log("Error copying to clipboard:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            href="/properties"
            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Properties
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Property Image and Basic Info */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative">
            <Image
              src={property.image}
              alt={property.title}
              width={1200}
              height={600}
              className="w-full h-96 object-cover"
            />

            <div className="absolute top-6 left-6">
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold text-white ${
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

            <div className="absolute top-6 right-6 flex gap-3">
              {property.verified && (
                <div className="bg-green-500 text-white p-2 rounded-full">
                  <Shield size={20} />
                </div>
              )}
              <button className="bg-white/90 backdrop-blur-sm text-gray-700 p-2 rounded-full hover:bg-white transition-colors">
                <Heart size={20} />
              </button>
              <button
                onClick={handleShare}
                className="bg-white/90 backdrop-blur-sm text-gray-700 p-2 rounded-full hover:bg-white transition-colors"
              >
                <Share2 size={20} />
              </button>
            </div>

            <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <Eye size={16} />
              <span className="text-sm font-medium">
                {property.views} views
              </span>
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-3">
                  {property.title}
                </h1>
                <p className="text-gray-600 flex items-center gap-2 text-lg">
                  <MapPin size={20} />
                  {property.location}
                </p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-green-600 mb-1">
                  {property.price}
                </div>
                <div className="text-gray-500 text-lg">{property.area}</div>
                <div className="flex items-center gap-1 mt-2 justify-end">
                  <Star className="text-yellow-500 fill-current" size={18} />
                  <span className="font-semibold">{property.rating}</span>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Description
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Property Features
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {property.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="bg-green-50 text-green-700 px-4 py-3 rounded-lg text-sm font-medium"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
            <Phone className="text-green-600" size={24} />
            Contact Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <User className="text-gray-400" size={20} />
                <div>
                  <p className="font-medium text-gray-800">Property Agent</p>
                  <p className="text-gray-600">Madhya Pradesh Properties</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="text-gray-400" size={20} />
                <div>
                  <p className="font-medium text-gray-800">Available</p>
                  <p className="text-gray-600">
                    Monday to Saturday, 9 AM - 6 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="https://wa.me/919876543210"
                className="w-full bg-green-600 text-white py-4 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-3 text-lg font-medium"
              >
                <Phone size={20} />
                WhatsApp Now
              </a>
              <a
                href="tel:+919876543210"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-3 text-lg font-medium"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Related Properties */}
        {relatedProperties.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Related Properties
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProperties.slice(0, 3).map((relatedProperty) => (
                <Link
                  key={relatedProperty.id}
                  href={`/properties/${relatedProperty.slug}`}
                  className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <Image
                    src={relatedProperty.image}
                    alt={relatedProperty.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {relatedProperty.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 flex items-center gap-1">
                      <MapPin size={14} />
                      {relatedProperty.location}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-bold">
                        {relatedProperty.price}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {relatedProperty.area}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyPage;
