"use client";

import { useState, SyntheticEvent } from "react";
import axios from 'axios'
import { useRouter } from "next/navigation";

const AddKelas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nama, setNama] = useState("");
  const [hargaAsli, setHargaAsli] = useState("");
  const [hargaDisc, setHargaDisc] = useState("");
  const [discpersen, setDiscpersen] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
  
    try {
      await axios.post("/api/dataKelas", {
        nama,
        hargaAsli: Number(hargaAsli),
        hargaDisc: Number(hargaDisc),
        discpersen: Number(discpersen),
      });
  
      setNama("");
      setHargaAsli("");
      setHargaDisc("");
      setDiscpersen("");
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
              <label className="label font-bold text-white">Harga Asli</label>
              <input
                type="number"
                value={hargaAsli}
                onChange={(e) => setHargaAsli(e.target.value)}
                className="input input-bordered"
                placeholder=""
                // required
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold text-white">Harga Diskon</label>
              <input
                type="number"
                value={hargaDisc}
                onChange={(e) => setHargaDisc(e.target.value)}
                className="input input-bordered"
                placeholder=""
                // required
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold text-white">Persentase Diskon</label>
              <input
                type="number"
                value={discpersen}
                onChange={(e) => setDiscpersen(e.target.value)}
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
