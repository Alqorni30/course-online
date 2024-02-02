import ViewUser from "@/app/admin/data-pendaftar/Viewuser";
import { PrismaClient } from "@prisma/client";
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
    },
  });
  return res;
};
const getKategori = async () => {
  const res = await prisma.kategori.findMany();
  return res;
};

const TabelPendaftar = async () => {
  const [userDaftar, kategori] = await Promise.all([getUserDaftar(), getKategori()]);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table className="min-w-full bg-white border border-gray-300">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-gray-100">
          Tabel Pendaftar
          </caption>
          <thead className="text-xs text-start text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b border-r">No</th>
              <th className="py-2 px-4 border-b border-r">Nama</th>
              <th className="py-2 px-4 border-b border-r">Email</th>
              <th className="py-2 px-4 border-b border-r">Nomor WA</th>
              <th className="py-2 px-4 border-b border-r">Kategori</th>
              <th className="py-2 px-4 border-b border-r">Aksi</th>
            </tr>
          </thead>
          <tbody >
            {userDaftar.map((user, index) => (  
              <tr className={`text-black text-center font-medium ${
                index % 2 === 0 ? '' : 'bg-red-100' // Background merah untuk nomor genap
              }`} key={user.id}>
                <td className="py-2 text-center px-4 border-b border-r">{index + 1}</td>
                <td className="py-2 text-start px-4 border-b border-r">
                  {user.username}
                </td>
                <td className="py-2 text-center px-4 border-b border-r">
                  {user.email}
                </td>
                <td className="py-2 text-center px-4 border-b border-r">
                  {user.noWa}
                </td>
                <td className="py-2 text-center px-4 border-b border-r">
                  {user.kategori.name}
                </td>
                <td className="text-center py-2 space-x-2">
                    <ViewUser user={user} kategori={kategori} />
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
