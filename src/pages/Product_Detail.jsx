import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Related from "../components/Product_Details/Related";
import Details from "../components/Product_Details/Details";

const Product_Detail = () => {
  const { pathname } = useLocation();
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section className="py-20 bg-neutral-100">
      <Details />
      <Related />
    </section>
  );
};

export default Product_Detail;
