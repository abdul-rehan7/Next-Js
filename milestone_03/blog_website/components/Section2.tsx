"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NextResponse } from "next/server";
import data from "@/app/data.json";

export default function Section2() {
  async function GET(request: Request, context: any) {
    const { params } = context;
    const user = data.filter((x) => params.title == x.title);

    return NextResponse.json({ user });
  }

  return (
    <div className="mx-auto lg:px-20 py-10 p-4">
      <h1 className="text-4xl font-bold text-center py-10">Latest Posts</h1>

      {/* Grid columns */}
      <div className="grid grid-rows-2 lg:grid-cols-3 gap-12">
        {data.map((post) => (
          <Post img={post.img} key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
}

function Post({ img, title, body }) {
  return (
    <div className="item">
      <div className="image hover:p-2 transition-all ">
        <Link href={`/posts/${title}`}>
          <Image src={`${img}`} alt="image" width={400} height={400} />
        </Link>
      </div>
      <div className="info flex space-y-2 flex-col p-2">
        <div className="cat w-full">
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
        <h1 className="text-base font-bold w-full">{title}</h1>
        <p className="text-gray-500 text-justify lg:text-base text-sm">
          {body}
        </p>
      </div>
    </div>
  );
}

