import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import logo from "@/assets/logo/Logo Anak Bisnis Update.png";

const poppins = Poppins({
  weight: ["400", "700"],
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
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
