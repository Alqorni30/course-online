import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Team from "@/components/layouts/Team";
import Tentangkami from "@/components/layouts/Tentangkami";

const page = () => {
  return (
    <>
      <Navbar isVisible={true} />
      <section className="flex justify-center pt-20 bg-[#2095CB]">
        <div className="w-full">
          <div className="bg-">
            <Tentangkami />
            <Team/>
          </div>
        </div>
      </section>
      <Footer isVisible={true} />
    </>
  );
};

export default page;
