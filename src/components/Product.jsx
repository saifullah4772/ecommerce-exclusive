import React from "react";
import { BsStarFill, BsStarHalf, BsTrash3 } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Product = ({
  imgsrc,
  productname,
  price,
  profit,
  prodslug = "product",
  showNew,
  oldPrice,
  remove = false,
  addwish = true,
  viewitem = true,
}) => {
  return (
    <div className="h-80">
      <div className="h-[75%] bg-white shadow-2xl flex justify-center items-center relative product">
        <img src={imgsrc} className="h-1/2 object-cover" />
        <div className="absolute top-4 left-4 flex flex-col justify-center items-center gap-2">
          {profit && (
            <div className="bg-gajjar w-14 p-1 px-2 text-white text-sm">
              {profit}
            </div>
          )}
          {showNew && (
            <div className="bg-green-500 w-14 text-center p-1 px-2 text-white text-sm">
              New
            </div>
          )}
        </div>
        <div className="absolute top-4 right-4 flex flex-col gap-2 justify-center items-center">
          {addwish && (
            <button className="w-8 flex justify-center items-center rounded-full bg-white aspect-square">
              <GrFavorite size={20} />
            </button>
          )}
          {remove && (
            <button className="w-8 flex justify-center items-center rounded-full bg-white aspect-square">
              <BsTrash3 size={20} />
            </button>
          )}
          {viewitem && (
            <Link
              to={`/product-detail/${prodslug}`}
              className="w-8 flex justify-center items-center rounded-full bg-white aspect-square"
            >
              <AiOutlineEye size={20} />
            </Link>
          )}
        </div>
        <button className="absolute bottom-0 left-0 w-full py-3 bg-black text-white duration-300 flex justify-center items-center gap-3">
          <HiOutlineShoppingCart size={25} />
          <span>Add to Cart</span>
        </button>
      </div>
      <div className="flex flex-col justify-between items-start gap-1 py-2">
        <h4 className="text-md font-semibold">{productname}</h4>
        <div className="flex justify-center items-center gap-3 font-semibold">
          <h5 className="text-gajjar text-md">{price}</h5>{" "}
          {oldPrice && <del className="text-neutral-400">{oldPrice}</del>}
        </div>
        <div className="flex justify-start items-center gap-1 text-orange-500">
          <BsStarFill size={15} />
          <BsStarFill size={15} />
          <BsStarFill size={15} />
          <BsStarFill size={15} />
          <BsStarHalf size={15} />
        </div>
      </div>
    </div>
  );
};

export default Product;
