import React from "react";

export default function Promotion() {
  return (
    <div className="my-7 w-full flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center p-7">
        <span className="heading text-center font-bold lg:text-4xl text-2xl  ">
          Our Promotions
        </span>
        <span className="bg-mymain h-1 w-16 rounded-full"></span>
      </div>
      <div
        className=" flex flex-col items-center justify-center w-full lg:h-[20rem] h-[10rem] bg-cover bg-center bg-no-repeat text-white bg-[#00000094]"
        style={{
          backgroundImage: `url(${"/1.jpg"})`,
          backgroundBlendMode: "overlay",
        }}
      >
        <h1 className="lg:text-4xl text-lg font-bold uppercase"> Get upto  <span className="text-mymain">60%</span> Off </h1>
        <p className="lg:text-base text-[0.6rem]">Flash Sale, Get upto 60% off on season variant</p>
      </div>
    </div>
  );
}
