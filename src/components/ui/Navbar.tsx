"use client";
import { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo/Logo Anak Bisnis Update Putih.png";
import Navlinks from "./Navlinks";

interface NavbarProps {
  isVisible: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isVisible }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [changeColor, setchangeColor] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setchangeColor(true);
    } else {
      setchangeColor(false);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      changeBackgroundColor();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return isVisible ? (
    <>
      <nav
        className={`${
          changeColor
            ? "bg-gradient-to-r from-sky-600 to-cyan-400"
            : "backdrop-blur-sm bg-transparent"
        } w-full shadow-md fixed z-20 lg:py-1 py-2 transition-all duration-300`}
      >
        <div className="max-w-7xl container mx-auto flex justify-between items-center lg:py-1 py-3  lg:px-10 px-8 gap-5">
          <div className="flex text-white gap-2 font-bold lg:py-2 md:py-2 py-1">
            <Link href="/" className="lg:flex justify-center items-center">
              <Image
                src={logo}
                width={170}
                height={50}
                alt="Logo"
                className="lg:w-[170px] lg:h-[50px] w-[100px] h-[30px]"
              />
            </Link>
          </div>
          <Navlinks />
          <button className="hidden lg:block">
            <Link
              href="/daftar-kelas"
              className=" px-5 py-2 font-semibold bg-secondary text-white rounded-md 
               hover:text-white hover:bg-amber-500 transition-all duration-200"
            >
             Daftar Kelas
            </Link>
          </button>
          <button className="text-white lg:hidden" onClick={toggleMenu}>
            {menuOpen ? (
              /* Menampilkan tombol tutup (X) saat menu terbuka */
              <AiOutlineClose className="text-2xl" />
            ) : (
              /* Menampilkan tombol hamburger saat menu tertutup */
              <RiMenu3Fill className="text-2xl" />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden flex justify-center items-center flex-col text-black gap-2.5 transition-all duration-300">
            <Link
              href="/"
              className={`flex items-center font-semibold justify-center w-full px-6 py-3 transition-all hover:bg-slate-300 text-white ${
                activeSection === "home"
                  ? "font-bold text-white border-b-2 border-white"
                  : ""
              }`}
              onClick={() => handleSectionClick("home")}
            >
              Home
            </Link>
            <Link
              className={`flex items-center font-semibold justify-center w-full px-6 py-3 transition-all hover:bg-slate-300 text-white ${
                activeSection === "kelas"
                  ? "font-bold text-white border-b-2 border-white"
                  : ""
              }`}
              onClick={() => handleSectionClick("kelas")}
              href="/kelas"
            >
              Kelas
            </Link>
            <Link
              className={`flex items-center font-semibold justify-center w-full px-6 py-3 transition-all hover:bg-slate-300 text-white ${
                activeSection === "faq"
                  ? "font-bold text-white border-b-2 border-white"
                  : ""
              }`}
              onClick={() => handleSectionClick("faq")}
              href="/faq"
            >
              FAQ
            </Link>
            <Link
              className={`flex items-center font-semibold justify-center w-full px-6 py-3 transition-all hover:bg-slate-300 text-white ${
                activeSection === "syarat&ketentuan"
                  ? "font-bold text-white border-b-2 border-primary"
                  : ""
              }`}
              onClick={() => handleSectionClick("syarat&ketentuan")}
              href="/syarat&ketentuan"
            >
              Syarat & Ketentuan
            </Link>
            <button className="block lg:hidden py-4">
              <Link
                href="/login"
                className=" px-5 py-2 font-semibold bg-secondary text-white rounded-md 
              hover:bg-amber-500 hover:text-white transition-all"
              >
                Daftar Kelas
              </Link>
            </button>
          </div>
        )}
      </nav>
    </>
  ) : null;
};

export default Navbar;
