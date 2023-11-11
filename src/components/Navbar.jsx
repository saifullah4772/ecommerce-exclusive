import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiSearch } from "react-icons/fi";
import { GrClose, GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

const Navbar = () => {
  const location = useLocation();

  const pathname = location.pathname;
  const [isNav, setisNav] = useState(false);
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "About",
      path: "/about",
    },

    {
      title: "Signup",
      path: "/signup",
    },
  ];
  return (
    <nav className="sticky top-0 left-0 w-full border-b py-4 pt-10 border-neutral-300 bg-white z-[999]">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-3 justify-between content-center gap-y-4">
          <Link to="/" className="text-2xl font-bold">
            Exclusive
          </Link>
          <div className="flex justify-end items-center w-full overflow-hidden md:overflow-visible">
            <ul
              className={`fixed top-0 duration-300 h-screen md:h-auto bg-neutral-200 md:bg-transparent md:static flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center md:gap-4 lg:pr-16 z-50 w-4/5 ${
                isNav ? "right-0" : "-right-full"
              } md:w-auto`}
            >
              <li className="p-4 px-8 w-full flex justify-between items-center border-b border-neutral-400 md:hidden">
                <FaUserCircle
                  size={30}
                  className={`${pathname === "/profile" ? "text-gajjar" : ""}`}
                />
                <GrClose
                  onClick={() => {
                    setisNav(false);
                  }}
                  size={25}
                />
              </li>
              {navLinks.map((navlink, index) => (
                <li
                  key={index}
                  className="w-full md:w-auto"
                  onClick={() => {
                    setisNav(false);
                  }}
                >
                  <Link
                    to={navlink.path}
                    className={`md:border-b-2 w-full inline-block p-4 md:p-0 ${
                      pathname === navlink.path
                        ? "border-0 md:border-neutral-300 bg-neutral-500 md:bg-transparent text-white md:text-neutral-800"
                        : "border-none"
                    }`}
                  >
                    {navlink.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="md:hidden">
              <FiMenu
                size={25}
                onClick={() => {
                  setisNav(true);
                }}
              />
            </div>
          </div>
          <div
            className="flex justify-center items-center gap-4 w-full md:w-auto col-span-2 md:col-span-1"
            id="search"
          >
            <div className="relative">
              <input
                type="text"
                className="bg-neutral-100 px-4 pr-16 py-2 w-full focus:outline-none"
                placeholder="What are you looking for?"
              />
              <span className="absolute top-1/2 right-4 -translate-y-1/2">
                <FiSearch size={20} className="text-neutral-400" />
              </span>
            </div>
            <div className="flex justify-between items-center gap-4">
              <Link to="/wishlist">
                {pathname === "/wishlist" ? (
                  <MdFavorite size={30} />
                ) : (
                  <MdOutlineFavoriteBorder size={30} />
                )}
              </Link>
              <Link to="/cart" className="relative">
                {pathname === "/cart" ? (
                  <HiShoppingCart size={30} />
                ) : (
                  <HiOutlineShoppingCart size={30} />
                )}
                <span className="absolute -top-2 text-sm flex justify-center font-bold items-center -right-2 w-5 h-5 rounded-full bg-gajjar text-white">
                  5
                </span>
              </Link>
              <Link to="/profile">
                <FaUserCircle
                  size={30}
                  className={`${pathname === "/profile" ? "text-gajjar" : ""}`}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
