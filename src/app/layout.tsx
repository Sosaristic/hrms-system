import Providers from "@/components/Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HMRS",
  icons: {
    icon: "/svg/logo.svg",
  },
  description: "A system for managing employees in a compnay",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className} ${lexend.className}`}>
          {children}
        </body>
      </html>
    </Providers>
  );
}
