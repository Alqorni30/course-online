import React from "react";

const page = () => {
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
          <form className="max-w-md ">
            <div className="mb-4">
              <label
                htmlFor="nama"
                className="block text-sm font-medium text-gray-600"
              >
                Nama
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
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
                id="nomorWa"
                name="nomorWa"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="buktiTransfer"
                className="block text-sm font-medium text-gray-600"
              >
                Bukti Transfer
              </label>
              <input
                type="file"
                id="buktiTransfer"
                name="buktiTransfer"
                className="mt-1 p-2 w-full border border-secondary rounded-md"
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
