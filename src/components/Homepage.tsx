import Image from "next/image";
import ilustration from "@/assets/logo/ilustrasi1.png";
import Link from "next/link";

const Homepage = () => {
  return (
    <section className="flex lg:flex-row flex-col lg:px-20 px-8 justify-between items-center min-h-screen bg-gradient-to-r from-sky-400 via-teal-300 to-cyan-500 ">
      <div className="mx-auto max-w-screen-xl py-24 lg:py-48">
        <h3 className="mb-4 text-4xl font-semibold tracking-tight leading-none text-black md:text-5xl lg:text-5xl">
          Your Future <span className="font-bold">Begins Here</span>
        </h3>
        {/* <h2 className="mb-4 text-4xl font-bold tracking-tight leading-none text-black md:text-5xl lg:text-5xl">
          Begins Here
        </h2> */}
        <p className="pb-5 pt-2 w-[70%]">
          Platform edukasi dan mentoring yang membantu pelajar dan mahasiswa
          mengikuti berbagai lomba bisnis baik tingkat nasional maupun
          internasional
        </p>
        <div className="flex">
          <Link
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 transition-all duration-200"
          >
            Lihat Kelas
          </Link>
          <Link
            href="#"
            className="flex justify-center hover:text-white items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-black rounded-lg border border-teal-500 hover:bg-teal-500 focus:ring-4 focus:ring-teal-500 transition-all duration-200"
          >
            Lihat Promo
          </Link>
        </div>
      </div>
      <div className="">
        <Image
          className="mx-auto"
          src={ilustration}
          width={800}
          height={800}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Homepage;
