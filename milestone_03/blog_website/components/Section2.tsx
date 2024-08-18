"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Section2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API route
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="mx-auto lg:px-20 py-10 p-4">
      <h1 className="text-4xl font-bold text-center py-10">Latest Posts</h1>

      {/* Grid columns */}
      <div className="grid grid-rows-2 lg:grid-cols-3 gap-12">
        {data.map((post) => (
          <Post
            id={post.id}
            key={post.id}
            img={post.img}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  );
}

function Post({ id, title, body, img }) {
  return (
    <div className="item">
      <div className="image">
        <Link href={`/posts/${id}`}>
          <Image src={img} alt="image" width={400} height={400} />
        </Link>
      </div>
      <div className="info flex flex-col p-2">
        <div className="cat w-full">
          <Link
            className="text-teal-500 hover:text-teal-700"
            href={`/posts/${id}`}
          >
            Business, Travel
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-700"
            href={`/posts/${id}`}
          >
            Aug 17, 2024
          </Link>
        </div>
        <h1 className="text-base font-bold w-full">{title}</h1>
        <p className="text-gray-500">{body}</p>
      </div>
    </div>
  );
}
