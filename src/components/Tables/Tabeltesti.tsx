import AddTesti from "@/app/admin-Dashboard/testimonial/AddTesti";
import DeleteTesti from "@/app/admin-Dashboard/testimonial/DeleteTesti";
import EditTesti from "@/app/admin-Dashboard/testimonial/EditTesti";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const prisma = new PrismaClient();

const getdataTesti = async () => {
  const res = await prisma.dataTesti.findMany({
    select: {
      id: true,
      image: true,
      nama: true,
      job: true,
      testi: true,
    },
  });
  return res;
};

const Tabeltesti: React.FC = async () => {
  const [dataTesti] = await Promise.all([getdataTesti()]);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <div className="mb-2">
          <AddTesti />
        </div>
        <table className="min-w-full bg-white border border-gray-300">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-gray-200">
            Data Testimonial
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b border-r border-gray-300">No</th>
              <th className="py-2 px-4 border-b border-r border-gray-300">Foto</th>
              <th className="py-2 px-4 border-b border-r border-gray-300">Nama</th>
              <th className="py-2 px-4 border-b border-r border-gray-300">Pekerjaan</th>
              <th className="py-2 px-4 border-b border-r border-gray-300">Deskripsi</th>
              <th className="py-2 px-4 border-b border-r border-gray-300">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataTesti.map((testi, index) => (  
              <tr
                className={`text-black text-center font-medium ${
                  index % 2 === 0 ? "" : "bg-red-100" // Background merah untuk nomor genap
                }`}
                key={testi.id}
              >
                <td className="py-2 text-center px-4 border-b border-r border-gray-300">
                  {index + 1}
                </td>
                <td className="py-2 text-center px-4 border-b border-r border-gray-300">
                  <Link href={testi.image}>
                    <Image
                      src={testi.image} // Menampilkan gambar dari URL yang disimpan di database
                      alt="testi image"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </Link>
                </td>
                <td className="py-2 text-start text-sm px-4 border-b border-r border-gray-300">
                  {testi.nama}
                </td>
                <td className="py-2 text-start text-sm px-4 border-b border-r border-gray-300">
                  {testi.job}
                </td>
                <td className="py-2 text-start text-sm px-4 border-b border-r border-gray-300">
                  {testi.testi}
                </td>
                <td className="flex flex-col gap-3 p-2">
                  <EditTesti testimoni={testi} />
                  <DeleteTesti testi={testi} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tabeltesti;
