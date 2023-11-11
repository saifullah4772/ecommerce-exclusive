import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css/bundle";
import { Link } from "react-router-dom";
import Product from "../Product";

const Wish = () => {
  return (
    <>
      <section className="pt-16 pb-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-y-8 items-end duration-300">
            <h3 className="text-lg">Wishlist {`(4)`}</h3>
            <div className="lg:justify-self-end">
              <Link
                to="/products"
                className="duration-300 hover:bg-neutral-800 hover:text-white rounded-md border border-neutral-500 hover:border-neutral-800 py-4 px-6 sm:px-12"
              >
                Move All To Bag
              </Link>
            </div>
          </div>
          <aside className="w-full h-full pt-12">
            <Swiper
              // install Swiper modules
              loop={true}
              slidesPerView={1}
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
              modules={[Navigation, A11y]}
              spaceBetween={30}
            >
              <SwiperSlide>
                <Product
                  productname={"The north coat"}
                  remove={true}
                  addwish={false}
                  price={"$260"}
                  oldPrice={"$360"}
                  imgsrc={"/images/products/coat.png"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  productname={"Gucci duffle bag"}
                  remove={true}
                  addwish={false}
                  price={"$960"}
                  oldPrice={"$1060"}
                  imgsrc={"/images/products/gucci-bag.png"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  productname={"RGB liquid CPU Cooler"}
                  remove={true}
                  addwish={false}
                  price={"$160"}
                  oldPrice={"$260"}
                  imgsrc={"/images/products/cpu-cooler.png"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  productname={"Small BookSelf"}
                  remove={true}
                  addwish={false}
                  price={"$360"}
                  oldPrice={"$460"}
                  imgsrc={"/images/products/book-shelf.png"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  productname={"IPS LCD Gaming Monitor"}
                  remove={true}
                  addwish={false}
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

export default Wish;
