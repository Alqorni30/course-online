"use client";
import { useState, SyntheticEvent } from "react";
import type { Kategori, Paket } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UploadButton } from "@/libs/uploadthing";
import Image from "next/image";
import ba from "@/assets/BA Anak Bisnis.png";
import { IoCheckmarkOutline } from "react-icons/io5";
const Form = ({
  kategori,
  paket,
}: {
  kategori: Kategori[];
  paket: Paket[];
}) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [noWa, setNoWa] = useState("");
  const [kategoriId, setKategoriId] = useState("");
  const [paketId, setPaketId] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

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
      setSuccessMessage(true);
      setUserName("");
      setEmail("");
      setNoWa("");
      setKategoriId("");
      setPaketId("");
      setImageUrl("");

      setTimeout(() => {
        setSuccessMessage(false);
      }, 3000);
      router.refresh();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Input tidak boleh kosong.");
    }
  };

  return (
    <section className=" lg:px-16 px-5 pt-32 pb-20">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-100 p-6 rounded-3xl shadow-md">
            <h3 className="text-zinc-700 font-bold text-xl mb-4">
              Cara Daftar Program
            </h3>
            <ol className="font-medium list-decimal px-5">
              <li>Isi Form Pendaftaran disebelah kanan.</li>
              <li>Transfer Biaya Program sesuai paket kelas yang dipilih.</li>
              <li>
                Pilih metode transfer via Mobile Banking : BCA (7405046016) a.n
                Randi Saputra atau via E-Money : Ovo (085338739647) a.n Randi
                Saputra.
              </li>
              <li>Tunggu konfirmasi maksimal 24 Jam.</li>
            </ol>
            <p className="mt-5 font-medium lg:text-md text-sm text-center mb-2">
              Let's Join this program cause something big is waiting for you!!
            </p>
            <h3 className="font-bold lg:text-xl text-sm text-center">
              Anak Bisnis | Your <span className="text-secondary">Future</span>{" "}
              Begins Here!!
            </h3>
            <Image
              className="mx-auto mt-5"
              src={ba}
              width={250}
              height={250}
              alt="hero"
            />
          </div>
          <div className="bg-slate-100 p-5 rounded-3xl shadow-md">
            <h3 className="text-zinc-700 font-bold lg:text-3xl md:text-2xl text-xl text-center">
              Daftar Kelas Anak Bisnis
            </h3>
            <p className="mb-4 text-center font-medium">
              Pilih kelas dan paket sesuai yang kamu inginkan!
            </p>
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
                <label className="block text-zinc-700 font-bold mb-1">
                  Email
                </label>
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
              {successMessage && (
                <div className="flex justify-center">
                  <p className="text-white text-center flex items-center gap-2 bg-green-600  mb-3 rounded-xl text-sm p-2">
                    Pendaftaran Kamu sudah berhasil mohon ditunggu Email
                    Konfirmasinya <IoCheckmarkOutline size={40} />
                  </p>
                </div>
              )}
              <div className="mb-4">
                <label className="block text-zinc-700 font-bold mb-1">
                  Kelas
                </label>
                <select
                  value={kategoriId}
                  onChange={(e) => setKategoriId(e.target.value)}
                  className="select select-bordered w-full"
                  required
                >
                  <option className="font-medium" value="" disabled>
                    Pilih Kelas
                  </option>
                  {kategori.map((kat) => (
                    <option key={kat.id} value={kat.id}>
                      {kat.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-zinc-700 font-bold mb-1">
                  Paket
                </label>
                <select
                  value={paketId}
                  onChange={(e) => setPaketId(e.target.value)}
                  className="select select-bordered w-full"
                  required
                >
                  <option className="font-medium" value="" disabled>
                    Pilih Paket
                  </option>
                  {paket.map((pak) => (
                    <option key={pak.id} value={pak.id}>
                      {pak.name}
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
                  <p className="text-center text-[10px]">jpg,png,jpeg</p>
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
                  className="bg-secondary  hover:bg-amber-500 text-white font-bold py-2 px-4 rounded"
                >
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
