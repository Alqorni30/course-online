import Cardkelas from "@/components/ui/Cardkelas";
import Faq from "@/components/layouts/Faq";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Kelaspage = () => {
  return (
    <>
      <Navbar isVisible={true} />
      <section className="flex justify-center pt-36 bg-gradient-to-r from-primary to-cyan-200">
        <div className="w-full">
          <div>
            <div className="text-center mb-10 px-6">
              <div className="text-black">
                <h1 className="font-bold text-white text-3xl mb-2">
                  Kelas Intensif
                </h1>
                <p className="font-semibold lg:text-2xl text-xl w-30%">
                  Cek program kelas kami yang telah terbukti membantu siswa
                  dalam menjuarai berbagai kompetisi bisnis
                </p>
              </div>
            </div>
            <Cardkelas />
            <div className="py-10 flex justify-center">
              <Link
                href={"/kelas/detail-kelas"}
                className="flex items-center font-medium text-xl text-white bg-secondary hover:bg-amber-500 px-5 py-2 rounded-md"
              >
                Detail Lebih Lanjut{" "}
                <IoIosArrowForward className="ml-2 text-2xl" />
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
