"use client";

import { useState, SyntheticEvent } from "react";
import type { Kategori } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { MdOutlineEdit } from "react-icons/md";

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

  const router = useRouter();

  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.patch(`/api/userDaftar/${user.id}`, {
      username: username,
      email: email,
      noWa: noWa,
      kategoriId: Number(kategoriId),
    });
    router.refresh();
    setIsOpen(false);
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleModal} className="btn btn-info btn-sm">
        <MdOutlineEdit className="text-xl" />
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"}>
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
