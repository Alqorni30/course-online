import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

const getdataLomba = async () => {
  const res = await prisma.dataInfoLomba.findMany({
    select: {
      id: true,
      image: true,
      kategori: true,
      nama: true,
      desc: true,
      deadline: true,
      totalHadiah: true,
      link1: true,
      link2: true,
    },
  });
  return res;
};

const CardInfoLomba = async () => {
  const [dataLomba] = await Promise.all([getdataLomba()]);

  return (
    <div className=" bg-white py-16">
      <div className="lg:px-10 px-6">
        <div className="flex lg:flex-row flex-wrap justify-center lg:justify-between gap-5">
          {dataLomba.map((data) => (
            <div className="flex gap-10 border border-zinc-800 p-4 lg:w-[550px] w-full rounded-2xl">
              <div className="lg:w-[200px] w-[100px] lg:p-5 p-2 flex justify-center items-center">
                {data.image && (
                  <Image src={data.image} alt="info" width={100} height={100} />
                )}
              </div>
              <div className="lg:w-[400px] md:[300px] w-full">
                <button className="text-xs bg-secondary rounded-xl mb-5 py-1 px-2 text-white">
                  {data.kategori}
                </button>
                <div className="flex flex-col gap-2">
                  <h6 className="lg:text-xl md:text-md text-sm font-bold">
                    {data.nama}
                  </h6>
                  <p className="lg:text-xs text-[10px]">
                    {data.desc} <span className="text-primary text-lg">|</span>{" "}
                    {data.deadline}
                  </p>
                  <p className="text-sm">
                    Total hadiah{" "}
                    <span className="font-bold">{data.totalHadiah}</span>
                  </p>
                </div>
                <div className="flex gap-5 mt-7">
                  <Link
                    href={data.link1}
                    target="_blank"
                    className="text-xs font-semibold hover:bg-green-700 transition duration-200 bg-[#00A17F] rounded-2xl  py-2 px-4 text-white"
                  >
                    Daftar Sekarang
                  </Link>
                  <Link
                    href={data.link2}
                    target="_blank"
                    className="text-xs font-semibold text-white hover:bg-green-700 transition duration-200 bg-[#00A17F] border-primary rounded-2xl py-2 px-4"
                  >
                    Info Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardInfoLomba;
