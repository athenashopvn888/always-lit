import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alwayslitcannabis.com"),
  title: {
    default: "Always Lit Cannabis — Premium Cannabis Dispensary, Toronto",
    template: "%s | Always Lit Cannabis",
  },
  description:
    "Shop 200+ premium cannabis strains at Always Lit Cannabis. Exotic, Premium, AAA+, AA & Budget flower from $3/g. Toronto's most fire dispensary at 644 Queen St W. Visit us today.",
  keywords: [
    "cannabis dispensary Toronto",
    "weed store Queen West",
    "exotic flower Toronto",
    "premium cannabis",
    "Always Lit Cannabis",
    "cheap weed Toronto",
    "dispensary near me",
    "THC flower",
    "indica sativa hybrid",
    "edibles Toronto",
    "vapes",
    "pre-rolls",
    "native cigarettes Toronto",
    "cannabis delivery",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://alwayslitcannabis.com",
    siteName: "Always Lit Cannabis",
    title: "Always Lit Cannabis — Premium Cannabis, Always Fire",
    description:
      "200+ strains from $3/g. Exotic to Budget. Toronto's most fire dispensary at 644 Queen St W. Open daily 10AM–3AM.",
    images: [
      {
        url: "/banners/always_lit_premium_cannabis_showcase.webp",
        width: 1200,
        height: 630,
        alt: "Always Lit Cannabis — Premium Cannabis Dispensary Toronto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Always Lit Cannabis — Toronto's Most Fire Dispensary",
    description: "200+ strains from $3/g. Open daily 10AM–3AM at 644 Queen St W.",
    images: ["/banners/always_lit_premium_cannabis_showcase.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://alwayslitcannabis.com",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://alwayslitcannabis.com",
  name: "Always Lit Cannabis",
  description: "Premium cannabis dispensary in Toronto with 200+ strains. Exotic, Premium, AAA+, AA & Budget flower. Open daily 10AM–3AM.",
  url: "https://alwayslitcannabis.com",
  telephone: "+14161234567",
  email: "info@alwayslitcannabis.com",
  image: "https://alwayslitcannabis.com/banners/always_lit_premium_cannabis_showcase.webp",
  logo: "https://alwayslitcannabis.com/banners/logo.jpg",
  priceRange: "$3 - $20/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: "644 Queen St W",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M6J 1E4",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.6483,
    longitude: -79.4028,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "03:00",
    },
  ],
  sameAs: [
    "https://maps.app.goo.gl/YFPDuRCjwiuZL4J86",
  ],
  hasMap: "https://maps.app.goo.gl/YFPDuRCjwiuZL4J86",
  areaServed: {
    "@type": "City",
    name: "Toronto",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
