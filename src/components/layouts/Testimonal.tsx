// "use client";
// import "swiper/css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper/modules";
import CardTestimony from "../ui/CardTestimony";


const Testimonial = () => {
  return (
    <section className="my-20 lg:px-8 px-4 container">
      <div className="py-20 bg-amber-200 lg:px-8 px-4 rounded-lg">
        <div className="mb-10">
          <h1 className="text-2xl text-primary font-bold text-center">
            Alumni Kami
          </h1>
          <p className="text-center text-xl font-semibold text-zinc-700">
            Cek Apa Kata Mereka
          </p>
        </div>

        {/* <Swiper
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
          
        </Swiper> */}
        <CardTestimony/>
      </div>
    </section>
  );
};

export default Testimonial;
