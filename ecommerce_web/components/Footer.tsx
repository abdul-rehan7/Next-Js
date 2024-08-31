import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaShoppingBag,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <footer className="footer text-base-content p-10 border-t border-mywhite">
        <nav>
          <h6 className="uppercase font-bold text-mymain mb-[0.5rem] ">
            Services
          </h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="uppercase font-bold text-mymain mb-[0.5rem]">
            Company
          </h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="uppercase font-bold text-mymain mb-[0.5rem]">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center ">
        <Image width={40} height={40} src="/logo.png" alt="logo" />

          <p className="flex">
            ShopSavvy.com
            <br />
            Shop Smart, Save Big
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end justify-self-center">
          <div className="grid text-2xl grid-flow-col gap-4">
            <Link className="hover:text-blue-500 transition-all" href={""}>
              <FaTwitter />
            </Link>
            <Link className="hover:text-purple-800 transition-all" href={""}>
              <FaInstagram />
            </Link>
            <Link className="hover:text-blue-700 transition-all" href={""}>
              <FaFacebookF />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
}
