import KontenBsp from "@/components/layouts/KontenBsp";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

const page = () => {
  return (
    <>
      <Navbar isVisible={true} />
      <KontenBsp />
      <Footer isVisible={true} />
    </>
  );
};

export default page;
