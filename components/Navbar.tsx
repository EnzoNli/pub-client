import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full z-10 fixed">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
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
    </header>
  );
};

export default Navbar;
