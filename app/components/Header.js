"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); 
    }
  };

  return (
<div className="w-full p-2 header">
  <div className="flex items-center justify-between w-full h-full p-2">
    <div className="flex items-center justify-center w-full h-full p-2">
      <Image
        src="/images/logo/logo.jpg"
        alt="home"
        width={100}
        height={100}
        priority={true}
      />
    </div>
    <button
      className="md:hidden block text-black"
      onClick={() => setIsOpen(!isOpen)}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  </div>

  <div
    className={`${
      isOpen ? "block" : "hidden"
    } md:flex flex-col md:flex-row items-center justify-center w-full gap-2`}
  >
    <button
      onClick={() => scrollToSection("home")}
      className="flex items-center justify-center w-full h-full p-2"
    >
      หน้าหลัก
    </button>
    <button
      onClick={() => scrollToSection("idea")}
      className="flex items-center justify-center w-full h-full p-2"
    >
      แนวคิดโครงการ
    </button>
    <button
      onClick={() => scrollToSection("gallery")}
      className="flex items-center justify-center w-full h-full p-2"
    >
      แกลเลอรี่
    </button>
    <button
      onClick={() => scrollToSection("house-model")}
      className="flex items-center justify-center w-full h-full p-2"
    >
      แบบบ้าน
    </button>
    <button
      onClick={() => scrollToSection("location")}
      className="flex items-center justify-center w-full h-full p-2"
    >
      ที่ตั้งโครงการ
    </button>
    <button
      onClick={() => scrollToSection("regis")}
      className="flex items-center justify-center w-full h-full p-2"
    >
      ลงทะเบียน
    </button>
  </div>
</div>
  );
}
