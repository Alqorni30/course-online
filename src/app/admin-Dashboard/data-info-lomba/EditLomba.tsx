"use client";

import { useState, SyntheticEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FiEdit } from "react-icons/fi";

type dataLomba = {
  id: number;
  image: string;
  nama: string;
  kategori: string;
  desc: string;
  deadline: string;
  totalHadiah: string;
  link1: string;
  link2: string;
};

const EditLomba = ({ lomba }: { lomba: dataLomba }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [kategori, setKategori] = useState(lomba.kategori);
  const [nama, setNama] = useState(lomba.nama);
  const [desc, setDesc] = useState(lomba.desc);
  const [deadline, setDeadline] = useState(lomba.deadline);
  const [totalHadiah, setTotalHadiah] = useState(lomba.totalHadiah);
  const [link1, setLink1] = useState(lomba.link1);
  const [link2, setLink2] = useState(lomba.link2);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.patch(`/api/dataLomba/${lomba.id}`, {
      nama: nama,
      kategori: kategori,
      desc: desc,
      deadline: deadline,
      totalHadiah: totalHadiah,
      link1: link1,
      link2: link2,
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-white">Lomba Berhasil diedit</span>
          </div>
        )}
        <div className="modal-box text-zinc-800">
          <h3 className="font-bold text-lg">Edit {lomba.nama}</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control w-full">
              <label className="label font-bold">Nama Lomba</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="input input-bordered "
                placeholder=""
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Kategori</label>
              <input
                type="text"
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
                className="input input-bordered"
                placeholder=""
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Deskripsi</label>
              <input
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="input input-bordered"
                placeholder=""
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Deadline</label>
              <input
                type="text"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="input input-bordered"
                placeholder=""
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Hadiah</label>
              <input
                type="text"
                value={totalHadiah}
                onChange={(e) => setTotalHadiah(e.target.value)}
                className="input input-bordered"
                placeholder=""
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Link Daftar</label>
              <input
                type="text"
                value={link1}
                onChange={(e) => setLink1(e.target.value)}
                className="input input-bordered"
                placeholder=""
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Link Info</label>
              <input
                type="text"
                value={link2}
                onChange={(e) => setLink2(e.target.value)}
                className="input input-bordered"
                placeholder=""
              />
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

export default EditLomba;
