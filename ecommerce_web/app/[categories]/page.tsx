import React from "react";

export default async function Page({ params }) {
  const category = params;
  const fetchData = await fetch(
    `http://localhost:3000/api/category/${category.categories}`
  );
  const res = await fetchData.json();

  console.log("API Response:", res);

  return (
    <div className="text-center flex flex-col items-center py-10 space-y-7 lg:px-[15%] px-[7%] p-4">
      <h1 className="lg:text-4xl text-2xl capitalize font-bold">
        {res.item[0].category}
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {
        
        res.item.map((item) => (
          <div key={item.name}>{item.name}</div>
        ))
        }
      </div>

      <p className="lg:text-base text-sm text-justify text-gray-500"></p>
    </div>
  );
}
