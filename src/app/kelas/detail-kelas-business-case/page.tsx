import DetailBsc from "@/components/layouts/KontenBsc";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

const page = () => {
  return (
    <>
      <Navbar isVisible={true} />
      <DetailBsc />
      <Footer isVisible={true} />
    </>
  );
};

export default page;
