// app/properties/[slug]/page.tsx
import { notFound } from "next/navigation";
import { properties } from "@/app/data";
import PropertyPage from "@/app/components/PropertiesPage";
import PropertyTypePage from "@/app/components/PropertyTypePage";

type PropertyType = "agricultural" | "commercial" | "residential";

const propertyTypes: PropertyType[] = [
  "agricultural",
  "commercial",
  "residential",
];
// Helper function
function isPropertyType(slug: string): slug is PropertyType {
  return (propertyTypes as string[]).includes(slug);
}
interface PageProps {
  params: {
    slug: string;
  };
}

export default function DynamicPropertyPage({ params }: PageProps) {
  const { slug } = params;

  // Check if it's a property type first
  if (isPropertyType(slug)) {
    const typeProperties = properties.filter((p) => p.type === slug);

    return <PropertyTypePage properties={typeProperties} type={slug} />;
  }

  // Check if it's an individual property
  const property = properties.find((p) => p.slug === slug);

  if (property) {
    const relatedProperties = properties
      .filter((p) => p.type === property.type && p.id !== property.id)
      .slice(0, 3);

    return (
      <PropertyPage property={property} relatedProperties={relatedProperties} />
    );
  }

  // If neither found, return 404
  notFound();
}

// Generate static params for both types and individual properties
export async function generateStaticParams() {
  const params: { slug: string }[] = [];

  // Add params for individual properties
  properties.forEach((property) => {
    params.push({
      slug: property.slug,
    });
  });

  // Add params for property types
  propertyTypes.forEach((type) => {
    params.push({
      slug: type,
    });
  });

  return params;
}

// Generate metadata
export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;

  // Check if it's a property type
  if (isPropertyType(slug)) {
    return {
      title: `${
        slug.charAt(0).toUpperCase() + slug.slice(1)
      } Properties - Madhya Pradesh`,
      description: `Browse ${slug} properties in Madhya Pradesh`,
    };
  }

  // Check if it's an individual property
  const property = properties.find((p) => p.slug === slug);

  if (property) {
    return {
      title: `${property.title} - Madhya Pradesh Properties`,
      description: property.description,
      openGraph: {
        title: property.title,
        description: property.description,
        images: [property.image],
      },
    };
  }

  return {
    title: "Property Not Found",
  };
}
