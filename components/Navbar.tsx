"use client";

import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import { useState } from "react";

const Navbar = () => {
  const [bgChange, setBgchange] = useState(false);
  const changeNavbarBg = () => {
    if (window.scrollY >= 80) {
      setBgchange(true);
    } else {
      setBgchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarBg);

  return (
    <header className="w-full z-10 fixed">
      <div
        className={
          bgChange
            ? "w-full bg-white shadow transition-all duration-200"
            : "w-full transition-all duration-200"
        }
      >
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
          <Link
            href="/"
            onClick={() => window.location.reload()}
            className="flex justify-center items-center"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={230}
              height={49}
              className="object-contain"
            />
          </Link>

          <CustomButton
            title="Connectez-vous"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] transition ease-in-out hover:bg-primary-blue hover:text-white duration-300"
          />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
