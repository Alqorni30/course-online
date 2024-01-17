import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navlinks = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", name: "Home" },
    { href: "/kelas", name: "Kelas" },
    { href: "/testimonial", name: "Testimonial" },
    { href: "/faq", name: "FAQ" },
    { href: "/syarat&ketentuan", name: "Syarat & ketentuan" },
  ];

  return (
    <>
      <div className="lg:flex  text-white hidden ">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={`flex items-center mr-2 font-semibold px-5 py-2 rounded-lg transition-all hover:text-gray-100 duration-200 text-white ${
              pathname === link.href ? "font-bold  bg-secondary text-white" : ""
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
