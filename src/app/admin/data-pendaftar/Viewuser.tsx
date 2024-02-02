'use client';
import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { Kategori } from "@prisma/client";

type UserDaftar = {
  id: number;
  username: string;
  email: string;
  noWa: string;
  kategoriId: number;
};

const ViewUser = ({ user, kategori }: { user: UserDaftar; kategori: Kategori[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleView = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleView} className="btn btn-info btn-sm">
        <FiEye className="text-md text-white" />
      </button>
      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box text-center text-zinc-800">
            <h3 className="font-bold text-lg">Lihat {user.username}</h3>
            <div className="form-control w-full text-start">
              <label className="label font-bold">Nama Pendaftar</label>
              <p className="input input-bordered py-3">{user.username}</p>
            </div>
            <div className="form-control w-full text-start">
              <label className="label font-bold">Email</label>
              <p className="input input-bordered py-3">{user.email}</p>
            </div>
            <div className="form-control w-full text-start">
              <label className="label font-bold">Nomor WA</label>
              <p className="input input-bordered py-3">{user.noWa}</p>
            </div>
            <div className="form-control w-full text-start">
              <label className="label font-bold">Kategori</label>
              <p className="input input-bordered py-3">{kategori.find((kat) => kat.id === user.kategoriId)?.name}</p>
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleView}>
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewUser;
