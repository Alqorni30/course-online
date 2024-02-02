"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface hargaProps {
  hargaAsli: number;
  hargaDiskon: number;
  diskon: number;
}

const InformasiHarga : React.FC<hargaProps>  = ({hargaAsli, hargaDiskon, diskon}) => {
  const [isFixed, setIsFixed] = useState(false);
  const informasiHargaRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const scrollY = window.scrollY;
      const informasiHargaPosition = informasiHargaRef.current?.offsetTop || 0;
      const overviewProgramPosition =
        document.getElementById("overview-program")?.offsetTop || 0;
      const perbedaanKelasPosition =
        document.getElementById("perbedaan-kelas")?.offsetTop || 0;

      // Set status fixed hanya di antara overview program dan perbedaan kelas
      setIsFixed(
        scrollY >= overviewProgramPosition && scrollY < perbedaanKelasPosition
      );
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <>
      <div
        ref={informasiHargaRef}
        className={`${isFixed ? "fixed top-40 bottom-96 right-5" : ""}`}
      >
        <div className="bg-slate-200 p-5 rounded-xl">
          <h3 className="text-center mb-3 font-semibold py-2 border border-cyan-500 rounded-lg">
            Informasi Program
          </h3>
          <div className="flex justify-between gap-20 mb-3">
            <p className="font-bold">Waktu Mulai</p>
            <p className="text-sm text-primary font-semibold">10 Mei 2024</p>
          </div>
          <div className="flex justify-between gap-20 mb-3">
            <p className="">Minggu</p>
            <p className="text-sm">10.00-12.00 (Live Session)</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="pb-3">Durasi</p>
            <div className="flex justify-center items-center gap-3">
              <p className="text-sm py-5 px-11 rounded-lg bg-amber-200">
                4 Bulan
              </p>
              <p className="text-sm py-5 px-11 rounded-lg bg-cyan-200">
                3 Bulan
              </p>
            </div>
          </div>
          <div className="mt-5">
            <p className="pb-3">Harga</p>
            <p className="text-lg line-through pb-2">Rp {hargaAsli}</p>
            <div className="flex gap-3">
              <p className="px-3 py-1 rounded-lg text-white bg-red-600">{diskon} %</p>
              <p className="text-lg font-bold text-secondary">Rp {hargaDiskon}</p>
            </div>
          </div>
          <div className="mt-5 w-full">
            <button className="w-full bg-secondary hover:bg-amber-500 transition duration-200 rounded-lg text-white font-semibold py-4">
              <Link href="/daftar-kelas" className=" px-20 py-4 text-black">
                Daftar Sekarang
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformasiHarga;
