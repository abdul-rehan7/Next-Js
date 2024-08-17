import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Section1() {
  return (
    <section className="py-16">
      <div className="mx-auto md:px-20">
        <h1 className="font-bold text-center text-4xl pb-12">Trending</h1>
        <Slide /> {/* Ensure Slide is used here */}
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="grid lg:grid-cols-2">
      <div className="image">
        <Link href={'/'}>
          <Image src="/imgs/img1.jpg" alt="image" width={400} height={400} />
        </Link>
      </div>
      <div></div>
    </div>
  );
}
