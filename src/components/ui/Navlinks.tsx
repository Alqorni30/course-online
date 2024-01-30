import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navlinks = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", name: "Home" },
    { href: "/tentang-kami", name: "Tentang Kami" },
    { href: "/kelas", name: "Kelas" },
    { href: "/mentor", name: "Mentor" },
    { href: "/info-lomba", name: "Info Lomba" },
    
  ];

  return (
    <>
      <div className="lg:flex  text-white hidden ">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={`flex items-center mr-2 font-semibold px-5 py-2 rounded-lg transition-all duration-200 text-white hover:text-slate-200 ${
              pathname === link.href ? "font-bold hover:bg-amber-500 bg-secondary" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navlinks;
