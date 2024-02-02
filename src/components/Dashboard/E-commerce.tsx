import CardDataStats from "../CardDataStats";
import { MdOutlineClass, MdPeople } from "react-icons/md";
import { FaCartPlus, FaUser } from "react-icons/fa";
import TableUser from "../Tables/TableUser";

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
const gedataKelas = async () => {
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



const ECommerce: React.FC = async () => {
  const [userDaftar, dataKelas] = await Promise.all([getUserDaftar(), gedataKelas()]);

  const userCount = userDaftar.length;
  const dataCount = dataKelas.length;
  
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total Pendaftar" total={userCount} levelUp>
          <FaUser className="fill-primary text-4xl rounded-lg p-2 bg-slate-300" />
        </CardDataStats>

        <CardDataStats title="Total Kelas" total={dataCount} levelUp>
          <MdOutlineClass className="fill-primary text-4xl rounded-lg p-2 bg-slate-300" />
        </CardDataStats>

        <CardDataStats title="Total Pembelian" total="100" levelUp>
          <FaCartPlus className="fill-primary text-4xl rounded-lg p-2 bg-slate-300" />
        </CardDataStats>

        <CardDataStats title="Total Anggota" total={userCount} levelDown>
          <MdPeople className="fill-primary text-4xl rounded-lg p-2 bg-slate-300" />
        </CardDataStats>
      </div>
      <TableUser title="Data Pendaftar"/>
    </>
  );
};

export default ECommerce;
