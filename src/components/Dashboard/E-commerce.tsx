import CardDataStats from "../ui/CardDataStats";
import { MdOutlineClass, MdPeople } from "react-icons/md";
import { FaCartPlus, FaUser } from "react-icons/fa";

import TabelPendaftar from "../Tables/TabelPendaftar";
import prismadb from "@/libs/db";

const ECommerce: React.FC = async () => {
  const userDaftar = await prismadb.userDaftar.findMany({
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

  const userCount = userDaftar.length;
  const dataCount = dataKelas.length;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total Pendaftar" total={userCount}>
          <FaUser className="fill-primary text-4xl rounded-lg p-2 bg-slate-300" />
        </CardDataStats>

        <CardDataStats title="Total Kelas" total={dataCount}>
          <MdOutlineClass className="fill-primary text-4xl rounded-lg p-2 bg-slate-300" />
        </CardDataStats>

        <CardDataStats title="Total Pembelian" total={userCount}>
          <FaCartPlus className="fill-primary text-4xl rounded-lg p-2 bg-slate-300" />
        </CardDataStats>

        <CardDataStats title="Total Anggota" total={userCount}>
          <MdPeople className="fill-primary text-4xl rounded-lg p-2 bg-slate-300" />
        </CardDataStats>
      </div>
      <TabelPendaftar />
    </>
  );
};

export default ECommerce;
