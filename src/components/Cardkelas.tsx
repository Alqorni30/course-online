import Image from "next/image";
import Link from "next/link";
import kelas1 from "@/assets/kelas/Cover Kelas Business Case.png";
import kelas2 from "@/assets/kelas/Cover Kelas Business Plan.png";

const Cardkelas = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center gap-5">
        <div className="relative">
          <Image
            className=""
            src={kelas1}
            width={300}
            height={300}
            alt="product image"
          />
          <Link
            href="/"
            className="font-semibold absolute text-white mb-5 px-3 py-2 rounded-md bg-secondary bottom-0 left-1/2 transform -translate-x-1/2 hover:bg-amber-500 transition-all duration-200"
          >
            Detail kelas
          </Link>
        </div>
        <div className="relative">
          <Image
            className=""
            src={kelas2}
            width={300}
            height={300}
            alt="product image"
          />
          <Link
            href="/"
            className="font-semibold absolute text-white mb-5 px-3 py-2 rounded-md bg-secondary bottom-0 left-1/2 transform -translate-x-1/2 hover:bg-amber-500 transition-all duration-200"
          >
            Detail kelas
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cardkelas;