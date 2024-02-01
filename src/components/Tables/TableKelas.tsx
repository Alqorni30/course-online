import AddKelas from "@/app/admin/data-kelas/AddKelas";
import DeleteKelas from "@/app/admin/data-kelas/DeleteKelas";
import EditKelas from "@/app/admin/data-kelas/EditKelas";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getdataKelas = async () => {
  const res = await prisma.dataKelas.findMany({
    select: {
      id: true,
      nama: true,
      hargaAsli: true,
      hargaDisc: true,
      discpersen: true,
    },
  });
  return res;
};

const TableKelas: React.FC = async () => {
  const [dataKelas] = await Promise.all([getdataKelas()]);

  return (
    <>
      
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
      <div className="mb-2">
        <AddKelas />
      </div>
        <table className="min-w-full bg-white border border-gray-300">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-gray-200">
            Data Kelas
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b border-r">No</th>
              <th className="py-2 px-4 border-b border-r">Nama Kelas</th>
              <th className="py-2 px-4 border-b border-r">Harga Asli</th>
              <th className="py-2 px-4 border-b border-r">Harga Diskon</th>
              <th className="py-2 px-4 border-b border-r">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataKelas.map((kelas, index) => (
              <tr
                className={`text-black text-center font-medium ${
                  index % 2 === 0 ? "" : "bg-red-100" // Background merah untuk nomor genap
                }`}
                key={kelas.id}
              >
                <td className="py-2 text-center px-4 border-b border-r">
                  {index + 1}
                </td>
                <td className="py-2 text-start px-4 border-b border-r">
                  {kelas.nama}
                </td>
                <td className="py-2 text-center px-4 border-b border-r">
                  Rp {kelas.hargaAsli}
                </td>
                <td className="py-2 text-center px-4 border-b border-r">
                  Rp {kelas.hargaDisc} ({kelas.discpersen}%)
                </td>
                <td className="text-center py-2 space-x-2">
                <EditKelas kelas={kelas} />
                <DeleteKelas kelas={kelas}  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableKelas;
