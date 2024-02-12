import AddInfoLomba from "@/app/admin/data-info-lomba/AddInfoLomba";
import EditLomba from "@/app/admin/data-info-lomba/EditLomba";
import DeleteLomba from "@/app/admin/data-info-lomba/DeleteLomba";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
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

const TabelInfoLomba: React.FC = async () => {
  const [dataLomba] = await Promise.all([getdataLomba()]);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <div className="mb-2">
          <AddInfoLomba />
        </div>
        <table className="min-w-full bg-white border border-gray-300">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-gray-200">
            Data Testimonial
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b border-r">No</th>
              <th className="py-2 px-4 border-b border-r">Foto</th>
              <th className="py-2 px-4 border-b border-r">Nama</th>
              <th className="py-2 px-4 border-b border-r">Kategori</th>
              <th className="py-2 px-4 border-b border-r">Deskripsi</th>
              <th className="py-2 px-4 border-b border-r">Deadline</th>
              <th className="py-2 px-4 border-b border-r">Hadiah</th>
              <th className="py-2 px-4 border-b border-r">Link Daftar</th>
              <th className="py-2 px-4 border-b border-r">Link Info</th>
            </tr>
          </thead>
          <tbody>
            {dataLomba.map((data, index) => (  
              <tr
                className={`text-black text-center font-medium ${
                  index % 2 === 0 ? "" : "bg-red-100" // Background merah untuk nomor genap
                }`}
                key={data.id}
              >
                <td className="py-2 text-center px-4 border-b border-r">
                  {index + 1}
                </td>
                <td className="py-2 text-center px-4 border-b border-r">
                  <Link href={data.image}>
                    <Image
                      src={data.image} // Menampilkan gambar dari URL yang disimpan di database
                      alt="data image"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </Link>
                </td>
                <td className="py-2 text-start text-[15px] px-4 border-b border-r">
                  {data.nama}
                </td>
                <td className="py-2 text-center text-[15px] px-4 border-b border-r">
                  {data.kategori}
                </td>
                <td className="py-2 text-start text-[15px] px-4 border-b border-r">
                  {data.desc}
                </td>
                <td className="py-2 text-center text-[15px] px-4 border-b border-r">
                  {data.deadline}
                </td>
                <td className="py-2 text-center text-[15px] px-4 border-b border-r">
                  {data.totalHadiah}
                </td>
                <td className="py-2 text-center text-[15px] px-4 border-b border-r">
                  {data.link1}
                </td>
                <td className="py-2 text-center text-[15px] px-4 border-b border-r">
                  {data.link2}
                </td>
                <td className="text-center py-2 space-x-2">
                  <EditLomba lomba={data}/>
                  <DeleteLomba lomba={data} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TabelInfoLomba;
