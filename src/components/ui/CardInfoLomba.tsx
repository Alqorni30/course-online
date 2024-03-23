import prismadb from "@/libs/db";
import Image from "next/image";
import Link from "next/link";

const CardInfoLomba = async () => {
  const dataLomba = await prismadb.dataInfoLomba.findMany({
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

  return (
    <div className="bg-white py-16">
      <div className="lg:px-10 px-6">
        <div className="flex flex-wrap justify-center gap-5">
          {dataLomba.map((data) => (
            <div
              key={data.id}
              className="flex flex-col md:flex-row gap-5 border border-zinc-800 p-4 lg:w-[550px] w-full rounded-2xl"
            >
              <div className="flex justify-center items-center md:w-1/4">
                {data.image && (
                  <Link href={data.image}>
                    <Image
                      src={data.image} // Menampilkan gambar dari URL yang disimpan di database
                      alt="data image"
                      width={200}
                      height={200}
                      className="rounded-lg"
                    />
                  </Link>
                )}
              </div>
              <div className="md:w-3/4">
                <div
                  className={`w-[110px] text-center text-xs rounded-xl mb-5 py-1 px-2 text-white ${
                    data.kategori === "Business Case"
                      ? "bg-secondary"
                      : "bg-primary"
                  }`}
                >
                  {data.kategori}
                </div>
                <div className="flex flex-col gap-2">
                  <h6 className="lg:text-xl md:text-md text-sm font-bold">
                    {data.nama}
                  </h6>
                  <p className="text-sm">
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
