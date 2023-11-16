"use client";

import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [bgChange, setBgchange] = useState(false);
  useEffect(() => {
    const changeNavbarBg = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY >= 80) {
          setBgchange(true);
        } else {
          setBgchange(false);
        }
      }
    };

    // Add event listener only if window is defined
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", changeNavbarBg);

      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener("scroll", changeNavbarBg);
      };
    }
  }, []); // Ensure this effect runs only on initial mount
  
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
