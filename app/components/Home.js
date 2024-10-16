import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-2 border-2 border-[#000000]">
      <div className="flex items-center justify-center w-full h-full gap-2">
        <Image
          src="/images/townhome/model_6.jpg"
          layout="responsive"
          alt="home"
          width={800}
          height={600}
          priority={true}
        />
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
        <div className="flex flex-col items-center justify-center w-full h-full xl:w-5/12 p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-[#000000] text-2xl font-[900]">
            TownHome Chinnakhet Modern style
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full xl:w-5/12 p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-sm font-[300]">
            เปิดพื้นที่ความสุขในบ้านที่ล้ำสมัย และความสุขที่เรียบง่าย
            ตอบโจทย์บ้านหลังแรกสำหรับครอบครัว มอบพื้นที่ความสุขสำหรับทุกคนในบ้าน
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-md font-[600]">
            เริ่มต้นที่ 4.xx ล้านบาท
          </div>
        </div>
      </div>
    </div>
  );
}
