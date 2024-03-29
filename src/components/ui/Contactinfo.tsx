import Image from "next/image";
import ilustrasihp from "@/assets/ilustrasi/app 2.png";
import Link from "next/link";

const Contactinfo = () => {
  return (
    <section className="py-8 px-8  bg-[#F5C732]">
    <div className="container flex lg:flex-row flex-col lg:justify-between items-center">
      <div className="">
        <h3 className="mb-4 text-2xl font-semibold tracking-tight leading-none text-black md:text-3xl lg:text-4xl lg:w-[70%] w-[80%]">
          We are open to any opportunities!!
        </h3>
        <p className="pb-5 lg:text-xl md:text-xl text-md pt-2 lg:w-[80%] w-full text-black">
          We also open <strong>opportunities</strong> for every educational
          institution to
          <strong> collaborate</strong> with us
        </p>
        <div className="flex gap-3 mt-5">
          <Link
            href="https://wa.me/6285338739647"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#00A17F] hover:bg-green-800 transition-all duration-200"
          >
            Contact us here
          </Link>
        </div>
      </div>
      <div className="">
        <Image
          className="lg:w-[513px] lg:h-[443px] w-[300px] h-[250px]"
          src={ilustrasihp}
          width={450}
          height={450}
          alt="hero"
        />
      </div>
    </div>
  </section>
  );
};

export default Contactinfo;
