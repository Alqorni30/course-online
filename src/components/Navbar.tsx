"use client";
import { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo/Logo Anak Bisnis Update Putih.png";

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
    const handleScroll = () => {
      changeBackgroundColor();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          changeColor
            ? "bg-gradient-to-r from-sky-600 to-cyan-400"
            : "backdrop-blur-md"
        } w-full shadow-md fixed z-20 lg:py-1 py-2`}
      >
        <div className="max-w-7xl container mx-auto flex justify-between items-center lg:py-1 py-3  lg:px-16 px-8 gap-5">
          <div className="flex text-white gap-2 font-bold lg:py-2 md:py-2 py-1">
            <Link
              href="/"
              className="lg:flex justify-center items-center"
            >
              <Image src={logo} width={170} height={50} alt="Logo" 
              className="lg:w-[170px] lg:h-[50px] w-[100px] h-[30px]"/>
            </Link>
          </div>
          <div className="lg:flex  text-white hidden ">
            <Link
              href="/"
              className={`flex items-center mr-2 font-semibold px-5 py-2 rounded-lg transition-all hover:text-white duration-200 text-black ${
                activeSection === "home"
                  ? "font-bold text-primary bg-teal-500 text-white"
                  : ""
              }`}
              onClick={() => handleSectionClick("home")}
            >
              Home
            </Link>
            
            <Link
              href="/kelas"
              className={`flex items-center mr-2 font-semibold px-5 py-2 rounded-lg transition-all hover:text-white  text-black ${
                activeSection === "kelas"
                  ? "font-bold text-primary bg-teal-500 text-white"
                  : ""
              }`}
              onClick={() => handleSectionClick("kelas")}
            >
              Kelas
            </Link>
            <Link
              href="/testimonial"
              className={`flex items-center mr-2 font-semibold  px-5 py-2 rounded-lg transition-all duration-200 hover:text-white text-black ${
                activeSection === "testimonial"
                  ? "font-bold text-primary bg-teal-500 text-white"
                  : ""
              }`}
              onClick={() => handleSectionClick("testimonial")}
            >
              Testimonial
            </Link>
            <Link
              href="/faq"
              className={`flex items-center mr-2 font-semibold  px-5 py-2 rounded-lg transition-all hover:text-white  text-black ${
                activeSection === "faq"
                  ? "font-bold text-primary bg-teal-500 text-white"
                  : ""
              }`}
              onClick={() => handleSectionClick("faq")}
            >
              FAQ
            </Link>
            <Link
              href="/syaratketen"
              className={`flex items-center mr-2 font-semibold  px-5 py-2 rounded-lg transition-all hover:text-white  text-black ${
                activeSection === "syaratketen"
                  ? "font-bold text-primary bg-teal-500 text-white"
                  : ""
              }`}
              onClick={() => handleSectionClick("syaratketen")}
            >
              Syarat & Ketentuan
            </Link>
          </div>
          <button className="hidden lg:block">
            <Link
              href="/login"
              className=" px-5 py-2 border-2 font-semibold border-teal-500 text-black rounded-md 
              hover:bg-teal-500 hover:text-white transition-all duration-200"
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

        {menuOpen && (
          <div className="lg:hidden  flex justify-center items-center flex-col text-black gap-2.5">
            <Link
              href="/"
              className={`flex items-center font-semibold justify-center w-full px-6 py-3 transition-all hover:bg-white text-black ${
                activeSection === "home"
                  ? "font-bold text-primary font-primary border-b-2 border-primary"
                  : ""
              }`}
              onClick={() => handleSectionClick("home")}
            >
              Home
            </Link>
            <Link
              href="/promo"
              className={`flex items-center font-semibold justify-center w-full px-6 py-3 transition-all hover:bg-white text-black ${
                activeSection === "promo"
                  ? "font-bold text-primary font-primary border-b-2 border-primary"
                  : ""
              }`}
              onClick={() => handleSectionClick("promo")}
            >
              Promo
            </Link>
            <Link
              className={`flex items-center font-semibold justify-center w-full px-6 py-3 transition-all hover:bg-white text-black ${
                activeSection === "kelas"
                  ? "font-bold text-primary font-primary border-b-2 border-primary"
                  : ""
              }`}
              onClick={() => handleSectionClick("kelas")}
              href="/kelas"
            >
              Kelas
            </Link>
            <Link
              className={`flex items-center font-semibold justify-center w-full px-6 py-3 transition-all hover:bg-white text-black ${
                activeSection === "faq"
                  ? "font-bold text-primary font-primary border-b-2 border-primary"
                  : ""
              }`}
              onClick={() => handleSectionClick("faq")}
              href="/faq"
            >
              FAQ
            </Link>
            <Link
              className={`flex items-center font-semibold justify-center w-full px-6 py-3 transition-all hover:bg-white text-black ${
                activeSection === "syaratketen"
                  ? "font-bold text-primary font-primary border-b-2 border-primary"
                  : ""
              }`}
              onClick={() => handleSectionClick("syaratketen")}
              href="/syaratketen"
            >
              Syarat & Ketentuan
            </Link>
            <button className="block lg:hidden py-4">
              <Link
                href="/login"
                className=" px-5 py-2 border-2 font-semibold border-teal-500 text-black rounded-md 
              hover:bg-teal-500 hover:text-white transition-all"
              >
                Login
              </Link>
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
