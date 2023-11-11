import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { BsShieldCheck } from "react-icons/bs";

const Delivery = () => {
  return (
    <section className="pt-6 pb-32">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12">
          <div className="flex justify-center items-center flex-col gap-3">
            <span className="bg-neutral-300 p-2 aspect-square rounded-full">
              <span className="w-12 aspect-square bg-black rounded-full flex justify-center items-center">
                <TbTruckDelivery size={25} className="text-white" />
              </span>
            </span>
            <h3 className="font-bold uppercase">Free and Fast Delivery</h3>
            <p className="">Free delivery for all orders over $140</p>
          </div>
          <div className="flex justify-center items-center flex-col gap-3">
            <span className="bg-neutral-300 p-2 aspect-square rounded-full">
              <span className="w-12 aspect-square bg-black rounded-full flex justify-center items-center">
                <RiCustomerServiceLine size={25} className="text-white" />
              </span>
            </span>
            <h3 className="font-bold uppercase">24/7 Customer Service</h3>
            <p className="">Friendly 24/7 cusomer support</p>
          </div>
          <div className="flex justify-center items-center flex-col gap-3">
            <span className="bg-neutral-300 p-2 aspect-square rounded-full">
              <span className="w-12 aspect-square bg-black rounded-full flex justify-center items-center">
                <BsShieldCheck size={25} className="text-white" />
              </span>
            </span>
            <h3 className="font-bold uppercase">Money Back Guarante</h3>
            <p className="">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
