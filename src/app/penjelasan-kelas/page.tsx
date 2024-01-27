import Detailkelas from "@/components/Detailkelas";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";


const page = () => {
  return (
    <>
    <Navbar isVisible={true} />
      <section className="flex justify-center pt-36">
        <div className="w-full">
          <div>
            <Detailkelas/>
          </div>
        </div>
      </section>
      <Footer isVisible={true} />
    </>
  );
};

export default page;
