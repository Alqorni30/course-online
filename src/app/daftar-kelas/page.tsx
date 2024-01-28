"use client";
import { useRouter } from "next/navigation";
import React, { useState, SyntheticEvent } from "react";
import axios from "axios";

const page = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [nomorWa, setNomorWa] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      // // Upload gambar terlebih dahulu, dan dapatkan URL-nya
      // let imageUrl = null;
      // if (image) {
      //   const formData = new FormData();
      //   formData.append("file", image);
      //   const response = await axios.post("/api/upload", formData);
      //   imageUrl = response.data.imageUrl;
      // }

      await axios.post("/api/userDaftar", {
        username,
        email,
        nomorWa: Number(nomorWa),
        // imageUrl,
      });

      setUsername("");
      setEmail("");
      setNomorWa("");
      // setImage(null);

      router.refresh();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Input tidak boleh kosong.");
    }
  };
  return (
    <>
      <div className="py-20 px-8 bg-white">
        <div className="text-black text-center">
          <h3 className="text-3xl font-bold">Daftar Kelas</h3>
          <p className="text-xl">
            Lengkapi form di bawah dengan menggunakan data Anda yang valid
          </p>
        </div>
        <div className="my-8 flex flex-col items-center justify-center">
          <form className="max-w-md" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="nama"
                className="block text-sm font-medium text-gray-600"
              >
                Nama
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="nama"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="nomorWa"
                className="block text-sm font-medium text-gray-600"
              >
                Nomor WhatsApp
              </label>
              <input
                type="text"
                value={nomorWa}
                onChange={(e) => setNomorWa(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
