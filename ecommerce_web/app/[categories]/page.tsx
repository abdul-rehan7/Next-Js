import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

export default function page() {
  return (
    <div className="p-4">
      <h1 className="font-bold text-4xl text-center py-5 pb-10">Tops</h1>

      <div className=" grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-7 ">
        {items.map((item) => (
          <Link href={`/${item.category}/${item.name}`}>
            <div
              key={item.name}
              className="relative p-3 border border-gray-300  flex flex-col items-center group cursor-pointer overflow-hidden"
            >
              <Image
                className="h-[80%] w-full transition-all "
                src={item.img}
                alt=""
                height={150}
                width={250}
              />
              <div className="text-left py-2 flex flex-col space-y-3  w-full">
                <h1 className="font-bold ">{item.name}</h1>
                <h1 className=" font-medium">${item.price}</h1>
              </div>
              <div className="flex w-full justify-between ">
                <button className="bg-mymain active:bg-gray-100  hover:bg-white flex items-center space-x-2 rounded-xl hover:text-black text-white transition-all px-3 py-2 my-2">
                  <FaHeart /> <p>Buy Now</p>
                </button>
                <button className="bg-mymain active:bg-gray-100 hover:bg-white flex items-center space-x-2 rounded-xl hover:text-black text-white transition-all px-3  py-2 my-2">
                  <FaShoppingCart /> <p>Add to Cart</p>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const items = [
  {
    name: "Shirt",
    category: "tops",
    img: "/cat/shoe.jpg",
    price: 120,
  },
  {
    name: "Shirt",
    category: "tops",
    img: "/cat/shoe.jpg",
    price: 120,
  },
  {
    name: "Shirt",
    category: "tops",
    img: "/cat/shoe.jpg",
    price: 120,
  },
  {
    name: "Shirt",
    category: "tops",
    img: "/cat/shoe.jpg",
    price: 120,
  },
  {
    name: "Shirt",
    category: "tops",
    img: "/cat/shoe.jpg",
    price: 120,
  },
  {
    name: "Shirt",
    category: "tops",
    img: "/cat/shoe.jpg",
    price: 120,
  },
  {
    name: "Shirt",
    category: "tops",
    img: "/cat/shoe.jpg",
    price: 120,
  },
  {
    name: "Shirt",
    category: "tops",
    img: "/cat/shoe.jpg",
    price: 120,
  },
  {
    name: "Shirt",
    category: "tops",
    img: "/cat/shoe.jpg",
    price: 120,
  },
];
