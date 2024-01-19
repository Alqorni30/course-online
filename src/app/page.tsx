import Faq from "@/components/Faq";
import Homepage from "@/components/Homepage";
import Kelaspage from "@/components/Kelaspage";
import Tentangkami from "@/components/Tentangkami";
import Testimonal from "@/components/Testimonal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Mentor from "@/components/Mentor";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div className="">
      <Navbar isVisible={true} />
      <Homepage />
      <Tentangkami/>
      <Team/>
      <Kelaspage />
      <Mentor/>
      <Testimonal/>
      <Faq />
      <Footer isVisible={true} />
    </div>
  )
}
