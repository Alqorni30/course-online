import Image from "next/image";
import React from "react";
import ilustration from "@/assets/logo/ilustrasi2.png";


const Tentangkami = () => {
  return (
    <>
      <section className="w-full px-4 lg:px-12 sm:px-6 md:px-8 py-8 md:py-16 lg:py-20 bg-gradient-to-r from-sky-400 via-teal-300 to-cyan-500">
        <div className="container mx-auto max-w-7xl lg:grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          <div className="lg:col-span-2 p-5">
            <h3 className="lg:text-left text-center font-bold text-primary text-xl md:text-2xl lg:text-2xl mb-3 md:mb-5">
              Who we are?
            </h3>
            <h1 className="lg:text-left text-center font-bold text-lg md:text-4xl lg:text-4xl mb-6 md:mb-11">
              We are just a bunch of practitioners working in the{" "}
              <span className="text-pink">technology industry.</span>
            </h1>
            <p className="text-sm md:text-base lg:text-base ">
              Anak bisnis Merupakan platform yang membantu para pelajar di
              Indonesia untuk memenangkan kompetisi bisnis baik secara nasional
              maupun international.
            </p>
          </div>
          <div className="lg:col-span-1 lg:flex hidden p-5">
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
