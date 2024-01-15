import Image from "next/image";
import ilustration from "@/assets/logo/ilustrasi1.png";
import Link from "next/link";

const Homepage = () => {
  return (
    <section className="flex lg:flex-row flex-col lg:px-20 py-10 px-8 lg:justify-between items-center min-h-screen bg-gradient-to-r from-sky-400 via-teal-300 to-cyan-500 ">
      <div className="mx-auto max-w-screen-xl py-24 lg:py-48">
        <h3 className="mb-4 text-4xl font-semibold tracking-tight leading-none text-black md:text-5xl lg:text-5xl lg:w-full w-[80%]">
          Your Future <span className="font-bold">Begins Here</span>
        </h3>
        <p className="pb-5 pt-2 lg:w-[70%] w-[90%]">
          Platform edukasi dan mentoring yang membantu pelajar dan mahasiswa
          mengikuti berbagai lomba bisnis baik tingkat nasional maupun
          internasional
        </p>
        <div className="flex gap-3">
          <Link
            href="#kelas"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-teal-500 hover:bg-teal-600  transition-all duration-200"
          >
            Lihat Kelas
          </Link>
          <Link
            href="#"
            className="flex justify-center hover:text-white items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-black rounded-lg border border-teal-500 hover:bg-teal-500  transition-all duration-200"
          >
            Lihat Promo
          </Link>
        </div>
      </div>
      <div className="">
        <Image
          className="mx-auto"
          src={ilustration}
          width={700}
          height={700}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Homepage;
