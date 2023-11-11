import React from "react";
import { Link } from "react-router-dom";
import { BiSend } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <section className="py-20 border-b border-neutral-700">
        <div className="container">
          <div className="grid justify-center content-start items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12">
            <div className="flex flex-col justify-center items-center sm:items-start gap-4">
              <Link to="/" className="text-xl font-bold">
                Exclusive
              </Link>
              <Link to="/" className="font-semibold">
                Subscribe
              </Link>
              <div className="w-full text-center sm:text-left">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className="w-full sm:w-3/5 relative mt-4">
                  <input
                    type="text"
                    className="bg-transparent border border-neutral-100 px-4 py-2 w-full focus:outline-none"
                    placeholder="Enter your email"
                  />
                  <button className="absolute top-1/2 right-4 -translate-y-1/2">
                    <BiSend size={20} className="text-neutral-400" />
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col justify-center items-center sm:items-start gap-4">
                <h3 className="font-semibold">Support</h3>
                <p className="text-sm text-neutral-300 w-4/5 text-center sm:text-left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, veritatis?
                </p>
                <p className="text-sm text-neutral-300">example@gmail.com</p>
                <p className="text-sm text-neutral-300">+92300-1234567</p>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col justify-center items-center sm:items-start gap-4">
                <h3 className="font-semibold">Account</h3>
                <Link to="/" className="text-sm text-neutral-300">
                  My Account
                </Link>
                <Link to="/login" className="text-sm text-neutral-300">
                  Login / Register
                </Link>
                <Link to="/cart" className="text-sm text-neutral-300">
                  Cart
                </Link>
                <Link to="/wishlist" className="text-sm text-neutral-300">
                  Wishlist
                </Link>
                <Link to="/products" className="text-sm text-neutral-300">
                  Shop
                </Link>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col justify-center items-center sm:items-start gap-4">
                <h3 className="font-semibold">Quick Link</h3>
                <Link to="/privacy-policy" className="text-sm text-neutral-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-sm text-neutral-300">
                  Terms of Use
                </Link>
                <Link to="/faq" className="text-sm text-neutral-300">
                  FAQ
                </Link>
                <Link to="/contact" className="text-sm text-neutral-300">
                  Contact
                </Link>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col justify-center items-center sm:items-start gap-4">
                <h3 className="font-semibold">Social Links</h3>
                <Link to="/" className="text-sm text-neutral-300">
                  Facebook
                </Link>
                <Link to="/" className="text-sm text-neutral-300">
                  Twitter
                </Link>
                <Link to="/" className="text-sm text-neutral-300">
                  Instagram
                </Link>
                <Link to="/" className="text-sm text-neutral-300">
                  Linked In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-4 text-center">
        <div className="container">
          <p className="text-neutral-600">
            <span className="text-lg">&copy;</span> Copyright Code Glitch{" "}
            {new Date().getFullYear()} All right reserved
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
