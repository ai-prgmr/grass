export interface Property {
  id: number;
  title: string;
  slug: string;
  type: "agricultural" | "commercial" | "residential";
  location: string;
  price: string;
  area: string;
  coordinates: { lat: number; lng: number };
  image: string;
  features: string[];
  rating: number;
  views: number;
  description: string;
  verified: boolean;
}
