import Link from "next/link";
import React from "react";

export default async function Page({ params }) {
  const { categories } = params; // Destructure to get 'categories'
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  console.log(categories); // This should log { categories: 'categoryName' }

  // Fetch data based on category from the API
  const fetchData = await fetch(`${apiUrl}/api/category/${categories}`, {
    cache: "no-store",
  });

  const res = await fetchData.json();

  console.log("API Response:", res);

  return (
    <div className="text-center flex flex-col items-center py-10 space-y-7 lg:px-[15%] px-[7%] p-4">
      <h1 className="lg:text-4xl text-2xl capitalize font-bold">
        {categories}
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {res.item.map((item) => (
          <Link href={`${apiUrl}/item/${item.name}`} key={item.id}>
            <div className="border border-gray-300 p-4">
              <img className="h-[16rem] w-[16rem]" src={item.img} alt="" />
              <div className="data py-4 space-y-2 w-full flex flex-col items-start justify-start ">
                <p className="text-left capitalize font-semibold text-2xl">
                  {" "}
                  {item.name}
                </p>
                <p className=" capitalize text-left text-xs"> {item.desc}</p>
                <p className="text-left">${item.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <p className="lg:text-base text-sm text-justify text-gray-500"></p>
    </div>
  );
}
