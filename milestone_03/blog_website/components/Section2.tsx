import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Section2() {
  return (
    <div className="mx-auto lg:px-20 py-10 p-4">
      <h1 className="text-4xl font-bold text-center py-10">Latest Posts</h1>

      {/* gird coloumns */}
      <div className="grid grid-rows-2 lg:grid-cols-3  gap-12">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

function Post() {
  return (
    <div className="item">
      <div className="image">
        <Link href={"/"}>
          <Image src="/imgs/img1.jpg" alt="image" width={400} height={200} />
        </Link>
      </div>
      <div className="info flex flex-col  p-2 ">
        <div className="cat w-full">
          <Link className="text-teal-500 hover:text-teal-700" href={"/"}>
            Businss, Travel{" "}
          </Link>
          <Link className="text-gray-500 hover:text-gray-700" href={"/"}>
            Aug 17, 2024{" "}
          </Link>
        </div>
        <h1 className="text-base font-bold w-full ">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
        <p className="text-gray-500">
            Lorem ipsum dolor sit amet consequuntur magni! Magnam quis aspernatur atque adipisci, similique itaque explicabo cum! Eaque velit delectus molestias sint!
        </p>
      </div>
    </div>
  );
}
