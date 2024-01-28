"use client";
import { useState, SyntheticEvent } from "react";
import type { Kategori } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = ({ kategori }: { kategori: Kategori[] }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [nomorWa, setNomorWa] = useState("");
  const [kategoriId, setKategoriId] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      await axios.post("/api/userDaftar", {
        username: username,
        email: email,
        nomorWa: Number(nomorWa),
        kategoriId: Number(kategoriId),
      });

      setUsername("");
      setEmail("");
      setNomorWa("");
      setKategoriId("");

      router.refresh();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Input tidak boleh kosong.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
        <h3 className="font-bold text-2xl mb-4 text-white">
          Isi Form Dibawah Ini
        </h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-white font-bold mb-2">Nama</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              placeholder="Nama Kamu"
            />
          </div>
          <div>
            <label className="block text-white font-bold mb-2">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="example@example.com"
            />
          </div>
          <div>
            <label className="block text-white font-bold mb-2">Nomor WA</label>
            <input
              type="text"
              value={nomorWa}
              onChange={(e) => setNomorWa(e.target.value)}
              className="input"
              placeholder="08xxxxxxxx"
            />
          </div>
          <div>
            <label className="block text-white font-bold mb-2">Kategori</label>
            <select
              value={kategoriId}
              onChange={(e) => setKategoriId(e.target.value)}
              className="select select-bordered"
              // required
            >
              <option value="" disabled>
                Pilih Kategori
              </option>
              {kategori.map((kat) => (
                <option key={kat.id} value={kat.id}>
                  {kat.name}
                </option>
              ))}
            </select>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-secondary px-4 py-2 rounded-md hover:bg-amber-500"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
