import Image from "next/image";
import React from "react";
import ilustration from "@/assets/logo/ilustrasi2.png"


const Tentangkami = () => {
  return (
    <>
      <section className="w-full px-4 lg:px-12 sm:px-6 md:px-8 py-8 md:py-16 lg:py-20 ">
        <div className="container mx-auto max-w-7xl lg:grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 p-5 flex flex-col justify-center text-white">
            <h3 className="lg:text-left text-center font-bold text-xl md:text-2xl lg:text-2xl mb-3 md:mb-5">
              Tentang kami
            </h3>
            <p className="text-sm md:text-base lg:text-base lg:w-[90%] w-full">
            Anak bisnis merupakan platform edukasi lomba bisnis yang bertujuan untuk mempersiapkan para pelajar dan mahasiswa dalam mengikuti kompetisi bisnis baik tingkat nasional maupun international. Jenis kompetisi bisnis yang dapat diikuti di antaranya <em className="font-semibold">business plan</em>, <em className="font-semibold">business case</em>, <em className="font-semibold"> marketing plan</em>, paper analisis pasar modal, akuntansi paper, dan lainnya.
            </p>
          </div>
          <div className="lg:col-span-1 lg:flex hidden ">
            <Image
              src={ilustration}
              width={440}
              height={338}
              alt="Group28"
              className="xl:w-[440px] xl:h-[338px] lg:w-[370px] lg:h-[280px] "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Tentangkami;
