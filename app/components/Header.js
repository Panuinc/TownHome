"use client";
import React, { useState } from "react";

export default function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full mt-2 gap-2">
      <div className="flex flex-col items-center justify-center h-full p-2 gap-2 border-2 border-[#43544A] bg-[#43544A]">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-[#FFFFFF] text-sm font-[300]">
          TownHome
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-[#FFFFFF] text-sm font-[300]">
          Chinnakhet - Ngamwongwan
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-full h-full p-2 gap-2 overflow-auto text-[#FFFFFF] bg-[#8eaf8c]">
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center justify-center min-w-40 h-full p-2 gap-2 hover:border-b-2 hover:border-[#FFFFFF] text-md font-[600]"
        >
          หน้าหลัก
        </div>
        <div
          onClick={() => scrollToSection("idea")}
          className="flex items-center justify-center min-w-40 h-full p-2 gap-2 hover:border-b-2 hover:border-[#FFFFFF] text-md font-[600]"
        >
          แนวคิดโครงการ
        </div>
        <div
          onClick={() => scrollToSection("gallery")}
          className="flex items-center justify-center min-w-40 h-full p-2 gap-2 hover:border-b-2 hover:border-[#FFFFFF] text-md font-[600]"
        >
          แกลเลอรี่
        </div>
        <div
          onClick={() => scrollToSection("model")}
          className="flex items-center justify-center min-w-40 h-full p-2 gap-2 hover:border-b-2 hover:border-[#FFFFFF] text-md font-[600]"
        >
          แบบบ้าน
        </div>
        <div
          onClick={() => scrollToSection("house-model")}
          className="flex items-center justify-center min-w-40 h-full p-2 gap-2 hover:border-b-2 hover:border-[#FFFFFF] text-md font-[600]"
        >
          ที่ตั้ง
        </div>
        <div
          onClick={() => scrollToSection("regis")}
          className="flex items-center justify-center min-w-40 h-full p-2 gap-2 hover:border-b-2 hover:border-[#FFFFFF] text-md font-[600]" 
        >
          ลงทะเบียน
        </div>
      </div>
    </div>
  );
}
