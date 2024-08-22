"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { IoBag } from "react-icons/io5";

export function Imageslider() {
  const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    
  ];
  return (
    <ImagesSlider className="lg:h-[80vh] h-[40vh]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center lg:w-[60%] w-[80%] items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-white text-center  lg:py-4">
          Futuristic Clothes
        </motion.p>
        <motion.p className="font-medium text-xs md:text-3xl text-white text-center  lg:py-4 py-2">
          Upgrade Your wardrobe with sleek and stylish Apparels and Top Notch
          Shoes
        </motion.p>
        <button className=" border group border-white hover:border-mymain hover:rounded-full transition-all px-4 py-2 text-white mx-auto text-center  rounded-sm relative lg:mt-4 mt-2">
          <span className="flex items-center lg:text-base text-xs">
            <IoBag className="mx-2 group-hover:text-mymain transition-all group-hover:animate-bounce  lg:text-xl text-base" /> Shop Now{" "}
          </span>
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
