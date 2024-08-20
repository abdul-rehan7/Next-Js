"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  IoClose,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoFacebook,
} from "react-icons/io5";

const Navbar = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div className="bg-gray-200 px-7 py-4 flex justify-between items-center w-full">
        <div className="font-bold text-2xl">DevInsight</div>
        <div>
          <Link
            href={"/"}
            className="link logo text-xl text-teal-500 font-semibold  lg:block hidden"
          >
            All Blogs
          </Link>
        </div>
        <div className="lg:hidden block">
          <button
            className=" top-4 left-4 text-white p-2 rounded"
            onClick={() => setVisible(false)}
          >
            <div className="burger lg:hidden flex flex-col space-y-1">
              <div className="line bg-black h-1 w-7 rounded-full"></div>
              <div className="line bg-black h-1 w-7 rounded-full"></div>
              <div className="line bg-black h-1 w-7 rounded-full"></div>
            </div>
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 backdrop-blur-sm bg-[#47a9ffa4] z-[100] p-2 px-4 text-white h-full flex  w-[50%] transition-transform duration-500 ${
          visible ? "translate-x-full" : " translate-x-0"
        }`}
      >
        <div className="flex flex-col space-y-6">
          <IoClose
            className="cursor-pointer text-3xl "
            onClick={() => setVisible(true)}
          />

          <div className="flex flex-col space-y-4"></div>
          <a className="link w-[10rem]" href="">
            All Blogs
          </a>
       
        </div>
      </div>

      {/* Button to trigger the navbar from outside */}
    </>
  );
};

export default Navbar;
