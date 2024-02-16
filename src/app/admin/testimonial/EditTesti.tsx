"use client";

import { useState, SyntheticEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FiEdit } from "react-icons/fi";

type dataTesti = {
    id: number;
    nama: string;
    job: string;
    testi: string;
  }

const EditTesti = ({ testimoni }: { testimoni: dataTesti }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [nama, setNama] = useState(testimoni.nama);
  const [job, setJob] = useState(testimoni.job);
  const [testimony, setTestimony] = useState(testimoni.testi);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.patch(`/api/dataTestimony/${testimoni.id}`, {
      nama: nama,
      job: job,
      testi: testimony,
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
            <span className="text-white">Testimonials Berhasil diedit</span>
          </div>
        )}
        <div className="modal-box text-zinc-800">
          <h3 className="font-bold text-lg">Edit {testimoni.nama}</h3>
          <form onSubmit={handleUpdate}>
          <div className="form-control w-full">
              <label className="label font-bold text-white">Nama</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="input input-bordered"
                placeholder=""
                // required
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold text-white">Pekerjaan</label>
              <input
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                className="input input-bordered"
                placeholder=""
                // required
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold text-white">Deskripsi</label>
              <textarea
                value={testimony}
                onChange={(e) => setTestimony(e.target.value)}
                className="input input-bordered h-[200px]"
                placeholder=""
                // required
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

export default EditTesti;
