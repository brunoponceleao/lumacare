import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lumacare.clinic"),
  title: "LumaCare | AI Front Desk for Aesthetic Clinics",
  description:
    "LumaCare helps aesthetic clinics respond instantly to patient inquiries, qualify leads, and convert more inquiries into booked appointments.",
  icons: {
    icon: "/brand/lumacare-icon.svg",
    apple: "/brand/lumacare-icon.svg",
  },
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
