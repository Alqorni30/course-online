"use client";
import React, { useState } from "react";

const TableKelas: React.FC = () => {
  const [showDiscount, setShowDiscount] = useState(true); // State untuk melacak pilihan pengguna

  const data = [
    {
      id: 1,
      value1: "Kelas Business Plan",
      value2: "Rp 130.000",
      value3: "Rp 110.000",
      disc: "10%",
    },
    {
      id: 2,
      value1: "Kelas Business Case",
      value2: "Rp 130.000",
      value3: "Rp 100.000",
      disc: "15%",
    },
  ];

  const toggleShowDiscount = () => {
    setShowDiscount((prevShowDiscount) => !prevShowDiscount);
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <button
          onClick={toggleShowDiscount}
          className="bg-blue-500 text-white px-4 py-2 m-4 rounded-md"
        >
          {showDiscount ? "Hilangkan harga Diskon" : "Coret Harga asli"}
        </button>
        <table className="min-w-full bg-white border border-gray-300">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-gray-200">
            Data Kelas
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">No</th>
              <th className="py-2 px-4 border-b">Nama Kelas</th>
              <th className="py-2 px-4 border-b">Harga Asli</th>
              <th className="py-2 px-4 border-b">Harga Diskon</th>
              <th className="py-2 px-4 border-b">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="text-md font-medium">
                <td className="py-2 text-center px-4 border-b ">{row.id}</td>
                <td className="py-2 text-center px-4 border-b">{row.value1}</td>
                <td
                  className={
                    showDiscount
                      ? "line-through text-center"
                      : "py-2 text-center px-4 border-b"
                  }
                >
                  {showDiscount ? row.value2 : row.value2}
                </td>
                <td className="py-2 text-center px-4 border-b">
                  {showDiscount ? row.value3 : row.value3} ({showDiscount && row.disc})
                </td>
                <td className="px-6 py-4 flex gap-2 justify-center text-center">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-500 hover:underline"
                  >
                    Hapus
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableKelas;
