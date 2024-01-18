import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


const page = () => {
  return (
    <>
    <Navbar isVisible={true} />
      <section className="flex justify-center pt-36">
        <div className="w-full">
          <div>
            <Faq/>
          </div>
        </div>
      </section>
      <Footer isVisible={true} />
    </>
  );
};

export default page;
