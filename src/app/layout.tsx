import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const diatype = localFont({
  src: [
    {
      path: "../../public/fonts/ABCDiatype-Regular-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ABCDiatype-Medium-Trial.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-diatype",
});
const gtFlexa = localFont({
  src: [
    {
      path: "../../public/fonts/GT-Flexa-Bold-Trial.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gt-flexa",
});

export const metadata: Metadata = {
  title: "Evee",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${diatype.variable} ${gtFlexa.variable} dark text-foreground bg-background`}
      >
        <Header />
        <main className="pb-32 px-6">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
