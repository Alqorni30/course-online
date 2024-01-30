import Image from "next/image";
import tim1 from "@/assets/team/Randi FOunder.png";
import tim2 from "@/assets/team/Eka Anneta Businesss.png";
import tim3 from "@/assets/team/Ahmad Fauzi.png";
import tim4 from "@/assets/team/Maagha Content Writer.png";
import tim5 from "@/assets/team/Valencia Content Writer.png";
import tim6 from "@/assets/team/Noriza Graphic Designer.png";
import tim7 from "@/assets/team/Vannesa Sosmed.png";

const Team = () => {
  return (
    <>
      <div className="px-8 py-14 bg-[#D2E5F2] rounded-t-[70px]">
        <div className="">
          <h1 className="lg:text-4xl text-2xl text-black text-center mb-10">
            Our <span className="font-bold">Team</span>
          </h1>
        </div>
        <div className="flex flex-col items-center gap-5 ">
          <div className="flex lg:flex-row justify-center items-center gap-5">
            <Image
              className="lg:w-[300] lg:h-[300] w-[100] h-[100]"
              src={tim1}
              width={300}
              height={300}
              alt="tim1"
            />
          </div>
          <div className="flex lg:flex-row flex-wrap justify-center items-center lg:gap-14 gap-7">
            <Image
              className="lg:w-[300] lg:h-[300] w-[100] h-[100]"
              src={tim5}
              width={300}
              height={300}
              alt="tim5"
            />
            <Image
              className="lg:w-[300] lg:h-[300] w-[100] h-[100]"
              src={tim2}
              width={300}
              height={300}
              alt="tim2"
            />

            <Image
              className="lg:w-[300] lg:h-[300] w-[100] h-[100]"
              src={tim4}
              width={300}
              height={300}
              alt="tim4"
            />
          </div>
          <div className="flex lg:flex-row flex-wrap justify-center items-center lg:gap-14 gap-7">
            <Image
              className="lg:w-[300] lg:h-[300] w-[100] h-[100]"
              src={tim3}
              width={300}
              height={300}
              alt="tim3"
            />
            <Image
              className="lg:w-[300] lg:h-[300] w-[100] h-[100]"
              src={tim7}
              width={300}
              height={300}
              alt="tim5"
            />
            <Image
              className="lg:w-[300] lg:h-[300] w-[100] h-[100]"
              src={tim6}
              width={300}
              height={300}
              alt="tim5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
