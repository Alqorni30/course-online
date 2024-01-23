import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Detailkelas from "@/components/Detailkelas";

const page = () => {
  return (
    <>
      <Navbar isVisible={true} />
      <section className="flex justify-center pt-20">
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
