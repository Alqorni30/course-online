import Faq from "@/components/layouts/Faq";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Testimonial from "@/components/layouts/Testimonal";


const page = () => {
  return (
    <>
    <Navbar isVisible={true} />
      <section className="flex justify-center pt-36">
        <div className="w-full">
          <div>
            <Testimonial/>
          </div>
        </div>
      </section>
      <Faq />
      <Footer isVisible={true} />
    </>
  );
};

export default page;
