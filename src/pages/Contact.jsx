import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  const { pathname } = useLocation();

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
          <span>Contact</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
          <div className="shadow-lg p-8 bg-white">
            <div className="flex flex-col justify-start items-start gap-6">
              <div className="flex justify-start items-center gap-4 font-bold text-lg">
                <span className="w-10 h-10 bg-gajjar flex justify-center items-center rounded-full text-white">
                  <IoCallOutline size={20} />
                </span>
                <h3>Call To Us</h3>
              </div>
              <p>We are available 24/7, 7 days a week.</p>
              <p>
                Phone: <span>+923001234567</span>
              </p>
            </div>
            <hr className="my-8 border-neutral-300 border" />
            <div className="flex flex-col justify-start items-start gap-6">
              <div className="flex justify-start items-center gap-4 font-bold text-lg">
                <span className="w-10 h-10 bg-gajjar flex justify-center items-center rounded-full text-white">
                  <FiMail size={20} />
                </span>
                <h3>Write To Us</h3>
              </div>
              <p>Fill out our form and we will contact within 24 hours.</p>
              <p>
                Emails: <span>customer@exlusive.com</span>
              </p>
              <p>
                Emails: <span>support@exlusive.com</span>
              </p>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 p-8 shadow-lg bg-white">
            <form
              action=""
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className=" bg-neutral-200 p-3 rounded-md focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className=" bg-neutral-200 p-3 rounded-md focus:outline-none"
              />
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                className=" bg-neutral-200 p-3 col-span-1 md:col-span-2 lg:col-span-1 rounded-md focus:outline-none"
              />
              <textarea
                name="message"
                id="message"
                className="col-span-1 md:col-span-2 lg:col-span-3 bg-neutral-200 p-3 rounded-md focus:outline-none resize-none h-60"
                placeholder="Your Message"
              />
              <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-end items-center">
                <button className="bg-gajjar text-white p-3 px-6 rounded-md">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
