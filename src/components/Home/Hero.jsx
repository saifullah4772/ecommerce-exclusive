import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCreative, Autoplay, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css/bundle";

const Hero = () => {
  return (
    <header className="h-[70vh] bg-neutral-300">
      <Swiper
        // install Swiper modules
        loop={true}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        //   navigation
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, EffectCreative, A11y]}
        // height={500}
        className="h-full hero-slider"
      >
        <SwiperSlide className="slider-bg">
          <div className="absolute top-0 left-0 z-50 h-full w-1/2 flex justify-center items-center">
            <div className="h-full flex flex-col justify-center items-start gap-8">
              <p className="text-2xl font-semibold text-white">
                Iphone 15 Pro Max
              </p>
              <h1 className="text-5xl font-bold text-white">
                Up to 20% off Voucher
              </h1>
              <Link
                to="/product/product"
                className="text-white pb-1 border-b border-white w-auto inline-block"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="slider-bg">
          <div className="absolute top-0 left-0 z-50 h-full w-1/2 flex justify-center items-center">
            <div className="h-full flex flex-col justify-center items-start gap-8">
              <p className="text-2xl font-semibold text-white">
                Iphone 15 Pro Max
              </p>
              <h1 className="text-5xl font-bold text-white">
                Up to 20% off Voucher
              </h1>
              <Link
                to="/product/product"
                className="text-white pb-1 border-b border-white w-auto inline-block"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="slider-bg">
          <div className="absolute top-0 left-0 z-50 h-full w-1/2 flex justify-center items-center">
            <div className="h-full flex flex-col justify-center items-start gap-8">
              <p className="text-2xl font-semibold text-white">
                Iphone 15 Pro Max
              </p>
              <h1 className="text-5xl font-bold text-white">
                Up to 20% off Voucher
              </h1>
              <Link
                to="/product/product"
                className="text-white pb-1 border-b border-white w-auto inline-block"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1449247666642-264389f5f5b1?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="slider-bg">
          <div className="absolute top-0 left-0 z-50 h-full w-1/2 flex justify-center items-center">
            <div className="h-full flex flex-col justify-center items-start gap-8">
              <p className="text-2xl font-semibold text-white">
                Iphone 15 Pro Max
              </p>
              <h1 className="text-5xl font-bold text-white">
                Up to 20% off Voucher
              </h1>
              <Link
                to="/product/product"
                className="text-white pb-1 border-b border-white w-auto inline-block"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default Hero;
