import React from 'react';
import { UNITS } from '../constants';

export const SchemaMarkup: React.FC = () => {
  // Generate LocalBusiness Schema for each unit
  const localBusinesses = UNITS.map(unit => ({
    "@context": "https://schema.org",
    "@type": "BeautySalon", // More specific than LocalBusiness
    "name": `Clínica Estética Virtuosa - ${unit.name}`,
    "image": "https://picsum.photos/800/600", // Replace with real logo/storefront
    "@id": `https://virtuosa.com.br/#${unit.id}`,
    "url": "https://virtuosa.com.br",
    "telephone": unit.phone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": unit.address.split(',')[0],
      "addressLocality": unit.city,
      "addressRegion": "SC",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": unit.coordinates.lat,
      "longitude": unit.coordinates.lng
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.instagram.com/virtuosaestetica",
      "https://www.facebook.com/virtuosaestetica"
    ]
  }));

  // Organization Schema
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Clínica Estética Virtuosa",
    "url": "https://virtuosa.com.br",
    "logo": "https://picsum.photos/200/200"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinesses) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
    </>
  );
};