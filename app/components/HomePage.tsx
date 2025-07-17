import React from "react";
import { Property } from "../type";
import MapComponent from "./MapComponent";
import PropertyCard from "./PropertyCard";
import StatCard from "./StatCard";
import BackgroundCarousel from "./BackgroundCarousel";
import PropertyTypeSelector from "./PropertyTypeComponent";
import {
  ArrowRight,
  Phone,
  Building,
  User,
  Award,
  TrendingUp,
} from "lucide-react";

const HomePage: React.FC<{
  properties: Property[];
  onPropertyClick: (property: Property) => void;
  onNavigateToProperties: () => void;
}> = ({ properties, onPropertyClick, onNavigateToProperties }) => {
  return (
    <div className="space-y-6">
      <BackgroundCarousel>
        <section className="text-center py-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your Perfect
            <span className="text-green-600 block">Property in MP</span>
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Discover premium agricultural, commercial, and residential
            properties across Madhya Pradesh. Verified listings with transparent
            pricing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={onNavigateToProperties}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              Explore Properties
              <ArrowRight size={20} />
            </button>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-800 text-white px-8 py-3 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors flex items-center gap-2"
            >
              <Phone size={20} />
              Get Expert Advice
            </a>
          </div>
        </section>
      </BackgroundCarousel>
      <section className="grid md:grid-cols-4 gap-6 mb-12">
        <StatCard
          icon={<Building className="text-white" size={24} />}
          title="Total Properties"
          value="500+"
          color="bg-blue-500"
        />
        <StatCard
          icon={<User className="text-white" size={24} />}
          title="Happy Clients"
          value="200+"
          color="bg-green-500"
        />
        <StatCard
          icon={<Award className="text-white" size={24} />}
          title="Years Experience"
          value="10+"
          color="bg-purple-500"
        />
        <StatCard
          icon={<TrendingUp className="text-white" size={24} />}
          title="Success Rate"
          value="95%"
          color="bg-orange-500"
        />
      </section>

      <section>
        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Explore Properties on Interactive Map
        </h3>
        <MapComponent
          properties={properties}
          onPropertyClick={onPropertyClick}
        />
      </section>
      <section>
        <PropertyTypeSelector />
      </section>
      <section>
        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Featured Properties
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.slice(0, 3).map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onViewDetails={onPropertyClick}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
export default HomePage;
