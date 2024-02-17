import Image from "next/image";
import ba from "@/assets/BA Anak Bisnis.png";
import Link from "next/link";
const Homepage = () => {
  return (
    <section className="flex lg:flex-row flex-col lg:px-20 py-10 px-8 lg:justify-between items-center min-h-screen bg-jumbotron container">
      <div className="mx-auto max-w-screen-xl py-24 lg:py-48">
        <h3 className="animate__animated animate__fadeInUp animate__delay-1.5s mb-4 text-4xl font-semibold tracking-tight leading-none text-white md:text-5xl lg:text-5xl lg:w-full w-[80%]">
          Your{" "}
          <span className="font-bold lg:text-6xl text-5xl text-secondary">
            Future{" "}
          </span>
          Begins Here
        </h3>
        <p className="animate__animated animate__fadeInUp animate__delay-1.5s pb-5 lg:text-xl md:text-xl text-md pt-2 lg:w-[80%] w-full text-white">
          Platform edukasi dan mentoring yang membantu pelajar dan mahasiswa
          mengikuti berbagai lomba bisnis baik tingkat nasional maupun
          internasional
        </p>
        <div className="flex gap-3 animate__animated animate__fadeInUp animate__delay-1.5s">
          <Link
            href="/kelas"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-secondary hover:bg-amber-500 transition-all duration-200"
          >
            Lihat Kelas
          </Link>
        </div>
      </div>
      <div className="">
        <Image
          className="mx-auto animate__animated animate__fadeInUp"
          src={ba}
          width={450}
          height={450}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Homepage;
