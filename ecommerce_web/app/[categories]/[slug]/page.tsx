import React from "react";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";


export default async function Page({ params }) {
  const { slug } = params.slug; // Destructure to get 'categories'
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  console.log(params);

  const fetchData = await fetch(`${apiUrl}/api/item/${params.slug}`, {
    cache: "no-store",
  });
  const res = await fetchData.json();
  console.log("API Response:", res);

  return (
    <>
      <Link  href={`/${res.item[0].category}`} className="back lg:mt-7 bg  flex space-x-3 items-center"><IoIosArrowBack/> Back</Link>
      <div className="text-center flex flex-col lg:flex-row lg:justify-evenly items-center py-10  lg:px-[15%]  ">
        <div>
          <Image
            className="border border-gray-300"
            src={res.item[0].img}
            alt={res.item[0].name}
            width={600}
            height={600}
          ></Image>
        </div>
        <div className="flex flex-col lg:px-[7%] lg:py-0 py-[7%] items-start w-full space-y-[4%] lg:space-y-[10%]">
          <h1 className="lg:text-4xl text-2xl capitalize font-bold">
            {res.item[0].name}
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            ${res.item[0].price}
          </div>

          <p className="lg:text-base capitalize text-sm text-justify text-gray-500">
            {res.item[0].desc}
          </p>
          <div className="btns flex space-x-5">
            <button className="px-4 py-2 border border-gray-400 text-xs hover:bg-mymain transition-all  active:bg-gray-300">Buy Now</button>
            <button className="px-4 py-2 border border-gray-400 text-xs hover:bg-mymain transition-all  active:bg-gray-300">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
