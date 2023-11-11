import React from "react";
import { CiTwitter } from "react-icons/ci";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css/bundle";

const Testimonial = () => {
  return (
    <section className="py-16 pb-32">
      <div className="container">
        <Swiper
          // install Swiper modules
          loop={true}
          slidesPerView={1}
          grabCursor={true}
          pagination={{
            clickable: true,
            el: "#testi-pagination",
          }}
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
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          //   navigation
          navigation={{
            prevEl: "#prevcategory",
            nextEl: "#nextcategory",
          }}
          autoplay={{
            delay: 3000,
          }}
          modules={[Navigation, A11y, Pagination, Autoplay]}
          spaceBetween={30}
          className="testimonial-slider"
        >
          <SwiperSlide>
            <div className="flex flex-col justify-center items-start gap-3 h-[520px]">
              <div className="bg-neutral-200 flex justify-center items-end w-full h-full">
                <img src="/images/testimonial1.png" alt="testimonial image" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">Tom Cruise</h3>
                <p>Founder & Chairman</p>
                <div className="flex justify-start items-center gap-4">
                  <span>
                    <CiTwitter size={25} />
                  </span>
                  <span>
                    <AiOutlineInstagram size={25} />
                  </span>
                  <span>
                    <BiLogoLinkedin size={25} />
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-start gap-3 h-[520px]">
              <div className="bg-neutral-200 flex justify-center items-end w-full h-full">
                <img src="/images/testimonial2.png" alt="testimonial image" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">Emma Watson</h3>
                <p>Managing Director</p>
                <div className="flex justify-start items-center gap-4">
                  <span>
                    <CiTwitter size={25} />
                  </span>
                  <span>
                    <AiOutlineInstagram size={25} />
                  </span>
                  <span>
                    <BiLogoLinkedin size={25} />
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-start gap-3 h-[520px]">
              <div className="bg-neutral-200 flex justify-center items-end w-full h-full">
                <img src="/images/testimonial3.png" alt="testimonial image" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">Will Smith</h3>
                <p>Product Designer</p>
                <div className="flex justify-start items-center gap-4">
                  <span>
                    <CiTwitter size={25} />
                  </span>
                  <span>
                    <AiOutlineInstagram size={25} />
                  </span>
                  <span>
                    <BiLogoLinkedin size={25} />
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-start gap-3 h-[520px]">
              <div className="bg-neutral-200 flex justify-center items-end w-full h-full">
                <img src="/images/testimonial2.png" alt="testimonial image" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">Emma Watson</h3>
                <p>Product Designer</p>
                <div className="flex justify-start items-center gap-4">
                  <span>
                    <CiTwitter size={25} />
                  </span>
                  <span>
                    <AiOutlineInstagram size={25} />
                  </span>
                  <span>
                    <BiLogoLinkedin size={25} />
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-start gap-3 h-[520px]">
              <div className="bg-neutral-200 flex justify-center items-end w-full h-full">
                <img src="/images/testimonial3.png" alt="testimonial image" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">Will Smith</h3>
                <p>Product Designer</p>
                <div className="flex justify-start items-center gap-4">
                  <span>
                    <CiTwitter size={25} />
                  </span>
                  <span>
                    <AiOutlineInstagram size={25} />
                  </span>
                  <span>
                    <BiLogoLinkedin size={25} />
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div>
          <div
            id="testi-pagination"
            className="py-12 flex justify-center items-center gap-4"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
