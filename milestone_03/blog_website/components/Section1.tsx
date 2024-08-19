"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NextResponse } from "next/server";
import data from "@/app/data.json";

export default function Section1() {
  async function GET(request: Request, context: any) {
    const { params } = context;
    const user = data.filter((x) => params.title == x.title);

    return NextResponse.json({ user });
  }

  return (
    <div className="mx-auto lg:px-20 py-10 p-4 ">
      <div className="py-10">
        <h1 className="text-4xl font-bold text-center py-2">Trending</h1>
        <p className=" text-center text-gray-400 ">You Can Scroll The posts</p>
      </div>

      {/* Grid columns */}
      <div className="wrapper">
        {data.map((post) => (
          <Post
            img={post.img}
            key={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  );
}

function Post({ img, title, body }) {
  const LimitedText = ({ text, maxLength }) => {
    const truncatedText =
      text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    return (
      <p className="text-gray-500 text-justify lg:text-base text-sm">
        {truncatedText}
      </p>
    );
  };
  return (
    <div className="card">
      <div className="flex text-left">
        <div className="image transition-all ">
          <Link href={`/posts/${title}`}>
            <Image src={`${img}`} alt="image" width={900} height={900} />
          </Link>
        </div>
        <div className="info flex space-y-4 flex-col py-4 px-4 w-[80%]">
          <div className="cat ">
            <Link
              className="text-teal-500 hover:text-teal-700"
              href={`/posts/${title}`}
            >
              Business, Travel
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-700"
              href={`/posts/${title}`}
            >
              Aug 17, 2024
            </Link>
          </div>
          <h1 className="lg:text-3xl text-lg  font-bold w-full ">
            <Link href={`/posts/${title}`}>{title}</Link>
          </h1>

          <LimitedText text={body} maxLength={350} />
        </div>
      </div>
    </div>
  );
}
