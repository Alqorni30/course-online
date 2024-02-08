"use client";
import { useState, SyntheticEvent } from "react";
import type { Kategori } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation"; // Mengubah dari "next/navigation"
import { UploadButton } from "@/libs/uploadthing";
import Image from "next/image";

const Form = ({
  kategori
}: {
  kategori: Kategori[];
}) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [noWa, setNoWa] = useState("");
  const [kategoriId, setKategoriId] = useState("");
  const [paketId, setPaketId] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const router = useRouter();

  

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!imageUrl) {
      alert("Anda harus mengunggah bukti transfer.");
      return;
    }

    try {
      await axios.post("/api/userDaftar", {
        username,
        email,
        noWa,
        kategoriId: Number(kategoriId),
        paketId: Number(paketId),
        image: imageUrl,
      });

      setUserName("");
      setEmail("");
      setNoWa("");
      setKategoriId("");
      setPaketId("");
      setImageUrl("");
      

      router.refresh(); 
    } catch (error) {
      console.error("Error submitting form:", error); 
      alert("Input tidak boleh kosong.");
    }
  };

  return (
    <div className="flex justify-center items-center pt-24 pb-20">
      <div className="modal-box bg-gray-400 p-6 rounded-lg shadow-md">
        <h3 className="text-zinc-700 font-bold text-xl mb-4">
          Lengkapi Form Dibawah ini
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-zinc-700 font-bold mb-1">
              Nama Lengkap
            </label>
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
            <label className="block text-zinc-700 font-bold mb-1">Email</label>
            <input
              type="email" // Mengubah menjadi type email
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Example@example.com" // Memperbaiki placeholder
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-zinc-700 font-bold mb-1">
              Nomor WA
            </label>
            <input
              type="number" // Mengubah menjadi type number
              value={noWa}
              onChange={(e) => setNoWa(e.target.value)}
              className="input input-bordered w-full"
              placeholder="08xxxxxxxxx"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-zinc-700 font-bold mb-1">Kelas</label>
            <select
              value={kategoriId}
              onChange={(e) => setKategoriId(e.target.value)}
              className="select select-bordered w-full"
              required
            >
              <option className="font-medium" value="" disabled>
                Pilih Kelas
              </option>
              {kategori?.map((kat) => (
                <option key={kat.id} value={kat.id}>
                  {kat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-zinc-700 font-bold mb-1">
              Upload Bukti Transfer
            </label>
            <div className="">
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  setImageUrl(res[0].url);
                  // alert("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  alert(`ERROR! ${error.message}`);
                }}
              />
            </div>

            {imageUrl.length ? (
              <div className="mt-8">
                <Image
                  src={imageUrl}
                  alt="myimage"
                  width={200}
                  height={200}
                  className="rounded-md"
                />
              </div>
            ) : null}
          </div>
          <div className="flex justify-start">
            <button
              type="submit"
              className="bg-secondary hover:bg-amber-500 text-white font-bold py-2 px-4 rounded"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
