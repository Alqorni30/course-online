import Image from "next/image";
import info from "@/assets/info-image.png";

const CardInfoLomba = () => {
  return (
    <div className=" bg-white py-16">
      <div className="lg:px-10 px-6">
        <div className="flex lg:flex-row flex-wrap justify-center lg:justify-between gap-5">
          <div className="flex gap-10 border border-zinc-800 p-4 lg:w-[550px] w-full rounded-2xl">
            <div className="lg:w-[200px] w-[100px] lg:p-5 p-2 flex justify-center items-center">
              <Image
                src={info}
                alt="BA Anak Bisnis" 
                width={168}
                height={224}
                className=""
              />
            </div>
            <div className="lg:w-[400px] md:[300px] w-full">
              <button className="text-xs bg-secondary rounded-xl mb-5 py-1 px-2 text-white">
                Business Case
              </button>
              <div className="flex flex-col gap-2">
                <h6 className="lg:text-xl md:text-md text-sm font-bold">
                  Tanoto Future Leader Business Acumen
                </h6>
                <p className="lg:text-xs text-[10px]">
                  Terbuka untuk Umum{" "}
                  <span className="text-primary text-lg">|</span> Deadline: 12
                  Februari 2024
                </p>
                <p className="text-sm">
                  Total hadiah <span className="font-bold">50 Juta</span>
                </p>
              </div>
              <div className="flex gap-5 mt-7">
                <button className="text-xs font-semibold hover:bg-green-700 transition duration-200 bg-[#00A17F] rounded-2xl py-2 px-4 text-white">
                  Daftar Sekarang
                </button>
                <button className="text-xs font-semibold text-white hover:bg-green-700 transition duration-200 bg-[#00A17F] border-primary rounded-2xl py-2 px-4">
                  Info Detail
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-10 border border-zinc-800 p-4 lg:w-[550px] w-full rounded-2xl">
            <div className="lg:w-[200px] w-[100px] lg:p-5 p-2 flex justify-center items-center">
              <Image
                src={info}
                alt="BA Anak Bisnis"
                width={168}
                height={224}
                className=""
              />
            </div>
            <div className="w-[400px]">
              <button className="text-xs bg-primary rounded-xl mb-5 py-1 px-2 text-white">
                Business Plan
              </button>
              <div className="flex flex-col gap-2">
                <h6 className="text-xl font-bold">
                  Tanoto Future Leader Business Acumen
                </h6>
                <p className="text-xs">
                  Terbuka untuk Umum{" "}
                  <span className="text-primary text-lg">|</span> Deadline: 12
                  Februari 2024
                </p>
                <p className="text-sm">
                  Total hadiah <span className="font-bold">50 Juta</span>
                </p>
              </div>
              <div className="flex gap-5 mt-7">
                <button className="text-xs font-semibold hover:bg-green-700 transition duration-200 bg-[#00A17F] rounded-2xl  py-2 px-4 text-white">
                  Daftar Sekarang
                </button>
                <button className="text-xs font-semibold text-white hover:bg-green-700 transition duration-200 bg-[#00A17F] border-primary rounded-2xl py-2 px-4">
                  Info Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfoLomba;
