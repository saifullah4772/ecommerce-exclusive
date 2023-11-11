import React from "react";
import { BsShopWindow, BsFillHandbagFill } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import { TbMoneybag } from "react-icons/tb";

const Activity = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 cursor-pointer">
          <div className="aspect-square flex flex-col hover:shadow-xl duration-500 transition-all gap-6 justify-center items-center border border-neutral-400 rounded-md">
            <span className="w-12 h-12 bg-black flex justify-center items-center text-white rounded-full shadow-[0px_0px_0px_8px_rgba(0,0,0,0.2)]">
              <BsShopWindow size={25} />
            </span>

            <h4 className="text-4xl font-bold">10.5k</h4>
            <p>Sallers active in our site</p>
          </div>
          <div className="aspect-square rounded-md shadow-lg shadow-neutral-400 hover:shadow-xl duration-500 transition-all  text-white bg-gajjar flex flex-col gap-6 justify-center items-center">
            <span className="w-12 h-12 bg-white flex justify-center items-center text-black rounded-full shadow-[0px_0px_0px_8px_rgba(255,255,255,0.3)]">
              <AiOutlineDollar size={30} />
            </span>

            <h4 className="text-4xl font-bold">33k</h4>
            <p>Monthly Product Sale</p>
          </div>
          <div className="aspect-square flex flex-col hover:shadow-xl duration-500 transition-all  gap-6 justify-center items-center border border-neutral-400 rounded-md">
            <span className="w-12 h-12 bg-black flex justify-center items-center text-white rounded-full shadow-[0px_0px_0px_8px_rgba(0,0,0,0.2)]">
              <BsFillHandbagFill size={25} />
            </span>

            <h4 className="text-4xl font-bold">45.5k</h4>
            <p>Customer active in our site</p>
          </div>
          <div className="aspect-square flex flex-col hover:shadow-xl duration-500 transition-all  gap-6 justify-center items-center border border-neutral-400 rounded-md">
            <span className="w-12 h-12 bg-black flex justify-center items-center text-white rounded-full shadow-[0px_0px_0px_8px_rgba(0,0,0,0.2)]">
              <TbMoneybag size={25} />
            </span>

            <h4 className="text-4xl font-bold">25k</h4>
            <p>Annual gross sale in our site</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
