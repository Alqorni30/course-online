import Image from "next/image";
import React from "react";
import ilustration from "@/assets/ilustrasi/aboutus 1.png";
import Faq from "./Faq";
import Mentor from "./Mentor";
import DetailkelasBsp from "../ui/DetailkelasBsp";

const KontenBsp = () => {
  return (
    <>
      <section className="w-full px-4 lg:px-12 sm:px-6 md:px-8 py-8 md:py-16 lg:py-20 bg-[#2095CB]">
        <div className="container mx-auto max-w-7xl lg:grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 p-5 flex flex-col justify-center text-white">
            <h5 className="lg:text-left text-center text-xl md:text-2xl lg:text-2xl mb-2">
              Hi, Selamat datang di Kelas{" "}
              <span className="font-bold">Business Plan</span>
            </h5>
            <h3 className="lg:text-left text-center font-bold lg:text-5xl md:text-4xl text-2xl mb-5 text-secondary">
              Anak Bisnis
            </h3>
            <p className="text-sm md:text-base lg:text-base lg:w-[70%] w-full">
              Anak bisnis merupakan platform edukasi lomba bisnis yang bertujuan
              untuk mempersiapkan para pelajar dan mahasiswa dalam mengikuti
              kompetisi bisnis baik tingkat nasional maupun international. Jenis
              kompetisi bisnis yang dapat diikuti di antaranya{" "}
              <em className="font-semibold">business plan</em>,{" "}
              <em className="font-semibold">business case</em>,{" "}
              <em className="font-semibold"> marketing plan</em>, paper analisis
              pasar modal, akuntansi paper, dan lainnya.
            </p>
          </div>
          <div className="lg:col-span-1 lg:flex hidden">
            <Image
              src={ilustration}
              width={400}
              height={400}
              alt="Group28"
              className="lg:w-[400px] lg:h-[400px] w-[370px] h-[280px] "
            />
          </div>
        </div>
      </section>
      <DetailkelasBsp />
      <Faq />
      <Mentor />
    </>
  );
};

export default KontenBsp;
