import ViewUser from "@/app/admin-Dashboard/data-pendaftar/Viewuser";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
const prisma = new PrismaClient();

const getUserDaftar = async () => {
  const res = await prisma.userDaftar.findMany({
    select: {
      id: true,
      username: true,
      email: true,
      noWa: true,
      kategoriId: true,
      kategori: true,
      paketId: true,
      paket: true,
      image: true,
    },
  });
  return res;
};
const getKategori = async () => {
  const res = await prisma.kategori.findMany();
  return res;
};
const getPaket = async () => {
  const res = await prisma.paket.findMany();
  return res;
};

const TabelPendaftar = async () => {
  const [userDaftar, kategori, paket] = await Promise.all([
    getUserDaftar(),
    getKategori(),
    getPaket(),
  ]);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table className="min-w-full bg-white border border-gray-300">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-gray-100">
            Tabel Pendaftar
          </caption>
          <thead className="text-xs text-start text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                No
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Nama
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Email
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Nomor WA
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Kategori
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Paket
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Bukti Tf
              </th>
              <th className="py-2 px-4 border-b border-r border-gray-300">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {userDaftar.map((user, index) => (
              <tr
                className={`text-black text-center font-medium ${
                  index % 2 === 0 ? "" : "bg-gray-100" // Mengubah background warna menjadi abu-abu
                }`}
                key={user.id}
              >
                <td className="py-2 text-center px-4 border-b border-r border-gray-300">
                  {index + 1}
                </td>
                <td className="py-2 text-start text-sm px-4 border-b border-r border-gray-300">
                  {user.username}
                </td>
                <td className="py-2 text-center text-sm px-4 border-b border-r border-gray-300">
                  {user.email}
                </td>
                <td className="py-2 text-center text-sm px-4 border-b border-r border-gray-300">
                  {user.noWa}
                </td>
                <td className="py-2 text-center text-sm px-4 border-b border-r border-gray-300">
                  {user.kategori.name}
                </td>
                <td className="py-2 text-center text-sm px-4 border-b border-r border-gray-300">
                  {user.paket.name}
                </td>
                <td className="py-2 text-center px-4 border-b border-r border-gray-300">
                  <Link href={user.image}>
                    <Image
                      src={user.image} // Menampilkan gambar dari URL yang disimpan di database
                      alt="Bukti TF"
                      width={50}
                      height={50}
                      className=""
                    />
                  </Link>
                </td>
                <td className="flex flex-col gap-3 p-2 text-sm">
                  <ViewUser user={user} kategori={kategori} paket={paket}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TabelPendaftar;
