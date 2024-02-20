"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface hargaProps {
  tanggal: string;
  jamKelas: string;
  hargaAsliBasic: number;
  hargaAsliPremium: number;
  hargaDiskonBasic: number;
  hargaDiskonPremium: number;
  discpersenBasic: number;
  discpersenPremium: number;
}

const InformasiHarga: React.FC<hargaProps> = ({
  tanggal,
  jamKelas,
  hargaAsliBasic,
  hargaAsliPremium,
  hargaDiskonBasic,
  hargaDiskonPremium,
  discpersenBasic,
  discpersenPremium,
}) => {
  const [isFixed, setIsFixed] = useState(false);
  const informasiHargaRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const scrollY = window.scrollY;
      const overviewProgramPosition =
        document.getElementById("overview-program")?.offsetTop || 0;
      const perbedaanKelasPosition =
        document.getElementById("sistem")?.offsetTop || 0;

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
  // Tambahkan kelas 'fixed' jika isFixed true dan layar dalam ukuran lg atau md, selain itu hapus kelas 'fixed'
  const fixedClass =
    isFixed && window.innerWidth >= 768
      ? "fixed top-40 bottom-96 right-10 bottom-0"
      : "";

  return (
    <>
      <div ref={informasiHargaRef} className={fixedClass}>
        <div className="bg-slate-200 w-full p-5 rounded-xl">
          <h3 className="text-center mb-3 font-semibold py-2 border border-cyan-500 rounded-lg">
            Informasi Program
          </h3>
          <div className="flex justify-between gap-20 mb-3">
            <p className="font-bold">Tanggal Mulai</p>
            <p className="text-sm text-primary font-semibold">{tanggal}</p>
          </div>
          <div className="flex justify-between gap-20 mb-3">
            <p className="font-bold">Jam Kelas</p>
            <p className="text-sm">{jamKelas}</p>
          </div>
          {/* <div className="flex flex-col justify-center">
            <p className="pb-3">Durasi</p>
            <div className="flex justify-center items-center gap-3">
              <p className="text-sm py-5 px-11 rounded-lg bg-amber-200">
                4 Bulan
              </p>
              <p className="text-sm py-5 px-11 rounded-lg bg-cyan-200">
                3 Bulan
              </p>
            </div>
          </div> */}
          <div className="flex flex-col">
            <p className="pb-3 font-bold">Durasi</p>
            <div className="flex flex-col p-3 rounded-lg bg-white">
              <div className="flex flex-row gap-4">
                <div className="flex flex-col">
                  <div className="font-bold flex justify-center items-center gap-2">
                    <h5 className="text-2xl">5</h5>
                    <p className="text-sm">Sesi</p>
                  </div>
                  <p className="text-center text-xs font-medium mt-3">
                    Pertemuan Kelas
                  </p>
                </div>
                <span className="text-4xl text-secondary">|</span>
                <div className="flex flex-col">
                  <div className="font-bold flex justify-center items-center gap-2">
                    <h5 className="text-2xl">1</h5>
                    <div className="flex flex-col">
                      <p className="text-sm">
                        Sesi
                        <br />
                        Final
                      </p>
                    </div>
                  </div>
                  <p className="text-center text-xs font-medium mt-1">
                    Pitching Day
                  </p>
                </div>
                <span className="text-4xl text-secondary">|</span>
                <div className="flex flex-col">
                  <div className="font-bold flex justify-center items-center gap-2">
                    <h5 className="text-2xl">5</h5>
                    <p className="text-sm">1 on 1</p>
                  </div>
                  <p className="text-center text-xs font-medium mt-3">
                    Mentoring
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="mt-5 bg-cyan-100 px-1  py-2 rounded-lg">
              <p className="pb-3 text-sm font-medium">Harga Paket Basic</p>
              <p className="lg:text-lg md:text-lg text-base line-through pb-2">Rp {hargaAsliBasic}</p>
              <div className="flex lg:flex-row md:flex-row flex-col gap-3">
                <p className="px-3 text-center text-sm py-1 rounded-lg text-white bg-red-600">
                  {discpersenBasic} %
                </p>
                <p className="lg:text-lg md:text-lg text-base font-bold text-secondary">
                  Rp {hargaDiskonBasic}
                </p>
              </div>
            </div>
            <div className="border-r-2 border-secondary mt-2 mx-5"></div>
            <div className="mt-5 bg-amber-50 px-1  py-2 rounded-lg">
              <p className="pb-3 text-sm font-medium">Harga Paket Premium</p>
              <p className="lg:text-lg md:text-lg text-base line-through pb-2">Rp {hargaAsliPremium}</p>
              <div className="flex lg:flex-row md:flex-row flex-col gap-3">
                <p className="px-3 text-center text-sm py-1 rounded-lg text-white bg-red-600">
                  {discpersenPremium} %
                </p>
                <p className="lg:text-lg md:text-lg text-base font-bold text-secondary">
                  Rp {hargaDiskonPremium}
                </p>
              </div>
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
