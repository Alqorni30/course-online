import CardDataStats from "../CardDataStats";
import { MdOutlineClass, MdPeople } from "react-icons/md";
import { FaCartPlus, FaUser } from "react-icons/fa";
import TableUser from "../Tables/TableUser";

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total Pendaftar" total='10' levelUp>
          <FaUser className="fill-primary dark:fill-white text-4xl rounded-lg p-2 bg-slate-300" />
        </CardDataStats>

        <CardDataStats title="Total Kelas" total="3" levelUp>
          <MdOutlineClass className="fill-primary dark:fill-white text-4xl rounded-lg p-2 bg-slate-300" />
        </CardDataStats>

        <CardDataStats title="Total Pembelian" total="100" levelUp>
          <FaCartPlus className="fill-primary dark:fill-white text-4xl rounded-lg p-2 bg-slate-300" />
        </CardDataStats>

        <CardDataStats title="Total Users" total="3.456" levelDown>
          <MdPeople className="fill-primary dark:fill-white text-4xl rounded-lg p-2 bg-slate-300" />
        </CardDataStats>
      </div>
      <TableUser />
    </>
  );
};

export default ECommerce;
