import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
export default function Services() {
  const servicesData = [
    {
      id: 1,
      img: <TbTruckDelivery />,
      name: "Free Delivery",
      desc: "Free Delivery On Order Above $1000",
    },
    {
      id: 2,
      img: <RiCustomerService2Fill />,
      name: "24/7 Customer Service",
      desc: "For Queries and Questions Fell Free to Contact",
    },
    {
      id: 3,
      img: <GiTakeMyMoney />,
      name: "Money Back Guarantee",
      desc: "Get Money Back Guarantee on Damaged Products",
    },
  ];
  return (
    <div className="my-7">
      <div className="flex flex-col justify-center items-center p-7">
        <span className="heading text-center font-bold lg:text-4xl text-2xl  ">
          Services
        </span>
        <span className="bg-mymain h-1 w-16 rounded-full"></span>
      </div>

      <div className="w-full lg:px-10 px-5 py-4 flex flex-col lg:flex-row lg:space-x-10 lg:space-y-0 space-y-10 lg:justify-between lg:items-center">
        {servicesData.map((item) => (
          <div
            key={item.id}
            className="group space-y-1 cursor-pointer flex lg:w-[20rem] w-[15rem] flex-col justify-center lg:py-4 self-center items-center text-center "
          >
            <div className="lg:text-7xl text-6xl ">{item.img}</div>
            <div className="font-semibold lg:text-xl text-base group-hover:text-mymain transition-colors">
              {item.name}
            </div>
            <div className="lg:text-base text-xs transition-colors">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
