'use client';
import { useState, SyntheticEvent } from "react";
import type { Kategori } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";

const Form = ({ kategori }: { kategori: Kategori[] }) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [noWa, setNoWa] = useState("");
  const [kategoriId, setKategoriId] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      await axios.post("/api/userDaftar", {
        username,
        email,
        noWa,
        kategoriId: Number(kategoriId),
      });

      setUserName("");
      setEmail("");
      setNoWa("");
      setKategoriId("");

      router.refresh();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Input tidak boleh kosong.");
    }
  };

  return (
    <div className="flex justify-center items-center  h-screen">
      <div className="modal-box bg-gray-700 p-6 rounded-lg shadow-md w-80">
        <h3 className="text-white font-bold text-lg mb-4">Isi Form Dibawah ini</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white font-bold mb-1">Nama Lengkap</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Nama Kamu"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-bold mb-1">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Example.example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-bold mb-1">Nomor WA</label>
            <input
              type="text"
              value={noWa}
              onChange={(e) => setNoWa(e.target.value)}
              className="input input-bordered w-full"
              placeholder="08xxxxxxxxx"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-bold mb-1">Kategori</label>
            <select
              value={kategoriId}
              onChange={(e) => setKategoriId(e.target.value)}
              className="select select-bordered w-full"
              required
            >
              <option className="font-medium" value="" disabled>
                Pilih Kategori
              </option>
              {kategori.map((kat) => (
                <option key={kat.id} value={kat.id}>
                  {kat.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-start">
            <button type="submit" className="bg-secondary hover:bg-amber-500 text-white font-bold py-2 px-4 rounded">
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
