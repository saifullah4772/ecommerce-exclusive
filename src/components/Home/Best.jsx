import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css/bundle";
import { Link } from "react-router-dom";
import Product from "../Product";

const Best = () => {
  return (
    <>
      <section className="pt-4 pb-12">
        <div className="container">
          <h5 className="heading">This Month</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-y-8 items-end duration-300">
            <h3 className="text-3xl font-semibold">Best Selling Products</h3>
            <div className="lg:justify-self-end">
              <Link
                to="/products"
                className="bg-gajjar duration-300 hover:opacity-80 text-white py-4 px-6 sm:px-12"
              >
                View All
              </Link>
            </div>
          </div>
          <aside className="w-full h-full pt-12">
            <Swiper
              // install Swiper modules
              loop={true}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              grabCursor={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 60,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 70,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 80,
                },
              }}
              //   navigation
              navigation={{
                prevEl: "#prev",
                nextEl: "#next",
              }}
              modules={[Navigation, A11y, Autoplay]}
              spaceBetween={30}
            >
              <SwiperSlide>
                <Product
                  productname={"The north coat"}
                  price={"$260"}
                  oldPrice={"$360"}
                  imgsrc={"/images/products/coat.png"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  productname={"Gucci duffle bag"}
                  price={"$960"}
                  oldPrice={"$1060"}
                  imgsrc={"/images/products/gucci-bag.png"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  productname={"RGB liquid CPU Cooler"}
                  price={"$160"}
                  oldPrice={"$260"}
                  imgsrc={"/images/products/cpu-cooler.png"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  productname={"Small BookSelf"}
                  price={"$360"}
                  oldPrice={"$460"}
                  imgsrc={"/images/products/book-shelf.png"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  productname={"IPS LCD Gaming Monitor"}
                  price={"$560"}
                  oldPrice={"$660"}
                  imgsrc={"/images/products/lcd.png"}
                />
              </SwiperSlide>
            </Swiper>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Best;
