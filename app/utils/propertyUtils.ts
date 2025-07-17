// utils/propertyUtils.ts

/**
 * Generate a URL-friendly slug from a property title
 */
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
};

/*
 * Generate a unique slug by appending location if needed
 */
export const generateUniqueSlug = (
  title: string,
  location: string,
  id: number
): string => {
  const baseSlug = generateSlug(title);
  const locationSlug = generateSlug(location);

  // Combine title and location for uniqueness
  return `${baseSlug}-${locationSlug}-${id}`;
};

import { Property } from "@/app/type";

// Example function to transform existing properties to include slugs
export const addSlugsToProperties = (
  properties: Omit<Property, "slug">[]
): Property[] => {
  return properties.map((property) => ({
    ...property,
    slug: generateUniqueSlug(property.title, property.location, property.id),
  }));
};

// SEO-friendly property data example

// Function to get property by slug
export const getPropertyBySlug = (
  slug: string,
  properties: Property[]
): Property | undefined => {
  return properties.find((property) => property.slug === slug);
};

// Function to get related properties
export const getRelatedProperties = (
  currentProperty: Property,
  properties: Property[],
  limit: number = 3
): Property[] => {
  return properties
    .filter(
      (property) =>
        property.type === currentProperty.type &&
        property.id !== currentProperty.id
    )
    .slice(0, limit);
};
