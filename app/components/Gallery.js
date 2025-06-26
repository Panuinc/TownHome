"use client";
import React, { useState } from "react";
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
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        centerPadding: "0px",
      },
    },
  ],
};

export default function Gallery() {
  const [modalImage, setModalImage] = useState(null);
  const openModal = (src) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  const images = [
    "/images/townhome/model_3.jpg",
    "/images/townhome/model_4.jpg",
    "/images/townhome/model_5.jpg",
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
      <div className="flex items-center justify-center w-full p-2 text-[#92CA68] text-2xl font-[900]">
        Gallery
      </div>
      <div className="w-full p-2">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div
              key={index}
              className="relative p-2 cursor-pointer"
              onClick={() => openModal(src)}
            >
              <Image
                src={src}
                alt={`home-${index}`}
                width={800}
                height={600}
                priority={true}
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
                className="min-h-96"
              />
            </div>
          ))}
        </Slider>
      </div>

      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="max-w-5xl w-full px-4">
            <Image
              src={modalImage}
              alt="Expanded"
              width={1200}
              height={800}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
