"use client";
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

export default function Gallery() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-[#000000]">
      <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-[#000000] text-2xl font-[900]">
        Gallery
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
        <div className="w-full h-full xl:w-10/12 p-2 gap-2">
          <Slider {...settings}>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2">
              <div className="relative w-full h-full flex items-center justify-center p-2 gap-2">
                <Image
                  src="/images/townhome/model_3.jpg"
                  alt="home"
                  width={800}
                  height={600}
                  priority={true}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2">
              <div className="relative w-full h-full flex items-center justify-center p-2 gap-2">
                <Image
                  src="/images/townhome/model_4.jpg"
                  alt="home"
                  width={800}
                  height={600}
                  priority={true}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2">
              <div className="relative w-full h-full flex items-center justify-center p-2 gap-2">
                <Image
                  src="/images/townhome/model_5.jpg"
                  alt="home"
                  width={800}
                  height={600}
                  priority={true}
                  className="object-contain"
                />
              </div>
            </div>

          </Slider>
        </div>
      </div>
    </div>
  );
}
