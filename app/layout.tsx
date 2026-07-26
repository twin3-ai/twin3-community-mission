import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "twin3 Community Mission",
  description:
    "Enter the Twin Matrix, answer live community questions, and test your knowledge.",
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
