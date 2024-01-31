import Deleteuser from "@/app/admin/data-user/Deleteuser";
import Edituser from "@/app/admin/data-user/Edituser";
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

const TableUser = async () => {
  const [userDaftar, kategori] = await Promise.all([getUserDaftar(), getKategori()]);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table className="min-w-full bg-white border border-gray-300">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white">
          Data Pendaftar
          </caption>
          <thead className="text-xs text-start text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">No</th>
              <th className="py-2 px-4 border-b">Nama</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Nomor WA</th>
              <th className="py-2 px-4 border-b">Kategori</th>
              <th className="py-2 px-4 border-b">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {userDaftar.map((user, index) => (  
              <tr className="text-black" key={user.id}>
                <td className="py-2 text-center px-4 border-b">{index + 1}</td>
                <td className="py-2 text-center px-4 border-b">
                  {user.username}
                </td>
                <td className="py-2 text-center px-4 border-b">
                  {user.email}
                </td>
                <td className="py-2 text-center px-4 border-b">
                  {user.noWa}
                </td>
                <td className="py-2 text-center px-4 border-b">
                  {user.kategori.name}
                </td>
                <td className="text-center space-x-2">
                <Edituser kategori={kategori} user={user} />
                <Deleteuser user={user}  />
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableUser;
