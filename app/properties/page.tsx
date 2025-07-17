// import { Metadata } from "next";
// import { notFound } from "next/navigation";
// import PropertyPage from "@/app/components/PropertiesPage";
// import {
//   getPropertyBySlug,
//   getRelatedProperties,
// } from "@/app/utils/propertyUtils";
// import { Property } from "@/app/type";
// import { properties } from "@/app/data";

// interface Props {
//   params: {
//     slug: string;
//   };
// }

// // Generate metadata for SEO
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const property = getPropertyBySlug(params.slug, properties as Property[]);

//   if (!property) {
//     return {
//       title: "Property Not Found",
//     };
//   }

//   return {
//     title: `${property.title} - Madhya Pradesh Properties`,
//     description: property.description,
//     openGraph: {
//       title: property.title,
//       description: property.description,
//       images: [
//         {
//           url: property.image,
//           width: 1200,
//           height: 630,
//           alt: property.title,
//         },
//       ],
//       url: `https://yourwebsite.com/properties/${property.slug}`,
//       siteName: "Madhya Pradesh Properties",
//       locale: "en_IN",
//       type: "website",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: property.title,
//       description: property.description,
//       images: [property.image],
//     },
//     alternates: {
//       canonical: `https://yourwebsite.com/properties/${property.slug}`,
//     },
//     other: {
//       "application/ld+json": JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "RealEstate",
//         name: property.title,
//         description: property.description,
//         image: property.image,
//         address: {
//           "@type": "PostalAddress",
//           addressLocality: property.location,
//           addressRegion: "Madhya Pradesh",
//           addressCountry: "India",
//         },
//         offers: {
//           "@type": "Offer",
//           price: property.price,
//           priceCurrency: "INR",
//         },
//         aggregateRating: {
//           "@type": "AggregateRating",
//           ratingValue: property.rating,
//           ratingCount: "1",
//         },
//       }),
//     },
//   };
// }

// // Generate static params for all properties
// export async function generateStaticParams() {
//   // In a real app, you'd fetch this from your data source
//   return properties.map((property) => ({
//     slug: property.slug,
//   }));
// }

// export default async function PropertySlugPage({ params }: Props) {
//   const property = getPropertyBySlug(params.slug, properties);

//   if (!property) {
//     notFound();
//   }

//   const relatedProperties = getRelatedProperties(property, properties, 3);

//   return (
//     <>
//       {/* Structured Data Script */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "RealEstate",
//             name: property.title,
//             description: property.description,
//             image: property.image,
//             address: {
//               "@type": "PostalAddress",
//               addressLocality: property.location,
//               addressRegion: "Madhya Pradesh",
//               addressCountry: "India",
//             },
//             offers: {
//               "@type": "Offer",
//               price: property.price,
//               priceCurrency: "INR",
//             },
//             aggregateRating: {
//               "@type": "AggregateRating",
//               ratingValue: property.rating,
//               ratingCount: "1",
//             },
//           }),
//         }}
//       />

//       <PropertyPage property={property} relatedProperties={relatedProperties} />
//     </>
//   );
// }
"use client";
import PropertyListPage from "@/app/components/PropertyListPage";
import { properties } from "@/app/data";
import { useState } from "react";
import { Property } from "@/app/type";
import React from "react";

const Properties = () => {
  const [filterType, setFilterType] = useState("all");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
  };
  return (
    <PropertyListPage
      properties={properties}
      filterType={filterType}
      onFilterChange={setFilterType}
      onPropertyClick={handlePropertyClick}
    />
  );
};

export default Properties;
