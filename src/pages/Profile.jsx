import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Profile = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section className="py-20 bg-neutral-100">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-4">
            <Link to="/" className="text-neutral-400">
              Home
            </Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <div>
            <p>
              Welcome! <span className="text-gajjar">Saif Ullah</span>
            </p>
          </div>
        </div>
        <main className="py-16 grid grid-cols-4 gap-8">
          <div className="bg-white p-8">
            <div className="pb-3">
              <h3 className="font-semibold">Manage My Account</h3>
              <ul className="pl-8 p-3 text-neutral-400">
                <li>
                  <Link to="/" className="text-gajjar">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link to="/">Address Book</Link>
                </li>
                <li>
                  <Link to="/">My Payments Options</Link>
                </li>
              </ul>
            </div>
            <div className="pb-3">
              <h3 className="font-semibold">My Orders</h3>
              <ul className="pl-8 p-3 text-neutral-400">
                <li>
                  <Link to="/">My Returns</Link>
                </li>
                <li>
                  <Link to="/">My Cancellations</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">My Wishlist</h3>
              <ul className="pl-8 p-3 text-neutral-400">
                <li></li>
              </ul>
            </div>
          </div>
          <div className="p-8 px-16 shadow-[0px_0px_5px_rgba(0,0,0,0.3)] col-span-3 bg-white">
            <h2 className="text-xl font-semibold text-gajjar">
              Edit Your Profile
            </h2>
            <form className="grid grid-cols-2 gap-8 pt-4">
              <div className="flex flex-col gap-2 justify-start items-start">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  id="fname"
                  className="bg-neutral-200 focus:outline-none rounded-md p-3 w-full"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col gap-2 justify-start items-start">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  className="bg-neutral-200 focus:outline-none rounded-md p-3 w-full"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex flex-col gap-2 justify-start items-start">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="bg-neutral-200 focus:outline-none rounded-md p-3 w-full"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col gap-2 justify-start items-start">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  className="bg-neutral-200 focus:outline-none rounded-md p-3 w-full"
                  placeholder="Address"
                />
              </div>
              <div className="col-span-2 flex flex-col justify-start items-start gap-4">
                <label htmlFor="password">Password Changes</label>
                <input
                  type="text"
                  className="bg-neutral-200 focus:outline-none rounded-md p-3 w-full"
                  placeholder="Current Password"
                />
                <input
                  type="text"
                  className="bg-neutral-200 focus:outline-none rounded-md p-3 w-full"
                  placeholder="New Password"
                />
                <input
                  type="text"
                  className="bg-neutral-200 focus:outline-none rounded-md p-3 w-full"
                  placeholder="Confirm New Password"
                />
              </div>
              <div className="flex justify-end items-center col-span-2 gap-4">
                <button className="p-4 px-12 rounded-md">Cancel</button>
                <button className="bg-gajjar p-4 px-12 text-white rounded-md">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Profile;
