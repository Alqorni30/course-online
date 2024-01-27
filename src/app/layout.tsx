import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import logo from "@/assets/logo/logo anak bisnis satu.png";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anak Bisnis",
  description:
    "Platform edukasi dan mentoring yang membantu pelajar dan mahasiswa mengikuti berbagai lomba bisnis baik tingkat nasional maupun internasional",
  icons: {
    icon: {
      url: logo.src,
      type: "image/png",
      sizes: "32x32",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
