import Faq from "@/components/Faq";
import Homepage from "@/components/Homepage";
import Kelaspage from "@/components/Kelaspage";
import Tentangkami from "@/components/Tentangkami";
import Testimonal from "@/components/Testimonal";


export default function Home() {
  return (
    <div className="h-[1200px]">
      <Homepage />
      <Tentangkami/>
      <Kelaspage />
      <Testimonal/>
      <Faq/>
    </div>
  )
}
