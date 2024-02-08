"use client";

import { useState, SyntheticEvent } from "react";
import axios from 'axios'
import { useRouter } from "next/navigation";
import { UploadButton } from "@/libs/uploadthing";
import Image from "next/image";


const AddTesti = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [nama, setNama] = useState("");
  const [job, setJob] = useState("");
  const [testi, setTesti] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!imageUrl) {
        alert("Anda harus mengunggah foto.");
        return;
      }
  
    try {
      await axios.post("/api/dataTestimony", {
        image: imageUrl,
        nama,
        job,
        testi
      });
      
      setImageUrl("");
      setNama("");
      setJob("");
      setTesti("");
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
        Tambah testimonial
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box bg-gray-700">
          <h3 className="font-bold text-lg text-white">Tambah Testimonial Baru</h3>
          <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-zinc-700 font-bold mb-1">
              Upload Foto
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
                value={testi}
                onChange={(e) => setTesti(e.target.value)}
                className="input input-bordered h-[200px]"
                placeholder=""
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

export default AddTesti;
