"use client";

import { useState} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";

type dataKelas = {
  id: number;
  nama: string;
  hargaAsli: number;
  hargaDisc: number;
  discpersen: number;
};

const DeleteKelas = ({ kelas }: { kelas: dataKelas }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async (kelasID: number) => {
    await axios.delete(`/api/dataKelas/${kelasID}`);
    router.refresh();
    setIsOpen(false);
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleModal} className="btn btn-error btn-sm">
        <MdDeleteOutline className="text-xl text-white" />
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-medium text-lg text-zinc-800">
            Kamu yakin ingin menghapus {kelas.nama}?
          </h3>

          <div className="modal-action ">
            <button type="button" className="btn btn-error" onClick={handleModal}>
              No
            </button>
            <button type="button" onClick={() => handleDelete(kelas.id)} className="btn btn-primary">
              Yes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteKelas;
