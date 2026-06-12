import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const headingFont = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.signwisesigns.com"),
  title: {
    default: "SignWise Signs | Custom Signs & Graphic Design",
    template: "%s | SignWise Signs",
  },
  description:
    "Full-service custom signage, graphics, installation, and design for businesses throughout Georgia. From concept to installation, SignWise brings your brand to life.",
  keywords: [
    "custom signs Georgia",
    "business signs",
    "vehicle graphics",
    "monument signs",
    "ADA signage",
    "sign installation",
  ],
  authors: [{ name: "SignWise Signs" }],
  creator: "SignWise Signs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.signwisesigns.com",
    siteName: "SignWise Signs",
    title: "SignWise Signs | Custom Signs & Graphic Design",
    description:
      "Thoughtful sign design, dependable fabrication, and expert installation from a team with more than 30 years of experience.",
    images: [
      {
        url: "/signwise-logo.avif",
        width: 1200,
        height: 630,
        alt: "SignWise Signs and Graphic Designs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SignWise Signs | Custom Signs & Graphic Design",
    description:
      "Custom signs, graphics, and installation for businesses throughout Georgia.",
    images: ["/signwise-logo.avif"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
