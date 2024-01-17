import Faq from "@/components/Faq";
import Testimonial from "@/components/Testimonal";


const page = () => {
  return (
    <>
      <section className="flex justify-center pt-36">
        <div className="w-full">
          <div>
            <Testimonial/>
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
};

export default page;
