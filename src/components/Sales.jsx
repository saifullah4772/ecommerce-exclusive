import React from "react";
import { Link } from "react-router-dom";

const Sales = () => {
  return (
    <>
      <section className="p-3 bg-black text-white">
        <div className="container">
          <div className="flex flex-col gap-3 sm:flex-row mx-auto justify-between items-center lg:w-4/5 text-sm">
            <p className="sm:w-4/5">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <Link to="/products" className="underline sm:w-1/5 self-start">
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sales;
