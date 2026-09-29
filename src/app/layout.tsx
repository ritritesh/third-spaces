import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Third Spaces · Sanctuaries in the City",
  description: "Curated zero-cost and low-cost sanctuaries to read, reflect, and converse without commercial pressure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="paper-pattern min-h-screen text-paper-900 selection:bg-sanctuary-sand">
        {children}
      </body>
    </html>
  );
}
