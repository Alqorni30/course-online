"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";
import { BsClipboardData } from "react-icons/bs";
import { FiDatabase } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white p-3 duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 border-r border-black ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/">
          <h2 className="font-bold text-2xl">Anak Bisnis</h2>
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block text-black lg:hidden "
        >
          <IoMenu />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-md font-semibold text-bodydark2">
              Home
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <Link
                href="/admin"
                className={`flex items-center gap-2.5 rounded-sm py-2 px-4 font-md text-black duration-300 ease-in-out hover:bg-secondary ${
                  pathname.includes("admin") && "bg-gray-300"
                }`}
              >
                <LuLayoutDashboard />
                Dashboard
              </Link>
              {/* <!-- Menu Item Dashboard --> */}
            </ul>
          </div>

          
          <div>
            <h3 className="mb-4 ml-4 text-md font-semibold text-bodydark2">
              Data
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              <Link
                href="/data-user"
                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-secondary ${
                  pathname.includes("data-user") && "bg-gray-300"
                }`}
              >
                <FiDatabase />
                Data User
              </Link>
              <Link
                href="/admin"
                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-secondary ${
                  pathname.includes("data-kelas") && "bg-gray-300"
                }`}
              >
                <FiDatabase />
                Data Kelas
              </Link>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 ml-4 text-md font-semibold text-bodydark2">
              Transaksi
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              <Link
                href="/admin"
                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-secondary ${
                  pathname.includes("dashboard") && "bg-gray-300"
                }`}
              >
                <BsClipboardData />
                Pendaftaran
              </Link>
              <Link
                href="/admin"
                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-secondary ${
                  pathname.includes("dashboard") && "bg-gray-300"
                }`}
              >
                <BsClipboardData />
                Pembayaran
              </Link>
            </ul>
          </div>

          {/* <!-- Others Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-md font-semibold text-bodydark2">
              Aksi
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Chart --> */}
              <li>
                <Link
                  href="/"
                  className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-secondary"
                >
                  <IoLogOutOutline className="text-xl" />
                  Logout
                </Link>
              </li>
              {/* <!-- Menu Item Chart --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
