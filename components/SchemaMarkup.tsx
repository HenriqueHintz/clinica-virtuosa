import React from 'react';
import { UNITS } from '../constants';

export const SchemaMarkup: React.FC = () => {
  // Generate LocalBusiness Schema for each unit
  const localBusinesses = UNITS.map(unit => ({
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": `Clínica Estética Virtuosa - ${unit.name}`,
    "image": "https://clinica-virtuosa.vercel.app/assets/hero/hero-bg.webp",
    "logo": "https://clinica-virtuosa.vercel.app/assets/logo.svg",
    "@id": `https://clinica-virtuosa.vercel.app/#${unit.id}`,
    "url": "https://clinica-virtuosa.vercel.app",
    "telephone": unit.phone,
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2500"
    },
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
      "https://www.instagram.com/clinicavirtuosa",
      "https://www.facebook.com/clinicavirtuosa"
    ]
  }));

  // Organization Schema
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Clínica Estética Virtuosa",
    "url": "https://clinica-virtuosa.vercel.app",
    "logo": "https://clinica-virtuosa.vercel.app/assets/logo.svg",
    "sameAs": [
      "https://www.instagram.com/clinicavirtuosa",
      "https://www.facebook.com/clinicavirtuosa"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2500"
    }
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