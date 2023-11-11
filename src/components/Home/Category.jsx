import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css/bundle";
import { CiHeadphones, CiMobile3 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import { TbDeviceGamepad } from "react-icons/tb";
import { MdOutlineSportsSoccer } from "react-icons/md";

const Category = () => {
  return (
    <>
      <section className="pt-4 pb-12">
        <div className="container">
          <div className="w-full border-b border-neutral-300 pb-12">
            <h5 className="heading">Categoreis</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-y-4 items-end duration-300">
              <h3 className="text-3xl font-semibold">Browse By Category</h3>

              <div className="lg:justify-self-end flex justify-start lg:justify-center items-center gap-4">
                <button
                  type="button"
                  className="w-10 aspect-square bg-neutral-200 rounded-full"
                  id="prevcategory"
                >
                  {"<"}
                </button>
                <button
                  className="w-10 aspect-square bg-neutral-200 rounded-full"
                  id="nextcategory"
                >
                  {">"}
                </button>
              </div>
            </div>
            <aside className="w-full pt-12">
              <Swiper
                // install Swiper modules
                loop={true}
                slidesPerView={2}
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
                    slidesPerView: 6,
                    spaceBetween: 50,
                  },
                }}
                //   navigation
                navigation={{
                  prevEl: "#prevcategory",
                  nextEl: "#nextcategory",
                }}
                modules={[Navigation, A11y]}
                spaceBetween={30}
              >
                <SwiperSlide>
                  <div className="bg-neutral-300 aspect-square flex flex-col gap-4 rounded-lg hover:text-white hover:bg-gajjar justify-center items-center ">
                    <CiMobile3 size={45} />
                    <h5>Mobile</h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-neutral-300 aspect-square flex flex-col gap-4 rounded-lg hover:text-white hover:bg-gajjar justify-center items-center">
                    <HiOutlineComputerDesktop size={45} />
                    <h5>Computers</h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-neutral-300 aspect-square flex flex-col gap-4 rounded-lg hover:text-white hover:bg-gajjar justify-center items-center">
                    <BsSmartwatch size={45} />
                    <h5>SmartWatch</h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-neutral-300 aspect-square flex flex-col gap-4 rounded-lg hover:text-white hover:bg-gajjar justify-center items-center bg-gajjar text-white ">
                    <AiOutlineCamera size={45} />
                    <h5>Camera</h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-neutral-300 aspect-square flex flex-col gap-4 rounded-lg hover:text-white hover:bg-gajjar justify-center items-center">
                    <CiHeadphones size={45} />
                    <h5>Headphones</h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-neutral-300 aspect-square flex flex-col gap-4 rounded-lg hover:text-white hover:bg-gajjar justify-center items-center">
                    <TbDeviceGamepad size={45} />
                    <h5>Gaming</h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-neutral-300 aspect-square  flex flex-col gap-4 rounded-lg hover:text-white hover:bg-gajjar justify-center items-center">
                    <MdOutlineSportsSoccer size={45} />
                    <h5>Sports</h5>
                  </div>
                </SwiperSlide>
              </Swiper>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
