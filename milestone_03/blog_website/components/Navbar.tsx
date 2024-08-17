"use client";
import React, { useState } from "react";
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
      <div className="bg-gray-200 px-6 py-4 flex justify-evenly items-center w-full">
        <div>
          <input
            className="py-2 px-3 rounded-full"
            type="search"
            placeholder="Search..."
          />
        </div>
        <div className="logo text-2xl font-bold  lg:block hidden">Blogger</div>
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
        <div className="lg:flex hidden text-gray-400 space-x-5 p-2">
          <IoLogoYoutube />
          <IoLogoFacebook />
          <IoLogoTwitter />
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 bg-green-500 z-[100] p-2 px-4 text-white h-full flex  w-[50%] transition-transform duration-500 ${
          visible ? "translate-x-full" : " translate-x-0"
        }`}
      >
        <div className="flex flex-col space-y-6">
          <IoClose className="text-3xl " onClick={() => setVisible(true)} />

          <div className="flex flex-col space-y-4"></div>
          <a className="link w-[10rem]" href="">
            Home
          </a>
          <a className="link w-[10rem]" href="">
            Home
          </a>
          <a className="link w-[10rem]" href="">
            Home
          </a>
          <a className="link w-[10rem]" href="">
            Home
          </a>
        </div>
      </div>

      {/* Button to trigger the navbar from outside */}
    </>
  );
};

export default Navbar;
