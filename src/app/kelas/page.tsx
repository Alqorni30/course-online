import Cardkelas from "@/components/ui/Cardkelas";
import Faq from "@/components/layouts/Faq";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

const Kelaspage = () => {
  return (
    <>
      <Navbar isVisible={true} />
      <section className="flex lg:rounded-b-[90px] rounded-b-[50px] justify-center py-10 pt-36 bg-gradient-to-r from-primary to-cyan-200">
          <div className="lg:px-16 px-8">
            <div className="text-center mb-10 ">
              <div className="text-black">
                <h1 className="font-bold text-white text-3xl mb-3">
                  Kelas Intensif
                </h1>
                <p className="font-semibold lg:text-3xl text-xl">
                  Cek program kelas kami yang telah terbukti membantu siswa
                  dalam menjuarai berbagai kompetisi bisnis
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-10 flex-wrap">
              <Cardkelas />
            </div>
          </div>
      </section>
      <Faq />
      <Footer isVisible={true} />
    </>
  );
};

export default Kelaspage;
