import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Categories() {
  return (
    <div className="my-7">
      <div className="flex flex-col justify-center items-center p-7">
        <span className="heading text-center font-bold lg:text-4xl text-2xl  ">
          Categories
        </span>
        <span className="bg-mymain h-1 mt-2 w-20 rounded-full"></span>
      </div>
      {/* CATOGERIES HERE */}
      <div className="content">
        <div className=" grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-7 ">
          {categories.map((item) => (
            <Link key={item.name} href={`/${item.category}`}>
              <div
                key={item.name}
                className="relative group cursor-pointer overflow-hidden"
              >
                <Image
                  className="hover:scale-110 h-[16rem] transition-all "
                  src={item.img}
                  alt=""
                  height={150}
                  width={250}
                />
                <div className="name absolute text-white bg-[#0000005a] w-full group-hover:bottom-0 text-center text-2xl font-bold uppercase  transition-all lg:-bottom-24 bottom-0 ">
                  {item.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export const categories = [
  {
    name: "top",
    img: "/cat/top.jpg",
    category: "tops",
  },
  {
    name: "bottom",
    img: "/cat/pant.jpg",
    category: "bottom",
  },
  {
    name: "accessories",
    img: "/cat/jewel.jpg",
    category: "accessories",
  },
  {
    name: "shoes",
    img: "/cat/shoe.jpg",
    category: "shoes",
  },
];
