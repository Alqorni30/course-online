import AddInfoLomba from "@/app/admin-Dashboard/data-info-lomba/AddInfoLomba";
import EditLomba from "@/app/admin-Dashboard/data-info-lomba/EditLomba";
import DeleteLomba from "@/app/admin-Dashboard/data-info-lomba/DeleteLomba";
import Image from "next/image";
import Link from "next/link";
import prismadb from "@/libs/db";

const TabelInfoLomba: React.FC = async () => {
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
              <th className="py-2 px-4 border-b border-r border-gray-300">
                No
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Foto
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Nama
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Kategori
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Deskripsi
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Deadline
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Hadiah
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Link Daftar
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Link Info
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Aksi
              </th>
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
                <td className="py-2 text-center px-4 border-b border-r border-gray-300">
                  {index + 1}
                </td>
                <td className="py-2 text-center px-4 border-b border-r border-gray-300">
                  <Link href={data.image}>
                    <Image
                      src={data.image} // Menampilkan gambar dari URL yang disimpan di database
                      alt="data image"
                      width={50}
                      height={50}
                      className=""
                    />
                  </Link>
                </td>
                <td className="py-2 text-start text-sm px-4 border-b border-r border-gray-300">
                  {data.nama}
                </td>
                <td className="py-2 text-center text-sm px-4 border-b border-r border-gray-300">
                  {data.kategori}
                </td>
                <td className="py-2 text-start text-sm px-4 border-b border-r border-gray-300">
                  {data.desc}
                </td>
                <td className="py-2 text-center text-sm px-4 border-b border-r border-gray-300">
                  {data.deadline}
                </td>
                <td className="py-2 text-center text-sm px-4 border-b border-r border-gray-300">
                  {data.totalHadiah}
                </td>
                <td className="py-2 text-center text-sm px-4 border-b border-r border-gray-300">
                  {data.link1}
                </td>
                <td className="py-2 text-center text-sm px-4 border-b border-r border-gray-300">
                  {data.link2}
                </td>
                <td className="flex flex-col gap-3 p-2">
                  <EditLomba lomba={data} />
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
