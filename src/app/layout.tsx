import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dakingo - Online Bakery",
  description: "Your Trusted FSSAI Certified Online Bakery for Every Celebration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans bg-[#FAF0EC] text-gray-800 antialiased min-h-screen py-4 px-2`}>
        {children}
      </body>
    </html>
  );
}