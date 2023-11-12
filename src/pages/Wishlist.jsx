import React, { useEffect } from "react";
import Wish from "../components/Wishlist/Wish";
import ForYou from "../components/Wishlist/ForYou";
import { useLocation } from "react-router-dom";

const Wishlist = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <main className="bg-neutral-100">
      <Wish />
      <ForYou />
    </main>
  );
};

export default Wishlist;
