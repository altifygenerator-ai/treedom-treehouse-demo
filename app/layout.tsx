import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Treehouse Stay in Jonesborough, Tennessee`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} | Treehouse Stay in Jonesborough, Tennessee`,
    description: site.description,
    images: [site.socialPreview],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
