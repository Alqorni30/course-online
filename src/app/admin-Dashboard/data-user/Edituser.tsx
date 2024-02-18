"use client";

import { useState, SyntheticEvent } from "react";
import type { Kategori } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FiEdit } from "react-icons/fi";

type userDaftar = {
  id: number;
  username: string;
  email: string;
  noWa: string;
  kategoriId: number;
};

const Edituser = ({
  kategori,
  user,
}: {
  kategori: Kategori[];
  user: userDaftar;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUserName] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [noWa, setNoWa] = useState(user.noWa);
  const [kategoriId, setKategoriId] = useState(user.kategoriId);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.patch(`/api/userDaftar/${user.id}`, {
      username: username,
      email: email,
      noWa: noWa,
      kategoriId: Number(kategoriId),
    });
    setSuccess(true);

    // Close the modal after a delay (you can adjust the delay as needed)
    setTimeout(() => {
      setSuccess(false);
      setIsOpen(false);
    }, 1000);

    router.refresh();
    
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleModal} className="btn btn-info btn-sm">
        <FiEdit className="text-xl text-white" />
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"}>
        {success && (
          <div role="alert" className="alert alert-success">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span className="text-white">User Berhasil diedit</span>
        </div>
        )}
        <div className="modal-box text-zinc-800">
          <h3 className="font-bold text-lg">Edit {user.username}</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control w-full">
              <label className="label font-bold">Nama Pendaftar</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="input input-bordered "
                placeholder=""
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
                placeholder="08xxxxxxxx"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Nomor WA</label>
              <input
                type="text"
                value={noWa}
                onChange={(e) => setNoWa(e.target.value)}
                className="input input-bordered"
                placeholder="08xxxxxxxx"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Kategori</label>
              <select
                value={kategoriId}
                onChange={(e) => setKategoriId(Number(e.target.value))}
                className="select select-bordered"
              >
                {kategori.map((kat) => (
                  <option key={kat.id} value={kat.id}>
                    {kat.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModal}>
                Keluar
              </button>
              <button type="submit" className="btn btn-primary">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edituser;
