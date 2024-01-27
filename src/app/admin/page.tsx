import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard Anak Bisnis",
};


export default function Home() {
  return (
    <>
      <ECommerce />
    </>
  );
}
