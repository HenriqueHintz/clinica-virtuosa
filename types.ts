export interface Unit {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  whatsapp: string; // Clean number for API
  whatsappDisplay: string;
  email: string;
  mapUrl: string; // Google Maps Embed URL
  googleMapsLink: string; // Direct link
  coordinates: {
    lat: number;
    lng: number;
  };
  images?: string[];
  instagram?: string;
  facebook?: string;
}

export interface SubService {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  subServices?: SubService[];
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  avatar?: string;
  treatment?: string;
  fullLocation?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}