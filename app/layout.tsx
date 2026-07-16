import type { Metadata } from "next";
import "./globals.css";
import PageTransition from "./PageTransition";
import Animations from "./Animations";

export const metadata: Metadata = {
  title: "SpaceChamps | Drone & Geospatial Intelligence",
  description: "High-precision LiDAR surveying, aerial mapping, 3D modelling and geospatial intelligence across Africa and Asia.",
  keywords: ["drone surveying", "LiDAR", "geospatial", "Africa", "Asia", "aerial mapping", "GIS"],
  icons: {
    icon: [{ url: "/spacechamps-favicon-v2.png", type: "image/png", sizes: "512x512" }],
    shortcut: "/spacechamps-favicon-v2.png",
    apple: "/spacechamps-favicon-v2.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Animations />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
