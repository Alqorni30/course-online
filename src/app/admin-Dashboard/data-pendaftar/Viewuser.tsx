'use client';
import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { Kategori, Paket } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type UserDaftar = {
  id: number;
  username: string;
  email: string;
  noWa: string;
  kategoriId: number;
  paketId: number;
  image: string;
};

const ViewUser = ({ user, kategori,paket }: { user: UserDaftar; kategori: Kategori[]; paket:Paket[] }) => {
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
            <div className="form-control w-full text-start">
              <label className="label font-bold">Paket</label>
              <p className="input input-bordered py-3">{paket.find((pak) => pak.id === user.paketId)?.name}</p>
            </div>
            <div className="form-control w-full text-start">
              <label className="label font-bold">Bukti Transfer</label>
              <Link href={user.image}>
                    <Image
                      src={user.image} // Menampilkan gambar dari URL yang disimpan di database
                      alt="Bukti TF"
                      width={50}
                      height={50}
                      className=""
                    />
                  </Link>
            </div>
            <div className="modal-action">
              <button type="button" className="btn btn-neutral" onClick={handleView}>
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
