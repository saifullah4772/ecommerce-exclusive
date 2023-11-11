import React from "react";
import { Link } from "react-router-dom";

const Arrival = () => {
  return (
    <section className="pt-12 py-24">
      <div className="container">
        <h5 className="heading">Featured</h5>
        <h3 className="text-3xl font-semibold pb-8">New Arrival</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 h-auto md:h-[450px] lg:h-[600px] gap-4">
          <div className="bg-black h-72 md:h-auto md:row-span-2 md:col-span-2 relative">
            <img
              src="/images/products/playstation5.png"
              alt=""
              className="w-1/2 md:w-4/5 lg:w-2/3 absolute bottom-0 right-3"
            />
            <div className="absolute bottom-4 left-0 p-8 flex flex-col justify-center items-start gap-1 lg:gap-4 text-white">
              <h5 className="font-semibold text-xl lg:text-2xl">
                Playstation 5
              </h5>
              <p className="text-sm lg:text-md">
                Black and White version of the PS5 coming out on sale.
              </p>
              <Link to="/products" className="border-b">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="bg-black h-72 md:h-auto md:row-span-1 md:col-span-2 relative">
            <img
              src="/images/products/woman.png"
              alt=""
              className="w-1/2 md:w-4/5 lg:w-1/2 absolute bottom-0 right-3"
            />
            <div className="absolute bottom-4 left-0 p-8 flex flex-col justify-center items-start gap-1 lg:gap-2 text-white">
              <h5 className="font-semibold text-xl lg:text-2xl">
                Women’s Collections
              </h5>
              <p className="text-sm lg:text-md">
                Featured woman collections that give you another vibe.
              </p>
              <Link to="/products" className="border-b">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="bg-black h-72 md:h-auto relative">
            <img
              src="/images/products/speakers.png"
              alt=""
              className="w-1/3 md:w-4/5 lg:w-3/5 absolute bottom-0 right-3 md:top-1/2 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2"
            />
            <div className="absolute bottom-4 left-0 p-4 lg:p-8 flex flex-col justify-center items-start gap-1 lg:gap-2 text-white">
              <h5 className="font-semibold text-xl lg:text-2xl">Speakers</h5>
              <p className="text-sm lg:text-md">Amazon wireless speakers</p>
              <Link to="/products" className="border-b">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="bg-black h-72 md:h-auto relative">
            <img
              src="/images/products/perfume.png"
              alt=""
              className="w-1/3 md:w-4/5 lg:w-3/5 absolute bottom-0 right-3 md:top-1/2 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2"
            />
            <div className="absolute bottom-4 left-0 p-4 lg:p-8 flex flex-col justify-center items-start gap-1 lg:gap-2 text-white">
              <h5 className="font-semibold text-xl lg:text-2xl">Perfume</h5>
              <p className="text-sm lg:text-md">GUCCI INTENSE OUD EDP</p>
              <Link to="/products" className="border-b">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arrival;
