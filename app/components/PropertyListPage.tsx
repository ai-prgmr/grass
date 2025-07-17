// app/components/PropertiesPage.tsx (plural - for listing properties)
import { Property } from "@/app/type";
import Image from "next/image";
interface PropertyListPageProps {
  properties: Property[];
  filterType?: string;
  onFilterChange?: (type: string) => void;
  onPropertyClick?: (property: Property) => void;
}
import Link from "next/link";

const PropertyListPage: React.FC<PropertyListPageProps> = ({
  properties,
  filterType = "all",
  onFilterChange,
  onPropertyClick,
}) => {
  const propertyTypes = ["all", "agricultural", "commercial", "residential"];

  const filteredProperties =
    filterType === "all"
      ? properties
      : properties.filter((property) => property.type === filterType);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Properties in Madhya Pradesh</h1>

      {/* Filter buttons */}
      {onFilterChange && (
        <div className="flex flex-wrap gap-2 mb-6">
          {propertyTypes.map((type) => (
            <button
              key={type}
              onClick={() => onFilterChange(type)}
              className={`px-4 py-2 rounded capitalize ${
                filterType === type
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      )}

      {/* Properties count */}
      <div className="text-gray-600 mb-6">
        Found {filteredProperties.length} properties
      </div>

      {/* Properties grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => onPropertyClick?.(property)}
          >
            <div className="relative">
              <Image
                width={300}
                height={200}
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
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

              <div className="mt-2">
                <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded capitalize">
                  {property.type}
                </span>
              </div>
            </div>
            <Link
              href={`/properties/${property.slug}`}
              className="mt-4 block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      {/* No properties message */}
      {filteredProperties.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No properties found for the selected filter.
          </p>
        </div>
      )}
    </div>
  );
};

export default PropertyListPage;
