import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Team from "@/components/Team";
import Tentangkami from "@/components/Tentangkami";

const page = () => {
  return (
    <>
      <Navbar isVisible={true} />
      <section className="flex justify-center pt-20">
        <div className="w-full">
          <div className="mb-10">
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
