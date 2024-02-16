"use client";
import { IoMdQuote } from "react-icons/io";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";

// Definisikan tipe data untuk testimonial
interface Testimonial {
  id: number;
  image: string;
  nama: string;
  job: string;
  testi: string;
}

const CardTestimony: React.FC = () => {
  // Tentukan tipe data untuk state testimonials
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        // Call the API endpoint to fetch testimonial data from the server using Axios
        const response = await axios.get('api/testimonials');
        console.log(response.data);
        setTestimonials(response.data); // Set testimonials state with the data
      } catch (error) {
        console.error('Error fetching testimonials: ', error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        640: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 1, spaceBetween: 40 },
        992: { slidesPerView: 2, spaceBetween: 50 },
        1200: { slidesPerView: 2, spaceBetween: 50 },
      }}
      pagination={{ clickable: true }}
      navigation
      modules={[Pagination, Navigation]}
      className="cursor-pointer flex justify-center items-center"
    >
      {/* Render testimonial dalam Swiper */}
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <div className="max-w-screen-md mx-auto lg:p-11 p-4 rounded-md mb-10 bg-gray-200 text-center">
            <IoMdQuote className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" />
            <blockquote>
              <p className="lg:text-xl md:text-lg text-base font-medium">
                {testimonial.testi}
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
              <Image
                className="w-10 h-10 rounded-full"
                src={testimonial.image}
                alt="profile picture"
                width={40}
                height={40}
              />
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                <p className="pe-3 text-md">{testimonial.nama}</p>
                <p className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.job}
                </p>
              </div>
            </figcaption>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardTestimony;
