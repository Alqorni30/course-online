"use client";

import { useState} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";

type userDaftar = {
  id: number;
  username: string;
  email: string;
  noWa: string;
  kategoriId: number;
};

const Deleteuser = ({ user }: { user: userDaftar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async (userId: number) => {
    await axios.delete(`/api/userDaftar/${userId}`);
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
            Kamu yakin ingin menghapus {user.username}?
          </h3>

          <div className="modal-action ">
            <button type="button" className="btn btn-error" onClick={handleModal}>
              No
            </button>
            <button type="button" onClick={() => handleDelete(user.id)} className="btn btn-primary">
              Yes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deleteuser;
