"use client";

import { useState, SyntheticEvent } from "react";
import axios from 'axios'
import { useRouter } from "next/navigation";

const AddKelas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nama, setNama] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [jamKelas, setJamKelas] = useState("");
  const [hargaAsliBasic, setHargaAsliBasic] = useState("");
  const [hargaDiscBasic, setHargaDiscBasic] = useState("");
  const [discpersenBasic, setDiscpersenBasic] = useState("");
  const [hargaAsliPremium, setHargaAsliPremium] = useState("");
  const [hargaDiscPremium, setHargaDiscPremium] = useState("");
  const [discpersenPremium, setDiscpersenPremium] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
  
    try {
      await axios.post("/api/dataKelas", {
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
  
      setNama("");
      setTanggal("");
      setJamKelas("");
      setHargaAsliBasic("");
      setHargaDiscBasic("");
      setHargaAsliPremium("");
      setHargaDiscPremium("");
      setDiscpersenBasic("");
      setDiscpersenPremium("");
      setIsOpen(false);
      
      router.refresh(); 
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Input tidak boleh kosong.");
    }
  };
  

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleModal} className="btn btn-primary text-white">
        Tambah Kelas
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box bg-gray-700">
          <h3 className="font-bold text-lg text-white">Tambah Kelas Baru</h3>
          <form onSubmit={handleSubmit}>
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
              <label className="label font-bold text-white">Tanggal</label>
              <input
                type="text"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                className="input input-bordered"
                placeholder="xx-xx-20xx"
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
                onChange={(e) => setHargaAsliBasic(e.target.value)}
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
                onChange={(e) => setHargaAsliPremium(e.target.value)}
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
                onChange={(e) => setHargaDiscBasic(e.target.value)}
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
                onChange={(e) => setHargaDiscPremium(e.target.value)}
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
                onChange={(e) => setDiscpersenBasic(e.target.value)}
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
                onChange={(e) => setDiscpersenPremium(e.target.value)}
                className="input input-bordered"
                placeholder="0%"
                // required
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModal}>
                Close
              </button>
              <button type="submit"  className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddKelas;
