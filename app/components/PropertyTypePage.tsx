// app/components/PropertyTypePage.tsx
import { Property } from "@/app/type";
import Link from "next/link";
import Image from "next/image";

interface PropertyTypePageProps {
  properties: Property[];
  type: string;
}

const PropertyTypePage: React.FC<PropertyTypePageProps> = ({
  properties,
  type,
}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">
        {type} Properties in Madhya Pradesh
      </h1>

      <div className="text-gray-600 mb-6">
        Found {properties.length} {type} properties
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <Image
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
                width={500}
                height={300}
              />
              {property.verified && (
                <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm">
                  Verified
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{property.title}</h3>
              <p className="text-gray-600 mb-2">{property.location}</p>
              <p className="text-blue-600 font-bold mb-2">{property.price}</p>
              <p className="text-sm text-gray-500 mb-3">{property.area}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm">{property.rating}</span>
                </div>
                <div className="text-sm text-gray-500">
                  {property.views} views
                </div>
              </div>

              <Link
                href={`/properties/${property.slug}`}
                className="mt-4 block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {properties.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No {type} properties found at the moment.
          </p>
        </div>
      )}
    </div>
  );
};

export default PropertyTypePage;
