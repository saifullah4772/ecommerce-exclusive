import React, { useEffect } from "react";
import Products from "../components/Home/Products";
import { Link, useLocation } from "react-router-dom";

const Product = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section className="pt-12 pb-28 bg-neutral-100">
      <div className="container">
        <div className="flex justify-start items-center gap-4 pt-8">
          <Link to="/" className="text-neutral-400">
            Home
          </Link>
          <span>/</span>
          <span>Privacy</span>
        </div>
      </div>
      <Products />
    </section>
  );
};

export default Product;
