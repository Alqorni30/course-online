import Cardkelas from "@/components/Cardkelas";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Kelaspage = () => {
  return (
    <>
      <Navbar isVisible={true} />
      <section className="flex justify-center pt-36">
        <div className="w-full">
          <div>
            <div className="text-center mb-10 text-black">
              <div>
                <h1 className="font-bold text-4xl mb-3">Semua Kelas</h1>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-8">
              <Cardkelas />
            </div>
            <div className="py-10 flex justify-center">
          <Link
            href={"/kelas/detail-kelas"}
            className="flex items-center text-xl text-white bg-secondary hover:bg-amber-500 px-5 py-2 rounded-md"
          >
            Detail Kelas <IoIosArrowForward className="ml-2 text-2xl" />
          </Link>
        </div>
          </div>
        </div>
      </section>
      <Faq />
      <Footer isVisible={true} />
    </>
  );
};

export default Kelaspage;
