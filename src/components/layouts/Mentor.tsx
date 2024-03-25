import Image from "next/image";
import mentor1 from "@/assets/mentor/Mentor Business Plan.png";
import mentor2 from "@/assets/mentor/Mentor Business Case Rio.png";
import mentor3 from "@/assets/mentor/Mentor Business Case Eli.png";
import { FaLinkedin } from "react-icons/fa";
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
import Link from "next/link";

const Mentor = () => {
  return (
    <>
      <div className="py-10 px-8 bg-[#D2E5F2] rounded-t-[70px] z-20">
        <div className="py-3">
          <h1 className="text-2xl text-primary font-bold text-center ">
            Mentor
          </h1>
        </div>
        <div className="">
          <div className="px-6 text-center">
          <p className="lg:text-3xl md:text-2xl text-md font-semibold text-center text-zinc-900">
              Kami Merancang Kurikullum Kelas Bersama Para Mentor yang telah
              menjuarai pada kompetisi bisnis di
            </p>
          </div>
          <div className="grid lg:grid-cols-7 md:grid-cols-5 grid-cols-3 gap-5 lg:px-16 px-4 pt-5">
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
              <Image src={logo4} alt="logo1" width={246} height={66} />
            </div>
            <div className="flex justify-center items-center">
              <Image src={logo5} alt="logo1" width={158} height={56} />
            </div>
            <div className="flex justify-center items-center">
              <Image src={logo6} alt="logo1" width={152} height={63} />
            </div>
            <div className="flex justify-center items-center">
              <Image src={logo7} alt="logo1" width={177} height={177} />
            </div>
            <div className="flex justify-center items-center lg:hidden">
              <Image src={logo8} alt="logo1" width={142} height={54} />
            </div>
            <div className="flex justify-center items-center lg:hidden">
              <Image src={logo9} alt="logo1" width={290} height={50} />
            </div>
            <div className="flex justify-center items-center lg:hidden">
              <Image src={logo10} alt="logo1" width={129} height={123} />
            </div>
            <div className="flex justify-center items-center lg:hidden">
              <Image src={logo11} alt="logo1" width={196} height={48} />
            </div>
          </div>
          <div className="lg:flex flex-row justify-center hidden">
            <div className="flex justify-center items-center">
              <Image src={logo8} alt="logo1" width={142} height={54} />
            </div>
            <div className="flex justify-center items-center">
              <Image src={logo9} alt="logo1" width={290} height={50} />
            </div>
            <div className="flex justify-center items-center">
              <Image src={logo10} alt="logo1" width={129} height={123} />
            </div>
            <div className="flex justify-center items-center">
              <Image src={logo11} alt="logo1" width={196} height={48} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 pt-10">
          <div className="flex flex-col mb-3 justify-center items-center gap-5">
            <Image
              className=""
              src={mentor1}
              width={500}
              height={500}
              alt="mentor1"
            />
            <Link
              href="https://www.linkedin.com/in/randi-saputr4/"
              target="-blank"
              className="flex items-center text-lg text-black bg-secondary hover:bg-amber-500 px-5 py-2 rounded-md"
            >
              <FaLinkedin className="mr-2 text-2xl" />
              Cek Linkedin Mentor{" "}
            </Link>
          </div>
          <div className="flex lg:flex-row flex-col justify-center items-center gap-5">
            <div className="flex flex-col mb-3 justify-center items-center gap-5">
              <Image src={mentor2} width={500} height={500} alt="mentor2" />
              <Link
                href="https://www.linkedin.com/in/rionggara/"
                target="-blank"
                className="flex items-center text-lg text-black bg-secondary hover:bg-amber-500 px-5 py-2 rounded-md"
              >
                <FaLinkedin className="mr-2 text-2xl" />
                Cek Linkedin Mentor{" "}
              </Link>
            </div>
            <div className="flex flex-col mb-3 justify-center items-center gap-5">
              <Image src={mentor3} width={500} height={500} alt="mentor3" />
              <Link
                href="https://www.linkedin.com/in/elisulistyowati/"
                target="-blank"
                className="flex items-center text-lg text-black bg-secondary hover:bg-amber-500 px-5 py-2 rounded-md"
              >
                <FaLinkedin className="mr-2 text-2xl" />
                Cek Linkedin Mentor{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mentor;
