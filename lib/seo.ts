import { Metadata } from "next";

const siteName = "Fort Dodge Islamic Center";
const siteDescription =
  "Fort Dodge Islamic Center - Serving the Muslim community in Fort Dodge, Iowa with prayer services, educational programs, community support, and Islamic guidance since 2002.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://arqum.org";
const siteImage = `${siteUrl}/images/fortlogos.png`;

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
}

/**
 * Generates comprehensive SEO metadata for pages
 */
export function generateMetadata({
  title,
  description,
  path = "",
  image = siteImage,
  noIndex = false,
  keywords = [],
}: SEOProps): Metadata {
  const fullTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} - Islamic Center in Fort Dodge, Iowa`;

  const fullDescription = description || siteDescription;
  const url = `${siteUrl}${path}`;

  const defaultKeywords = [
    "Fort Dodge Islamic Center",
    "Fort Dodge masjid",
    "Islamic center Iowa",
    "Muslim community Fort Dodge",
    "prayer times Fort Dodge",
    "Islamic education",
    "Muslim community Iowa",
    "Darul Arqum",
    "Islamic services Fort Dodge",
  ];

  const allKeywords = [...defaultKeywords, ...keywords];

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: allKeywords.join(", "),
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName,
      title: fullTitle,
      description: fullDescription,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [image],
      creator: "@fortdodgeislamic", // Update with actual Twitter handle if available
    },
    alternates: {
      canonical: url,
    },
    metadataBase: new URL(siteUrl),
  };
}

/**
 * Generates JSON-LD structured data for Organization
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ReligiousOrganization",
    "@id": `${siteUrl}#organization`,
    name: siteName,
    alternateName: "Darul Arqum",
    url: siteUrl,
    logo: siteImage,
    description: siteDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fort Dodge",
      addressRegion: "IA",
      addressCountry: "US",
    },
    sameAs: [
      // Add social media links if available
      // "https://www.facebook.com/fortdodgeislamic",
      // "https://www.instagram.com/fortdodgeislamic",
    ],
  };
}

/**
 * Generates JSON-LD structured data for a WebPage
 */
export function generateWebPageSchema({
  title,
  description,
  path = "",
}: {
  title: string;
  description?: string;
  path?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description || siteDescription,
    url: `${siteUrl}${path}`,
    inLanguage: "en-US",
    isPartOf: {
      "@id": `${siteUrl}#website`,
    },
    about: {
      "@id": `${siteUrl}#organization`,
    },
  };
}

/**
 * Generates JSON-LD structured data for Website
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    url: siteUrl,
    name: siteName,
    description: siteDescription,
    publisher: {
      "@id": `${siteUrl}#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generates JSON-LD structured data for Place of Worship
 */
export function generatePlaceOfWorshipSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "PlaceOfWorship",
    name: siteName,
    description: siteDescription,
    url: siteUrl,
    image: siteImage,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fort Dodge",
      addressRegion: "IA",
      addressCountry: "US",
    },
  };
}

