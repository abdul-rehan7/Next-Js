import React from "react";
import { IoCart } from "react-icons/io5";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar">
      {/* ================ MOBILE VIEW ================ */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100  border-black  z-[1] mt-3 w-52 p-2 shadow-white shadow-sm"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={""}>Women</Link>
              <ul className="p-2">
                <li>
                  <Link href={""}>Tops</Link>
                </li>
                <li>
                  <Link href={""}>Pants</Link>
                </li>
                <li>
                  <Link href={""}>Accessories/Jewelery</Link>
                </li>
                <li>
                  <Link href={""}>Shoes</Link>
                </li>
              </ul>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <Link href={"/"} className="py-2 px-4 font-semibold text-xl">
          ShopSavvy
        </Link>
      </div>

      {/* ================ DESKTOP VIEW ================ */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 py-0">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <details className="z-[100]">
              <summary>Women</summary>
              <ul className="p-2 rounded-none">
                <li>
                  <Link className="rounded-none" href={"#"}>
                    Tops
                  </Link>
                </li>
                <li>
                  <Link className="rounded-none" href={"#"}>
                    Pants
                  </Link>
                </li>
                <li>
                  <Link className="rounded-none" href={"#"}>
                    Accessories/Jewelery
                  </Link>
                </li>
                <li>
                  <Link className="rounded-none" href={"#"}>
                    Shoes
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href={"/"} className="relative p-2 text-2xl">
          <IoCart />

          <div className=" absolute top-0 right-0 count p-1 h-5 w-5 bg-myred text-white rounded-full text-xs flex justify-center items-center">
            0
          </div>
        </Link>
      </div>
    </div>
  );
}
