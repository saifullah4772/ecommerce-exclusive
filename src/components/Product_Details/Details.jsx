import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { PiArrowsCounterClockwise } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";

const Details = () => {
  const [mainImage, setMainImage] = useState("main-gamepad.png");
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="container">
      <div className="flex justify-start items-center gap-4 text-neutral-400">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Contact</span>
        <span>/</span>
        <span className="text-neutral-900">Havic HV G-92 Gamepad</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-12 lg:gap-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-4 w-full">
          <div className="grid grid-cols-4 col-span-1 md:grid-cols-1 gap-3 lg:gap-3 w-full">
            <div
              onClick={() => {
                setMainImage("main-gamepad.png");
              }}
              className="md:aspect-square bg-neutral-100 flex justify-center items-center cursor-pointer"
            >
              <img
                src="/images/products/main-gamepad.png"
                alt=""
                className="w-full h-full object-cover p-6"
              />
            </div>
            <div
              onClick={() => {
                setMainImage("front.png");
              }}
              className="md:aspect-square bg-neutral-100 flex justify-center items-center cursor-pointer"
            >
              <img
                src="/images/products/front.png"
                alt=""
                className="w-full h-full object-cover p-6"
              />
            </div>
            <div
              onClick={() => {
                setMainImage("top.png");
              }}
              className="md:aspect-square bg-neutral-100 flex justify-center items-center cursor-pointer"
            >
              <img
                src="/images/products/top.png"
                alt=""
                className="w-full h-full object-cover p-6"
              />
            </div>
            <div
              onClick={() => {
                setMainImage("side.png");
              }}
              className="md:aspect-square bg-neutral-100 flex justify-center items-center cursor-pointer"
            >
              <img
                src="/images/products/side.png"
                alt=""
                className="w-full h-full object-cover p-6"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 bg-neutral-100 flex justify-center items-center w-full">
            <img
              src={`/images/products/${mainImage}`}
              alt=""
              className="w-[80%]"
            />
          </div>
        </div>
        <div className="flex justify-start items-start py-12">
          <div className="lg:py-0 w-full px-4 flex flex-col justify-start items-start gap-4 lg:gap-6">
            <h3>Havic HV G-92 Gamepad</h3>
            <div className="flex justify-center items-center gap-2">
              <div className="text-orange-400 flex justify-start items-center gap-1">
                <span>
                  <AiFillStar size={20} />
                </span>
                <span>
                  <AiFillStar size={20} />
                </span>
                <span>
                  <AiFillStar size={20} />
                </span>
                <span>
                  <AiFillStar size={20} />
                </span>
                <span className="text-neutral-300">
                  <AiFillStar size={20} />
                </span>
              </div>
              <p className="text-neutral-400">{`(150 Reviews)`} |</p>
              <p className="text-sm text-green-400">In Stock</p>
            </div>

            <h3 className="text-2xl">$192.00</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas hic
              aperiam, tempora cum numquam ipsum beatae modi consectetur,
              dolorem quos ad est magni adipisci?
            </p>
            <span className="block h-[1px] bg-black w-full"></span>
            <div className="flex justify-start items-center gap-4">
              <span>Colors:</span>
              <div className="flex justify-start items-center gap-4">
                <div className="w-5 flex justify-center items-center aspect-square bg-green-300 rounded-full border-2 border-neutral-100 outline-neutral-600 outline-2 outline"></div>
                <div className="w-5 flex justify-center items-center aspect-square bg-red-400 rounded-full"></div>
              </div>
            </div>
            <div className="flex justify-start items-center gap-4">
              <span>Size:</span>
              <div className="flex justify-start items-center gap-4">
                <div className="w-8 aspect-square rounded-md border border-neutral-400 flex justify-center items-center">
                  XS
                </div>
                <div className="w-8 aspect-square rounded-md border border-neutral-400 flex justify-center items-center">
                  S
                </div>
                <div className="w-8 aspect-square rounded-md bg-gajjar text-white flex justify-center items-center">
                  M
                </div>
                <div className="w-8 aspect-square rounded-md border border-neutral-400 flex justify-center items-center">
                  L
                </div>
                <div className="w-8 aspect-square rounded-md border border-neutral-400 flex justify-center items-center">
                  XL
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="w-1/4 h-11">
                <div className="flex h-full justify-center items-center rounded-sm w-full border border-neutral-500 overflow-hidden">
                  <button
                    className="w-11 h-full border-r border-neutral-500"
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity((prev) => prev - 1);
                      }
                    }}
                    disabled={quantity === 1}
                  >
                    -
                  </button>
                  <div className="w-20 flex justify-center items-center text-center">
                    {quantity}
                  </div>
                  <button
                    className="w-11 bg-gajjar text-white h-full"
                    onClick={() => {
                      setQuantity((prev) => prev + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              <button className="bg-gajjar h-11 px-12 rounded-md text-white">
                Buy Now
              </button>

              <button className="w-12 aspect-square border flex justify-center rounded-md items-center border-neutral-400">
                <GrFavorite size={30} />
              </button>
            </div>
            <div className="w-full border border-neutral-500 rounded-md">
              <div className="border-b border-neutral-500 p-6 flex justify-start items-center gap-4">
                <div>
                  <TbTruckDelivery size={25} />
                </div>
                <div>
                  <h5 className="text-sm font-semibold">Free Delivery</h5>
                  <p className="text-sm pt-2">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="p-6 flex justify-start items-center gap-4">
                <div>
                  <PiArrowsCounterClockwise size={25} />
                </div>
                <div>
                  <h5 className="text-sm font-semibold">Return Delivery</h5>
                  <p className="text-sm pt-2">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
