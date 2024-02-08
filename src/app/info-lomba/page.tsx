import CardInfoLomba from "@/components/ui/CardInfoLomba";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

const page = () => {
  return (
    <>
      <Navbar isVisible={true} />
      <section className="pt-28 bg-[#2095CB] rounded-b-[30px]">
        <div className="w-full ">
          <div className="text-center py-20 ">
            <h2 className="text-5xl font-bold text-white">
              Info <span className="text-[#F5C732]">Lomba</span>
            </h2>
            <p className="text-white py-3 font-medium text-lg">
              Kumpulan lomba bisnis bergensi dan terpercaya
              <br /> yang dapat kamu ikuti
            </p>
          </div>
        </div>
      </section>
      <CardInfoLomba />
      <Footer isVisible={true} />
    </>
  );
};

export default page;
