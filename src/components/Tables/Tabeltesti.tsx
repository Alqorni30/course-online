import AddTesti from "@/app/admin/testimonial/AddTesti";
// import DeleteKelas from "@/app/admin/data-kelas/DeleteKelas";
// import EditKelas from "@/app/admin/data-kelas/EditKelas";
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
              <th className="py-2 px-4 border-b border-r">No</th>
              <th className="py-2 px-4 border-b border-r">Foto</th>
              <th className="py-2 px-4 border-b border-r">Nama</th>
              <th className="py-2 px-4 border-b border-r">Pekerjaan</th>
              <th className="py-2 px-4 border-b border-r">Deskripsi</th>
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
                <td className="py-2 text-center px-4 border-b border-r">
                  {index + 1}
                </td>
                <td className="py-2 text-center px-4 border-b border-r">
                  <Link href={testi.image}>
                    <Image
                      src={testi.image} // Menampilkan gambar dari URL yang disimpan di database
                      alt="Bukti TF"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </Link>
                </td>
                <td className="py-2 text-start px-4 border-b border-r">
                  {testi.nama}
                </td>
                <td className="py-2 text-center px-4 border-b border-r">
                  {testi.job}
                </td>
                <td className="py-2 text-center px-4 border-b border-r">
                  {testi.testi}
                </td>
                <td className="text-center py-2 space-x-2">
                {/* <EditKelas kelas={kelas} />
                <DeleteKelas kelas={kelas}  /> */}
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
