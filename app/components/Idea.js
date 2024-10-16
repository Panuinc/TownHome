import React from "react";
import Image from "next/image";

export default function Idea() {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 bg-[#FFFFFF]">
      <div className="flex flex-col items-center justify-center w-full h-full xl:w-5/12 p-2 gap-2">
        <div className="flex items-center justify-start w-full h-full p-2 gap-2">
          <Image
            src="/images/logo/logo.jpg"
            width={150}
            height={150}
            priority={true}
            alt="logo"
          />
        </div>
        <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#8eaf8c] text-md font-[600]">
          LESS IS MORE LIFE IS DESIGN
        </div>
        <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-sm font-[300]">
          สัมผัสชีวิตเหนือระดับในสไตล์ Modern เรียบหรู
          พร้อมฟังก์ชันการใช้งานที่ลงตัว ตอบโจทย์ทุกไลฟ์สไตล์ บนทำเลทอง
          ใกล้ทางด่วนพิเศษศรีรัชและอุตราภิมุข แวดล้อมด้วยสิ่งอำนวยความสะดวก เช่น
          เดอะมอลล์ งามวงศ์วาน พันธุ์ทิพย์ งามวงศ์วาน และโรงเรียนชั้นนำ
          การเดินทางสะดวกสบายด้วยรถไฟฟ้าสายสีแดงและสีชมพู
          พร้อมทั้งโรงพยาบาลชั้นนำรอบด้าน
          ให้ทุกวันของคุณเต็มไปด้วยความสมบูรณ์แบบและความสะดวกสบายในทุกมิติของการใช้ชีวิต
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full xl:w-5/12 p-2 gap-2">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <Image
            src="/images/townhome/model_5.jpg"
            layout="responsive"
            width={500}
            height={100}
            priority={true}
            alt="model_5"
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
