"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the API route
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setData(data[0]); // Set the first post's data
        }
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Optional: Handle the loading state
  }

  return (
    <div className="h-auto">
      <Item id={data.id} title={data.title} body={data.body} />
    </div>
  );
}

function Item({ id, title, body }) {
  return (
    <div className="page flex flex-col items-center space-y-7 py-7 bg-blue-500 px-[7%] lg:px-[14%]">
      <h1 className="text-3xl lg:text-5xl font-bold text-center">{title}</h1>
      <Link href="/">
        <Image src="/imgs/img1.jpg" alt="image" width={400} height={400} />
      </Link>
      <p className="text-justify">{body}</p>
    </div>
  );
}
