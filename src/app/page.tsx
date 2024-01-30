import Homepage from "@/components/layouts/Homepage";
import Kelaspage from "@/components/layouts/Kelaspage";
import Testimonal from "@/components/layouts/Testimonal";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Banner from "@/components/Banner";
import InfoContent from "@/components/layouts/InfoContent";
import Kompetisi from "@/components/ui/Kompetisi";
import Contactinfo from "@/components/ui/Contactinfo";

export default function Home() {
  return (
    <div className="">
      <Navbar isVisible={true} />
      <Homepage />
      <Banner />
      <Kelaspage />
      <InfoContent />
      <Kompetisi />
      <Testimonal/>
      <Contactinfo />
      <Footer isVisible={true} />
    </div>
  )
}
