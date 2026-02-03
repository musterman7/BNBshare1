import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import { Web3Provider } from "@/providers/Web3Provider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "4Share - Tax Tokens on Four.Meme | Treasury & Claim",
  description:
    "Create Four.Meme Tax Tokens on BNB Chain. 100% of trading tax goes to a shared treasury. Claim your share from the tokens you create.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${shareTechMono.variable} antialiased`}
      >
        <Web3Provider>
          <Header />
          {children}
          <Footer />
        </Web3Provider>
      </body>
    </html>
  );
}
