import Image from "next/image";
import mentor1 from "@/assets/mentor/Mentor Business Plan.png";
import mentor2 from "@/assets/mentor/Mentor Business Case Rio.png";
import mentor3 from "@/assets/mentor/Mentor Business Case Eli.png";
import { IoIosArrowForward } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Mentor = () => {
  return (
    <>
      <div className="py-10 px-8" id="mentor">
        <div className="">
          <h1 className="lg:text-4xl text-2xl text-white text-center font-bold mb-10">
            Mentor
          </h1>
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col mb-3 justify-center items-center gap-5">
            <Image
              className=""
              src={mentor1}
              width={500}
              height={500}
              alt="mentor1"
            />
            <button className="flex items-center text-lg text-black bg-secondary hover:bg-amber-500 px-5 py-2 rounded-md">
              <FaLinkedin className="mr-2 text-2xl" />
              Cek Linkedin Mentor{" "}
            </button>
          </div>
          <div className="flex lg:flex-row flex-col justify-center items-center gap-5">
            <div className="flex flex-col mb-3 justify-center items-center gap-5">
              <Image src={mentor2} width={500} height={500} alt="mentor2" />
              <button className="flex items-center text-lg text-black bg-secondary hover:bg-amber-500 px-5 py-2 rounded-md">
                <FaLinkedin className="mr-2 text-2xl" />
                Cek Linkedin Mentor{" "}
              </button>
            </div>
            <div className="flex flex-col mb-3 justify-center items-center gap-5">
              <Image src={mentor3} width={500} height={500} alt="mentor3" />
              <button className="flex items-center text-lg text-black bg-secondary hover:bg-amber-500 px-5 py-2 rounded-md">
                <FaLinkedin className="mr-2 text-2xl" />
                Cek Linkedin Mentor{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mentor;
