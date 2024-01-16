import Faq from "@/components/Faq";
import Testimonial from "@/components/Testimonal";


const page = () => {
  return (
    <>
      <section className="flex justify-center pt-36 bg-slate-300">
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
