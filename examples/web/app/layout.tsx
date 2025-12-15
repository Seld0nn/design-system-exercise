import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design System Example",
  description: "Cross-platform typography showcase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
