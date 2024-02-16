import Image from "next/image";
import logo1 from "@/assets/logo lomba/logo hsbc .png";
import logo2 from "@/assets/logo lomba/EJAVEC_Forum_Logo.svg.png";
import logo3 from "@/assets/logo lomba/Logo yelp.png";
import logo4 from "@/assets/logo lomba/Logo Tanoto Future leader.png";
import logo5 from "@/assets/logo lomba/Logo Mx UI.webp";
import logo6 from "@/assets/logo lomba/logo ahm bs.png";
import logo7 from "@/assets/logo lomba/logo wow case competition.png";
import logo8 from "@/assets/logo lomba/Logo-Astra-Startup-Community.png";
import logo9 from "@/assets/logo lomba/logo student catalyst.png";
import logo10 from "@/assets/logo lomba/logo Brilian Com.png";
import logo11 from "@/assets/logo lomba/Screenshot 2024-01-28 at 15.09.49.png";
import logo12 from "@/assets/logo lomba/bcacompetition_logo.webp";
import logo13 from "@/assets/logo lomba/logo_wmm.png";
import logo14 from "@/assets/logo lomba/LOGO_BRANDSTRORM_NOIR.png";
import logo15 from "@/assets/logo lomba/266-2669132_ufll-logo-unilever-future-leaders-league.png";

const Kompetisi = () => {
  return (
    <>
      <div className="py-10">
        <div className="flex lg:flex-row md:flex-row flex-col gap-5 px-16 items-center">
          <div className="lg:mb-32 mb-0 w-full">
            <h5 className="font-bold text-3xl pb-2">
              Be the <span className="text-primary">Winner</span> of these
              Competitions
            </h5>
            <p className="text-xl">So what are you waiting for?</p>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-3 gap-5">
            <div className="flex justify-center items-center">
              <Image src={logo1} alt="logo1" width={155} height={42} />
            </div>
            <div className="flex justify-center items-center">
              <Image src={logo2} alt="logo1" width={146} height={61} />
            </div>
            <div className="flex justify-center items-center">
              <Image src={logo3} alt="logo1" width={77} height={51} />
            </div>
            <div className="flex justify-center items-center">
              <Image src={logo12} alt="logo1" width={196} height={48} />
            </div>
            <div className="flex justify-center items-center">
              <Image src={logo8} alt="logo1" width={142} height={54} />
            </div>
            <div className="flex justify-center items-center">
              <Image src={logo5} alt="logo1" width={158} height={56} />
            </div>
            <div className="flex justify-center items-center">
              <Image src={logo6} alt="logo1" width={152} height={63} />
            </div>
            <div className="flex justify-center items-center">
              <Image src={logo15} alt="logo1" width={196} height={48} />
            </div>
            <div className="flex justify-center items-center">
              <Image src={logo7} alt="logo1" width={177} height={177} />
            </div>
            <div className="flex justify-center items-center">
              <Image src={logo11} alt="logo1" width={196} height={48} />
            </div>
            <div className="flex justify-center items-center">
              <Image src={logo13} alt="logo1" width={125} height={79} />
            </div>
            <div className="flex justify-center items-center">
              <Image src={logo10} alt="logo1" width={129} height={123} />
            </div>
            <div className="flex justify-center items-center">
              <Image src={logo14} alt="logo1" width={196} height={48} />
            </div>
            <div className="flex justify-center items-center">
              <Image src={logo4} alt="logo1" width={246} height={66} />
            </div>
            <div className="flex justify-center items-center">
              <Image src={logo9} alt="logo1" width={290} height={50} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kompetisi;
