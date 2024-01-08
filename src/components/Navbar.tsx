"use client";
import { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
// import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [changeColor, setchangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setchangeColor(true);
    } else {
      setchangeColor(false);
    }
  };
  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`${
          changeColor ? "bg-white" : "bg-transparent"
        } w-full shadow-md fixed z-20 `}
      >
        <div
          className=" max-w-7xl container mx-auto flex justify-between items-center lg:px-20 px-8 gap-5"
        >
          <div className="flex text-white gap-2 font-bold py-5">
            {/* <Image
              src="/"
              width={72}
              height={37}
              alt="Logo"
            /> */}
            <Link href="/" className="lg:flex justify-center items-center">
              <h5 className="text-black font-bold text-lg ">Course Online.</h5>
            </Link>
          </div>
          <div className="lg:flex  text-white hidden p-5">
            <Link
              href="/"
              className={`flex items-center mr-2 font-semibold px-5 py-2 rounded-lg transition-all hover:bg-hover text-black ${
                activeSection === "home"
                  ? "font-bold text-primary bg-blue-800 text-white"
                  : ""
              }`}
              onClick={() => handleSectionClick("home")}
            >
              Home
            </Link>
            <Link
              href="#challenges"
              className={`flex items-center mr-2 font-semibold  px-5 py-2 rounded-lg transition-all hover:bg-hover text-black ${
                activeSection === "challenges"
                  ? "font-bold text-primary bg-blue-800 text-white"
                  : ""
              }`}
              onClick={() => handleSectionClick("challenges")}
            >
              Promo
            </Link>
            <Link
              href="/kelas"
              className={`flex items-center mr-2 font-semibold px-5 py-2 rounded-lg transition-all hover:bg-hover text-black ${
                activeSection === "kelas"
                  ? "font-bold text-primary bg-blue-800 text-white"
                  : ""
              }`}
              onClick={() => handleSectionClick("kelas")}
            >
              Kelas
            </Link>
            <Link
              href="#goals"
              className={`flex items-center mr-2 font-semibold  px-5 py-2 rounded-lg transition-all hover:bg-hover text-black ${
                activeSection === "goals"
                  ? "font-bold text-primary bg-blue-800 text-white"
                  : ""
              }`}
              onClick={() => handleSectionClick("goals")}
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className={`flex items-center mr-2 font-semibold  px-5 py-2 rounded-lg transition-all hover:bg-hover text-black ${
                activeSection === "contact"
                  ? "font-bold text-primary bg-blue-800 text-white"
                  : ""
              }`}
              onClick={() => handleSectionClick("contact")}
            >
              Syarat & Ketentuan
            </Link>
          </div>
          <button className="hidden lg:block">
            <Link
              href="/login"
              className=" px-5 py-2 border-2 border-black text-black rounded-md 
              hover:bg-blue-500 hover:text-white transition-all"
            >
              Login
            </Link>
          </button>
          <button className="text-black lg:hidden" onClick={toggleMenu}>
            {menuOpen ? (
              /* Menampilkan tombol tutup (X) saat menu terbuka */
              <AiOutlineClose className="text-2xl" />
            ) : (
              /* Menampilkan tombol hamburger saat menu tertutup */
              <RiMenu3Fill className="text-2xl" />
            )}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="lg:hidden flex justify-center items-center pt-20 pb-10 flex-col text-black gap-2.5">
          <Link
            href="#about"
            className={`flex items-center  justify-center w-full px-6 py-3 transition-all hover:bg-hover text-black ${
              activeSection === "about"
                ? "font-bold text-primary font-primary border-b-2 border-primary"
                : ""
            }`}
            onClick={() => handleSectionClick("about")}
          >
            Home
          </Link>
          <Link
            href="#challenges"
            className={`flex items-center  justify-center w-full px-6 py-3 transition-all hover:bg-hover text-black ${
              activeSection === "challenges"
                ? "font-bold text-primary font-primary border-b-2 border-primary"
                : ""
            }`}
            onClick={() => handleSectionClick("challenges")}
          >
            Promo
          </Link>
          <Link
            className={`flex items-center justify-center w-full px-6 py-3 transition-all hover:bg-hover text-black ${
              activeSection === "solutions"
                ? "font-bold text-primary font-primary border-b-2 border-primary"
                : ""
            }`}
            onClick={() => handleSectionClick("solutions")}
            href="#solutions"
          >
            Kelas
          </Link>
          <Link
            className={`flex items-center justify-center w-full px-6 py-3 transition-all hover:bg-hover text-black ${
              activeSection === "goals"
                ? "font-bold text-primary font-primary border-b-2 border-primary"
                : ""
            }`}
            onClick={() => handleSectionClick("goals")}
            href="#goals"
          >
            FAQ
          </Link>
          <Link
            className={`flex items-center  justify-center w-full px-6 py-3 transition-all hover:bg-hover text-black ${
              activeSection === "contact"
                ? "font-bold text-primary font-primary border-b-2 border-primary"
                : ""
            }`}
            onClick={() => handleSectionClick("contact")}
            href="#contact"
          >
            Syarat & ketentuan
          </Link>
          <button className="block lg:hidden">
            <Link
              href="/login"
              className=" px-5 py-2 border-2 border-black text-black rounded-md 
              hover:bg-blue-500 hover:text-white transition-all"
            >
              Login
            </Link>
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
