"use client"
import React from "react";
import { testimonial } from "@/data";
import { IoMdQuote } from "react-icons/io";
import Image from "next/image";

import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Testimonial: React.FC = () => {
  return (
    <div className="py-20 px-8">
      <div className="mb-10 text-white">
        <h1 className="text-4xl font-bold text-center mb-4">Testimonial</h1>
        <p className="text-center text-lg font-semibold">Apa Kata Mereka?</p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="cursor-pointer"
      >
        {testimonial.map((testi) => (
          <SwiperSlide key={testi.id} className="">
            <figure className="max-w-screen-md mx-auto p-11  rounded-md mb-10 bg-white text-center">
              <IoMdQuote className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" />
              <blockquote>
                <p className="text-xl italic font-medium text-gray-900 dark:text-white">
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
                  <p className="pe-3 text-md text-gray-900 dark:text-white">
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
  );
};

export default Testimonial;
