import Image from "next/image";
import Link from "next/link";
import kelas1 from "@/assets/kelas/cover kelas bcc.png";
import kelas2 from "@/assets/kelas/cover kelas bpc.png";

const Cardkelas = () => {
  return (
    <>
      <div className="w-full flex lg:flex row md:flex-row flex-col justify-center items-center lg:gap-36 gap-10">
        <div className="relative">
          <Image
            className=""
            src={kelas1}
            width={300}
            height={300}
            alt="product image"
          />
          <Link
            href="/kelas/detail-kelas-business-case"
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
            href="/kelas/detail-kelas-business-plan"
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
