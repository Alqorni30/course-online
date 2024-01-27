import Cardkelas from "./Cardkelas";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Kelaspage = () => {
  return (
    <div id="kelas" className="flex justify-center px-12 pt-36 mb-20">
      <div className="w-full">
        <div>
          <div className="text-center mb-10">
            <div className="text-black">
              <h1 className="font-bold text-4xl mb-3">Kelas Terbaru</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-10 flex-wrap">
            <Cardkelas />
          </div>
        </div>
        <div className="py-10 flex justify-center">
          <Link
            href={"/penjelasan-kelas"}
            className="flex items-center text-xl text-white bg-secondary hover:bg-amber-500 px-5 py-2 rounded-md"
          >
            Penjelasan Kelas <IoIosArrowForward className="ml-2 text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Kelaspage;
