import AddKelas from "@/app/admin-Dashboard/data-kelas/AddKelas";
import DeleteKelas from "@/app/admin-Dashboard/data-kelas/DeleteKelas";
import EditKelas from "@/app/admin-Dashboard/data-kelas/EditKelas";
import prismadb from "@/libs/db";

const TableKelas: React.FC = async () => {
  const dataKelas = await prismadb.dataKelas.findMany({
    select: {
      id: true,
      nama: true,
      tanggal: true,
      jamKelas: true,
      hargaAsliBasic: true,
      hargaAsliPremium: true,
      hargaDiscBasic: true,
      hargaDiscPremium: true,
      discpersenBasic: true,
      discpersenPremium: true,
    },
  });

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
              <th className="py-2 px-4 border-b border-r border-gray-300">
                No
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Tanggal
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Nama Kelas
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Jam Kelas
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Harga Asli Basic
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Harga Diskon Basic
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Harga Asli Premium
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Harga Diskon Premium
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Aksi
              </th>
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
                <td className="py-2 text-center text-sm px-4 border-b border-r border-gray-300">
                  {index + 1}
                </td>
                <td className="py-2 text-start text-sm px-4 border-b border-r border-gray-300">
                  {kelas.tanggal}
                </td>
                <td className="py-2 text-start text-sm px-4 border-b border-r border-gray-300">
                  {kelas.nama}
                </td>
                <td className="py-2 text-start text-sm px-4 border-b border-r border-gray-300">
                  {kelas.jamKelas}
                </td>
                <td className="py-2 text-center text-sm px-4 border-b border-r border-gray-300">
                  Rp {kelas.hargaAsliBasic}
                </td>
                <td className="py-2 text-center text-sm px-4 border-b border-r border-gray-300">
                  Rp {kelas.hargaDiscBasic} ({kelas.discpersenBasic}%)
                </td>
                <td className="py-2 text-center text-sm px-4 border-b border-r border-gray-300">
                  Rp {kelas.hargaAsliPremium}
                </td>
                <td className="py-2 text-center text-sm px-4 border-b border-r border-gray-300">
                  Rp {kelas.hargaDiscPremium} ({kelas.discpersenPremium}%)
                </td>
                <td className="flex flex-col gap-3 p-2">
                  <EditKelas kelas={kelas} />
                  <DeleteKelas kelas={kelas} />
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
