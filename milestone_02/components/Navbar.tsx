import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-black p-7 flex space-x-4 justify-center items-center">
      <Link className="text-white hover:text-gray-300" href={"/"}>
        Home
      </Link>
      <Link className="text-white hover:text-gray-300" href={"/services"}>
        Services
      </Link>
      <Link className="text-white hover:text-gray-300" href={"/about"}>
        About
      </Link>
      <Link className="text-white hover:text-gray-300" href={"/contact"}>
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
