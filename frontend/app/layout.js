import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://your-site.com"),
  title: {
    default: "FreightFlow",
    template: "%s | FreightFlow",
  },
  description: `A Web3-enabled logistics and supply chain platform built on the StarkNet ecosystem, designed to streamline freight and cargo operations for small businesses, large enterprises, and independent shippers.`,
  robots: {
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
  // JSON-LD structured data for organization
  other: {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "FreightFlow",
      description: "Efficient freight management and logistics solutions",
      url: "https://your-site.com",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
