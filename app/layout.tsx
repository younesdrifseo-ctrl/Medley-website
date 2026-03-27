import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://medley-argenteuil.fr"),
  title: "MÉDLËY Argenteuil — Restaurant 4 Cuisines | Top Chef Mohamed Si",
  description:
    "MÉDLËY, restaurant premium à Argenteuil. 4 cuisines du monde (Orient, Asian, Brasserie, Italy) par le Chef Mohamed Si, révélé dans Top Chef France. Ouverture 15 avril 2026. Réservation en ligne.",
  keywords: [
    "MÉDLËY",
    "restaurant Argenteuil",
    "Mohamed Si",
    "Top Chef",
    "restaurant premium",
    "cuisine orientale",
    "cuisine asiatique",
    "brasserie française",
    "cuisine italienne",
  ],
  openGraph: {
    title: "MÉDLËY Argenteuil — Restaurant 4 Cuisines",
    description:
      "4 cuisines du monde par le Chef Mohamed Si, révélé dans Top Chef France.",
    type: "website",
    locale: "fr_FR",
    url: "https://medley-argenteuil.fr",
    siteName: "MÉDLËY",
    images: [
      {
        url: "/assets/photos/hero.jpg",
        width: 1200,
        height: 630,
        alt: "MÉDLËY Restaurant Argenteuil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MÉDLËY Argenteuil — Restaurant 4 Cuisines",
    description:
      "4 cuisines du monde par le Chef Mohamed Si. Ouverture 15 avril 2026.",
  },
  alternates: {
    canonical: "https://medley-argenteuil.fr",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "MÉDLËY",
  description:
    "Restaurant premium proposant 4 cuisines du monde : Orient, Asian, Brasserie, Italy. Par le Chef Mohamed Si, révélé dans Top Chef France.",
  url: "https://medley-argenteuil.fr",
  telephone: "+33764016597",
  email: "Medleyrestaurants@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "72 route de Pontoise",
    addressLocality: "Argenteuil",
    postalCode: "95100",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.9473,
    longitude: 2.2467,
  },
  servesCuisine: ["Oriental", "Asiatique", "Française", "Italienne"],
  priceRange: "€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "15:00",
      closes: "01:00",
    },
  ],
  image: "https://medley-argenteuil.fr/assets/photos/hero.jpg",
  sameAs: ["https://www.instagram.com/medleyrestaurant"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Mono:wght@300;400;500&family=Space+Grotesk:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
