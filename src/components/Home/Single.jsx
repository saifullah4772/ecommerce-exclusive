import React from "react";
import { Link } from "react-router-dom";

const Single = () => {
  return (
    <section className="pb-16">
      <div className="container">
        <div className="flex justify-between flex-col-reverse md:flex-row items-center md:h-[400px] text-white bg-black rounded-white">
          <div className="flex-1 p-12 pb-8 flex justify-start items-start gap-4 lg:gap-6 flex-col h-full">
            <h3 className="text-green-400 font-bold">Categories</h3>
            <h2 className="text-2xl lg:text-4xl lg:w-1/2 font-semibold">
              Enhance Your Music Experience
            </h2>
            <div className="flex justify-start items-center gap-4">
              <span className="w-16 lg:w-20 aspect-square bg-neutral-100 text-black flex flex-col rounded-full justify-center items-center text-sm">
                <span>23</span> <span>Hours</span>
              </span>
              <span className="w-16 lg:w-20 aspect-square bg-neutral-100 text-black flex flex-col rounded-full justify-center items-center text-sm">
                <span>05</span> <span>Days</span>
              </span>
              <span className="w-16 lg:w-20 aspect-square bg-neutral-100 text-black flex flex-col rounded-full justify-center items-center text-sm">
                <span>59</span> <span>Minutes</span>
              </span>
              <span className="w-16 lg:w-20 aspect-square bg-neutral-100 text-black flex flex-col rounded-full justify-center items-center text-sm">
                <span>35</span> <span>Seconds</span>
              </span>
            </div>
            <Link
              to="/products"
              className="bg-green-500 p-4 px-8 font-bold rounded-sm"
            >
              Buy Now
            </Link>
          </div>
          <div className="flex-1 flex justify-center items-center h-full z-50 pt-12 md:pt-0">
            <img
              src="/images/products/music-player.png"
              alt=""
              className="w-4/5 h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Single;
