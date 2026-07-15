import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpaceChamps | Drone & Geospatial Intelligence",
  description: "High-precision LiDAR surveying, aerial mapping, 3D modelling and geospatial intelligence across Africa and Asia.",
  keywords: ["drone surveying", "LiDAR", "geospatial", "Africa", "Asia", "aerial mapping", "GIS"],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/logo.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
