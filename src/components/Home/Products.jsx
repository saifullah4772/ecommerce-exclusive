import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/grid";
import { Link, useLocation } from "react-router-dom";
import Product from "../Product";

const Products = () => {
  const { pathname } = useLocation();
  const productsRows = pathname === "/" ? 2 : 3;
  return (
    <>
      <section className="pt-20 pb-12">
        <div className="container">
          <h5 className="heading">Our Products</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-y-8 items-end duration-300">
            <h3 className="text-3xl font-semibold">Explore Our Products</h3>
            <div className="flex justify-start md:justify-end items-center gap-4">
              <button
                type="button"
                className="w-10 aspect-square bg-neutral-200 rounded-full"
                id="prevproducts"
              >
                {"<"}
              </button>
              <button
                className="w-10 aspect-square bg-neutral-200 rounded-full"
                id="nextproducts"
              >
                {">"}
              </button>
            </div>
          </div>

          <aside className="w-full h-full pt-12">
            <Swiper
              // install Swiper modules
              loop={true}
              slidesPerView={1}
              grid={{ rows: productsRows, fill: "row" }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              //   navigation
              grabCursor={true}
              navigation={{
                prevEl: "#prevproducts",
                nextEl: "#nextproducts",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                  grid: { rows: productsRows, fill: "row" },
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                  grid: { rows: productsRows, fill: "row" },
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                  grid: { rows: productsRows, fill: "row" },
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 80,
                  grid: { rows: productsRows, fill: "row" },
                },
              }}
              modules={[Grid, Navigation]}
              spaceBetween={10}
              className="w-full"
            >
              <SwiperSlide>
                <Product
                  imgsrc={"/images/products/dog-food.png"}
                  productname={"Breed Dry Dog Food"}
                  price={"$100"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgsrc={"/images/products/camera.png"}
                  productname={"CANON EOS DSLR Camera"}
                  price={"$360"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgsrc={"/images/products/laptop.png"}
                  productname={"ASUS FHD Gaming Laptop"}
                  price={"$700"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  productname={"Curology Product Set"}
                  imgsrc={"/images/products/product-set.png"}
                  price={"$100"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgsrc={"/images/products/coat.png"}
                  productname={"The north coat"}
                  price={"$100"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgsrc={"/images/products/kids-car.png"}
                  productname={"Kids Electric Car"}
                  price={"$960"}
                  showNew={true}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgsrc={"/images/products/shoes.png"}
                  productname={"Jr. Zoom Soccer Cleats"}
                  price={"$1160"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgsrc={"/images/products/gamepad.png"}
                  productname={"GP11 Shooter USB Gamepad"}
                  price={"$660"}
                  showNew={true}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgsrc={"/images/products/jacket.png"}
                  productname={"Quilted Satin Jacke"}
                  price={"$660"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgsrc={"/images/products/chair.png"}
                  productname={"S-Series Comfort Chair"}
                  price={"$660"}
                />
              </SwiperSlide>
            </Swiper>
          </aside>
        </div>
        {pathname === "/" && (
          <div className="container">
            <div className="text-center pt-16">
              <Link
                to="/products"
                className="bg-gajjar duration-300 hover:opacity-80 text-white py-4 px-6 sm:px-16"
              >
                View All Products
              </Link>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Products;
