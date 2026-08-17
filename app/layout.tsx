import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.troysawyer.com"),
  title: {
    default: "Troy Sawyer — Software Developer & Systems Thinker",
    template: "%s — Troy Sawyer",
  },
  description:
    "Troy Sawyer is a Saskatchewan software architect, developer, and systems analyst who builds practical tools for complex information and workflows.",
  keywords: [
    "Troy Sawyer",
    "software developer",
    "software architect",
    "systems analyst",
    "Saskatchewan",
    "information management",
    "AgileIM",
    "EmailPointer",
  ],
  authors: [{ name: "Troy Sawyer", url: "https://www.troysawyer.com" }],
  creator: "Troy Sawyer",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Troy Sawyer — Software Developer & Systems Thinker",
    description:
      "Practical, dependable software for complex information and workflows.",
    url: "/",
    siteName: "Troy Sawyer",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1728,
        height: 908,
        alt: "Troy Sawyer — Software Developer & Systems Thinker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Troy Sawyer — Software Developer & Systems Thinker",
    description:
      "Practical, dependable software for complex information and workflows.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#eeeade",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
