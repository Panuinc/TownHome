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
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: "100px",
};

export default function Gallery() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
      <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-[#92CA68] text-2xl font-[900]">
        Gallery
      </div>
      <div className=" flex-row items-center justify-center w-full h-full p-2 gap-2">
        <Slider {...settings}>
          <div className="relative flex items-center justify-center w-full h-full p-2">
            <Image
              src="/images/townhome/model_3.jpg"
              alt="home"
              width={800}
              height={600}
              priority={true}
              layout="responsive"
              className="object-contain w-full min-h-96"
            />
          </div>
          <div className="relative flex items-center justify-center w-full h-full p-2">
            <Image
              src="/images/townhome/model_4.jpg"
              alt="home"
              width={800}
              height={600}
              priority={true}
              layout="responsive"
              className="object-contain w-full min-h-96"
            />
          </div><div className="relative flex items-center justify-center w-full h-full p-2">
            <Image
              src="/images/townhome/model_5.jpg"
              alt="home"
              width={800}
              height={600}
              priority={true}
              layout="responsive"
              className="object-contain w-full min-h-96"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
