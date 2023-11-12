import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Cart = () => {
  const { pathname } = useLocation();
  const [quantity, setQuantity] = useState(1);
  const quatityCounter = (id, event) => {
    if (event.target.value === "0") {
      setQuantity(1);
      return;
    }

    // code to update the quantity in the database
    setQuantity(event.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section className="py-20 bg-neutral-100">
      <div className="container">
        <div className="flex justify-start items-center gap-4">
          <Link to="/" className="text-neutral-400">
            Home
          </Link>
          <span>/</span>
          <span>Cart</span>
        </div>
        <div className="px-2 overflow-y-auto">
          <table className="w-full border-separate border-spacing-y-16">
            <thead>
              <tr className="shadow-[0px_0px_5px_rgba(0,0,0,0.2)] bg-white">
                <th className="p-6 text-left font-semibold">Product</th>
                <th className="p-6 text-left font-semibold">Price</th>
                <th className="p-6 text-left font-semibold">Quantity</th>
                <th className="p-6 text-left font-semibold">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="shadow-[0px_0px_5px_rgba(0,0,0,0.2)] bg-white">
                <td className="p-6">
                  <div className="flex justify-start items-center gap-5 relative">
                    <img
                      src="/images/products/lcd.png"
                      alt="product image"
                      className="w-10"
                    />
                    <span>LCD Monitor</span>
                    <button
                      type="button"
                      className="absolute -top-2 -left-2 w-5 h-5 flex justify-center items-center cursor-pointer bg-red-600 text-white rounded-full"
                    >
                      <RxCross2 size={15} />
                    </button>
                  </div>
                </td>
                <td className="p-6">$650</td>
                <td className="p-6">
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    value={quantity}
                    onChange={(event) => quatityCounter(1, event)}
                    className="w-12 border border-neutral-500 p-2 focus:outline-none rounded-md text-center"
                  />
                </td>
                <td className="p-6">$650</td>
              </tr>
              <tr className="shadow-[0px_0px_5px_rgba(0,0,0,0.2)] bg-white">
                <td className="p-6">
                  <div className="flex justify-start items-center gap-5 relative">
                    <img
                      src="/images/products/game.png"
                      alt="product image"
                      className="w-10"
                    />
                    <span>HI Gamepad</span>
                    <button
                      type="button"
                      className="absolute -top-2 -left-2 w-5 h-5 flex justify-center items-center cursor-pointer bg-red-600 text-white rounded-full"
                    >
                      <RxCross2 size={15} />
                    </button>
                  </div>
                </td>
                <td className="p-6">$550</td>
                <td className="p-6">
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    value={quantity}
                    onChange={(event) => quatityCounter(1, event)}
                    className="w-12 border border-neutral-500 p-2 focus:outline-none rounded-md text-center"
                  />
                </td>
                <td className="p-6">$1100</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center">
          <Link
            to="/products"
            className="p-4 sm:px-12 rounded-md border transition-all duration-300 border-neutral-400 hover:bg-neutral-800 hover:border-neutral-800 hover:text-white"
          >
            Return To Shop
          </Link>
          <button className="p-4 px-6 sm:px-12 rounded-md border transition-all duration-300 border-neutral-400 hover:bg-neutral-800 hover:border-neutral-800 hover:text-white">
            Update Cart
          </button>
        </div>
        <div className="pt-12 grid grid-cols-1 gap-y-5 sm:grid-cols-2">
          <div className="flex flex-col md:flex-row justify-start items-start gap-4">
            <input
              type="text"
              className="border border-neutral-500 p-3 focus:outline-none rounded-md w-full sm:w-auto"
              placeholder="Coupon Code"
            />
            <button className="p-3 px-6 lg:px-12 rounded-md text-white bg-gajjar hover:opacity-80">
              Apply Coupon
            </button>
          </div>
          <div className="flex justify-end items-start">
            <div className="flex flex-col justify-center items-start w-full md:w-4/5 lg:w-3/5 gap-4 border border-neutral-700 p-6 rounded-md">
              <h3 className="text-xl font-semibold">Cart Total</h3>
              <div className="flex justify-between items-center w-full">
                <span>Subtotal:</span>
                <span>$650</span>
              </div>

              <span className="block w-full h-[2px] bg-neutral-300"></span>
              <div className="flex justify-between items-center w-full">
                <span>Shipping:</span>
                <span>Free</span>
              </div>

              <span className="block w-full h-[2px] bg-neutral-300"></span>
              <div className="flex justify-between items-center w-full">
                <span>Total:</span>
                <span>$650</span>
              </div>
              <div className="flex justify-center items-center w-full">
                <button className="p-3 rounded-md px-8 bg-gajjar text-white hover:opacity-80">
                  Process to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
