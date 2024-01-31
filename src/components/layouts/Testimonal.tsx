"use client";
import React from "react";
import { testimonial } from "@/data";
import { IoMdQuote } from "react-icons/io";
import Image from "next/image";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Testimonial: React.FC = () => {
  return (
    <section className="my-20 lg:px-8 px-4">
      <div className="py-20  bg-amber-200 lg:px-8 px-4 rounded-lg">
        <div className="mb-10">
          <h1 className="text-2xl text-primary font-bold text-center ">
            Alumni Kami
          </h1>
          <p className="text-center text-xl font-semibold text-zinc-700">
            Cek Apa Kata Mereka
            
          </p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation
          modules={[Pagination, Navigation]}
          className="cursor-pointer  flex justify-center items-center"
        >
          {testimonial.map((testi) => (
            <SwiperSlide key={testi.id} className="py-10">
              <figure className="max-w-screen-md mx-auto lg:p-11 p-4  rounded-md mb-10 bg-gray-200 text-center">
                <IoMdQuote className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" />
                <blockquote>
                  <p className="lg:text-xl md:text-lg text-base font-medium ">
                    {testi.desc}
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                  <Image
                    className="w-10 h-10 rounded-full"
                    src={testi.image}
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                    <p className="pe-3 text-md ">
                      {testi.name}
                    </p>
                    <p className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                      {testi.skill}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
