import Footer from "@/components/Footer";
import Mentor from "@/components/Mentor";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <>
      <Navbar isVisible={true} />
      <section className="flex justify-center pt-24">
        <div className="w-full">
          <div>
            <Mentor />
          </div>
        </div>
      </section>
      <Footer isVisible={true} />
    </>
  );
};

export default page;
