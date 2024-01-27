"use client";
import React from "react";
import { signOut } from "next-auth/react";

const ButtonLogout = () => {
  const logout = () => signOut({ callbackUrl: "/signin" });
  return (
    <>
      <button
        onClick={logout}
        className='px-5 py-2 font-semibold bg-secondary text-white rounded-md 
        hover:text-white hover:bg-amber-500 transition-all duration-200'
      >
        Logout
      </button>
    </>
  );
};

export default ButtonLogout;
