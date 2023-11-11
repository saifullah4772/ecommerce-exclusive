import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css/bundle";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import Product from "../Product";

const Today = () => {
  return (
    <>
      <section className="pt-20 pb-12 select-none">
        <div className="container">
          <h5 className="heading">Today's</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-y-4 items-end duration-300">
            <h3 className="text-3xl font-semibold">Flash Sales</h3>
            <div className="flex justify-start md:justify-center items-center gap-3">
              <div className="flex flex-col justify-center items-start">
                <span className="text-sm">Days</span>
                <span className="text-3xl font-bold">03</span>
              </div>
              <span className="text-gajjar text-xl font-bold">:</span>
              <div className="flex flex-col justify-center items-start">
                <span className="text-sm">Hours</span>
                <span className="text-3xl font-bold">23</span>
              </div>
              <span className="text-gajjar text-xl font-bold">:</span>
              <div className="flex flex-col justify-center items-start">
                <span className="text-sm">Minutes</span>
                <span className="text-3xl font-bold">19</span>
              </div>
              <span className="text-gajjar text-xl font-bold">:</span>
              <div className="flex flex-col justify-center items-start">
                <span className="text-sm">Seconds</span>
                <span className="text-3xl font-bold">56</span>
              </div>
            </div>
            <div className="lg:justify-self-end flex justify-start lg:justify-center items-center gap-4">
              <button
                type="button"
                className="w-10 aspect-square bg-neutral-200 rounded-full"
                id="prev"
              >
                {"<"}
              </button>
              <button
                className="w-10 aspect-square bg-neutral-200 rounded-full"
                id="next"
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
        <div className="sm:ml-auto mx-auto sm:mx-0 w-4/5 sm:w-[90%]">
          <aside className="w-full h-full pt-12">
            <Swiper
              // install Swiper modules
              loop={true}
              slidesPerView={1}
              grabCursor={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              freeMode={true}
              //   navigation
              navigation={{
                prevEl: "#prev",
                nextEl: "#next",
              }}
              modules={[Navigation, A11y, FreeMode]}
              spaceBetween={30}
            >
              <SwiperSlide>
                <Product
                  productname={"HAVIT HV-G92 Gamepad"}
                  price={"$120"}
                  profit={"-40%"}
                  imgsrc={"/images/products/game.png"}
                  prodslug={"havit-hv-g92-gamepad"}
                  oldPrice={"$160"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  productname={"AK-900 Wired Keyboard"}
                  price={"$960"}
                  profit={"-35%"}
                  oldPrice={"$1200"}
                  prodslug={"ak-900-wired-keyboard"}
                  imgsrc={"/images/products/keyboard.png"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  productname={"IPS LCD Gaming Monitor"}
                  price={"$370"}
                  profit={"-30%"}
                  oldPrice={"$530"}
                  prodslug={"ips-lcd-gaming-monitor"}
                  imgsrc={"/images/products/lcd.png"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  productname={"S-Series Comfort Chair"}
                  price={"$380"}
                  profit={"-25%"}
                  oldPrice={"$500"}
                  prodslug={"s-series-comfort-chair"}
                  imgsrc={"/images/products/chair.png"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  productname={"ABL Music Player"}
                  price={"$420"}
                  profit={"-20%"}
                  oldPrice={"$530"}
                  prodslug={"abl-music-player"}
                  imgsrc={"/images/products/music-player.png"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  productname={"CANON EOS DSLR Camera"}
                  price={"$360"}
                  profit={"-30%"}
                  oldPrice={"$530"}
                  prodslug={"canon-eos-dslr-camera"}
                  imgsrc={"/images/products/camera.png"}
                />
              </SwiperSlide>
            </Swiper>
          </aside>
        </div>
        <div className="container">
          <div className="text-center py-16 border-b border-neutral-300">
            <Link
              to="/products"
              className="bg-gajjar duration-300 hover:opacity-80 text-white py-4 px-6 sm:px-16"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Today;
