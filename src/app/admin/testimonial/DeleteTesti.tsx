"use client";

import { useState} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";

type dataTesti = {
  id: number;
  nama: string;
  job: string;
  testi: string;
}

const DeleteTesti = ({ testi }: { testi: dataTesti }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async (testiID: number) => {
    await axios.delete(`/api/dataTestimony/${testiID}`);
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
            Kamu yakin ingin menghapus {testi.nama}?
          </h3>

          <div className="modal-action ">
            <button type="button" className="btn btn-error" onClick={handleModal}>
              No
            </button>
            <button type="button" onClick={() => handleDelete(testi.id)} className="btn btn-primary">
              Yes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteTesti;
