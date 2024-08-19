import React from "react";

export default async function Page({ params }) {
  const { title } = params;
  const fetchData = await fetch(`http://localhost:3000/api/posts/${title}`);
  const res = await fetchData.json();
  return (
    <div className="text-center flex flex-col items-center py-10 space-y-7 lg:px-[15%] px-[7%] p-4">
      <h1 className="lg:text-4xl text-2xl font-bold">{res.user[0].title}</h1>
      <img
        src={res.user[0].img}
        className="lg:w-[70vw]  lg:h-[80vh] w-full h-[40vh]"
        alt=""
      />
      <p className="lg:text-base text-sm text-justify text-gray-500">
        {res.user[0].body}
      </p>
    </div>
  );
}
