import React from "react";

const Hero = ({title,para}:{title:string,para:string}) => {
  return (
    <div className="w-full space-y-7 flex lg:space-y-5 h-[100vh] p-5 py-10 bg-green-400 flex-col lg:justify-center items-center lg:space-x-4">
      <h1 className="lg:text-6xl text-5xl font-bold">{title}</h1>
      <h1 className="text-xl lg:text-center lg:w-[80%]">{para}</h1>
    </div>
  );
};

export default Hero;
