import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";


const page = () => {
  return (
    <>
    <Navbar isVisible={true} />
      <section className="flex justify-center pt-36 bg-primary">
        <div className="w-full">
          <div className="flex justify-center py-20">
            <h1 className="text-3xl font-bold text-white">Coming soon...</h1>
          </div>
        </div>
      </section>
      <Footer isVisible={true} />
    </>
  );
};

export default page;
