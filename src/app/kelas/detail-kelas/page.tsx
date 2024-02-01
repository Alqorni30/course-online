import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Detailkelas from "@/components/layouts/Detailkelas";

const page = () => {
  return (
    <>
      <Navbar isVisible={true} />
      <section className="flex justify-center pt-20 bg-cyan-600">
        <div className="w-full">
          <div className="">
            <Detailkelas />
          </div>
        </div>
      </section>
      <Footer isVisible={true} />
    </>
  );
};

export default page;
