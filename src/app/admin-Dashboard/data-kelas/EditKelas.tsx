"use client";

import { useState, SyntheticEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FiEdit } from "react-icons/fi";

type dataKelas = {
  id: number;
  nama: string;
  tanggal: string;
  jamKelas: string;
  hargaAsliBasic: number;
  hargaAsliPremium: number;
  hargaDiscBasic: number;
  hargaDiscPremium: number;
  discpersenBasic: number;
  discpersenPremium: number;
};

const EditKelas = ({ kelas }: { kelas: dataKelas }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [nama, setNama] = useState(kelas.nama);
  const [tanggal, setTanggal] = useState(kelas.tanggal);
  const [jamKelas, setJamKelas] = useState(kelas.jamKelas);
  const [hargaAsliBasic, setHargaAsliBasic] = useState(kelas.hargaAsliBasic);
  const [hargaDiscBasic, setHargaDiscBasic] = useState(kelas.hargaDiscBasic);
  const [discpersenBasic, setDiscpersenBasic] = useState(kelas.discpersenBasic);
  const [hargaAsliPremium, setHargaAsliPremium] = useState(kelas.hargaAsliPremium);
  const [hargaDiscPremium, setHargaDiscPremium] = useState(kelas.hargaDiscPremium);
  const [discpersenPremium, setDiscpersenPremium] = useState(kelas.discpersenPremium);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.patch(`/api/dataKelas/${kelas.id}`, {
      nama,
        tanggal,
        jamKelas,
        hargaAsliBasic: Number(hargaAsliBasic),
        hargaDiscBasic: Number(hargaDiscBasic),
        discpersenBasic: Number(discpersenBasic),
        hargaAsliPremium: Number(hargaAsliPremium),
        hargaDiscPremium: Number(hargaDiscPremium),
        discpersenPremium: Number(discpersenPremium),
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
            <span className="text-white">Kelas Berhasil diedit</span>
          </div>
        )}
        <div className="modal-box text-zinc-800">
          <h3 className="font-bold text-lg">Edit {kelas.nama}</h3>
          <form onSubmit={handleUpdate}>
          <div className="form-control w-full">
              <label className="label font-bold text-white">Nama kelas</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="input input-bordered"
                placeholder="Nama Kelas"
                // required
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold text-white">Tanggal Mulai</label>
              <input
                type="text"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                className="input input-bordered"
                placeholder=""
                // required
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold text-white">Jam kelas</label>
              <input
                type="text"
                value={jamKelas}
                onChange={(e) => setJamKelas(e.target.value)}
                className="input input-bordered"
                placeholder=""
                // required
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold text-white">Harga Asli Basic</label>
              <input
                type="number"
                value={hargaAsliBasic}
                onChange={(e) => setHargaAsliBasic(Number(e.target.value))}
                className="input input-bordered"
                placeholder=""
                // required
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold text-white">Harga Asli Premium</label>
              <input
                type="number"
                value={hargaAsliPremium}
                onChange={(e) => setHargaAsliPremium(Number(e.target.value))}
                className="input input-bordered"
                placeholder=""
                // required
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold text-white">Harga Diskon Basic</label>
              <input
                type="number"
                value={hargaDiscBasic}
                onChange={(e) => setHargaDiscBasic(Number(e.target.value))}
                className="input input-bordered"
                placeholder=""
                // required
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold text-white">Harga Diskon Premium</label>
              <input
                type="number"
                value={hargaDiscPremium}
                onChange={(e) => setHargaDiscPremium(Number(e.target.value))}
                className="input input-bordered"
                placeholder=""
                // required
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold text-white">Persentase Diskon Basic</label>
              <input
                type="number"
                value={discpersenBasic}
                onChange={(e) => setDiscpersenBasic(Number(e.target.value))}
                className="input input-bordered"
                placeholder="0%"
                // required
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold text-white">Persentase Diskon Premium</label>
              <input
                type="number"
                value={discpersenPremium}
                onChange={(e) => setDiscpersenPremium(Number(e.target.value))}
                className="input input-bordered"
                placeholder="0%"
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

export default EditKelas;
