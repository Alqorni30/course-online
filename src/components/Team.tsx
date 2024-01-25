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
      <div className="px-8">
        <div className="">
          <h1 className="lg:text-4xl text-2xl text-black text-center font-bold mb-10">
            Tim kami
          </h1>
        </div>
        <div className="flex flex-col items-center gap-5 ">
          <div className="flex lg:flex-row justify-center items-center gap-5">
            <Image
              className="lg:w-[200] lg:h-[200] w-[100] h-[100]"
              src={tim1}
              width={200}
              height={200}
              alt="tim1"
            />
          </div>
          <div className="flex lg:flex-row flex-wrap justify-center items-center gap-8">
            <Image
              className="lg:w-[200] lg:h-[200] w-[100] h-[100]"
              src={tim5}
              width={200}
              height={200}
              alt="tim5"
            />
            <Image
              className="lg:w-[200] lg:h-[200] w-[100] h-[100]"
              src={tim2}
              width={200}
              height={200}
              alt="tim2"
            />

            <Image
              className="lg:w-[200] lg:h-[200] w-[100] h-[100]"
              src={tim4}
              width={200}
              height={200}
              alt="tim4"
            />
          </div>
          <div className="flex lg:flex-row flex-wrap justify-center items-center gap-8">
            <Image
              className="lg:w-[200] lg:h-[200] w-[100] h-[100]"
              src={tim3}
              width={200}
              height={200}
              alt="tim3"
            />
            <Image
              className="lg:w-[200] lg:h-[200] w-[100] h-[100]"
              src={tim7}
              width={200}
              height={200}
              alt="tim5"
            />
            <Image
              className="lg:w-[200] lg:h-[200] w-[100] h-[100]"
              src={tim6}
              width={200}
              height={200}
              alt="tim5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
