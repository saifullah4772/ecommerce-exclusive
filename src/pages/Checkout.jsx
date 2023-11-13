import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <section className="py-20 bg-neutral-100">
      <div className="container">
        <div className="flex justify-start items-center gap-4 text-neutral-400">
          <Link to="/">Home</Link>
          <span className="inner-link-text">Cart</span>
          <span className="inner-link-text text-black">Checkout</span>
        </div>
        <h1 className="text-3xl font-semibold py-8 pt-12">Billing Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1">
            <form
              action=""
              className="flex flex-col justify-start items-start gap-8 w-full lg:w-4/5"
            >
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="rounded-md w-full p-3 mt-2 focus:outline-none bg-white shadow-md"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="rounded-md w-full p-3 mt-2 focus:outline-none bg-white shadow-md"
                  placeholder="Company Name"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="rounded-md w-full p-3 mt-2 focus:outline-none bg-white shadow-md"
                  placeholder="Street Address"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="apartment"
                  id="apartment"
                  className="rounded-md w-full p-3 mt-2 focus:outline-none bg-white shadow-md"
                  placeholder="Appartment, floor, etc."
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="rounded-md w-full p-3 mt-2 focus:outline-none bg-white shadow-md"
                  placeholder="Town/City"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="rounded-md w-full p-3 mt-2 focus:outline-none bg-white shadow-md"
                  placeholder="Phone Number"
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="rounded-md w-full p-3 mt-2 focus:outline-none bg-white shadow-md"
                  placeholder="Email Address"
                />
              </div>
              <div className="flex justify-start items-center gap-4">
                <input
                  name="save-billing"
                  id="billing"
                  type="checkbox"
                  class="w-6 h-6 text-red-500 border-gray-300 rounded-md focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 accent-current"
                />
                <p>Save this information for faster check-out next time</p>
              </div>
            </form>
          </div>
          <div className="flex justify-end items-start order-1 md:order-2">
            <div className="w-full lg:w-4/5">
              <div className="flex flex-col justify-start items-start gap-8">
                <div className="flex justify-between items-center w-full">
                  <div className="flex justify-start items-center gap-4">
                    <img
                      src="/images/products/game.png"
                      alt=""
                      className="w-12"
                    />
                    <span className="text-md">Hi Gamepad</span>
                  </div>
                  <span>$650</span>
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="flex justify-start items-center gap-4">
                    <img
                      src="/images/products/lcd.png"
                      alt=""
                      className="w-12"
                    />
                    <span className="text-md">LCD Monitor</span>
                  </div>
                  <span>$1100</span>
                </div>

                <div className="flex justify-between items-center w-full border-b border-neutral-800 pb-4">
                  <span>Subtotal:</span>
                  <span>$650</span>
                </div>
                <div className="flex justify-between items-center w-full border-b border-neutral-800 pb-4">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between items-center w-full">
                  <span>Total:</span>
                  <span>$1750</span>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-8 pt-8">
                <div className="flex justify-between items-center w-full">
                  <div className="flex justify-start items-center gap-4">
                    <input
                      type="radio"
                      name="payment"
                      id="card"
                      className="text-black accent-current w-5 h-5"
                    />
                    <span>Bank</span>
                  </div>
                  <div>Cards</div>
                </div>
                <div>
                  <div className="flex justify-start items-center gap-4">
                    <input
                      type="radio"
                      name="payment"
                      id="cash-on-delivery"
                      className="text-black accent-current w-5 h-5"
                    />
                    <span>Cash on Devlivery</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 w-full gap-4">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="col-span-2 p-3 rounded-md focus:outline-none bg-white border border-neutral-800"
                  />
                  <button className="col-span-1 p-3 bg-gajjar rounded-md text-white">
                    Apply Coupon
                  </button>
                </div>
                <div>
                  <button className="col-span-1 p-3 bg-gajjar rounded-md text-white px-8">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
