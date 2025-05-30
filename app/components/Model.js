import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowOutward,
  SpaceDashboardOutlined,
  ZoomOutMapOutlined,
  KingBedOutlined,
  BathtubOutlined,
  ChairOutlined,
  DirectionsCarFilledOutlined,
} from "@mui/icons-material";

export default function Model() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 bg-[#FFFFFF]">
      <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-[#92CA68] text-2xl font-[900]">
        House Model
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
        <div className="flex flex-col items-center justify-center w-full h-full xl:w-6/12 p-2 gap-2">
          <Image
            src="/images/townhome/model_2.jpg"
            layout="responsive"
            alt="home"
            width={800}
            height={600}
            priority={true}
            className="rounded-3xl"
            // style={{ filter: "grayscale(100%)" }}
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full xl:w-4/12 p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-2xl font-[900]">
            แบบบ้าน 3 ห้องนอน
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-md font-[600]">
            3 ห้องนอน | 3 ห้องน้ำ | 1 ห้องรับแขก | 2 ที่จอดรถ
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-xl font-[300]">
            <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-xl font-[300]">
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-xl font-[300]">
                <SpaceDashboardOutlined className="text-[#92CA68]"/> พื้นที่ใช้สอย
              </div>
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-xl font-[300]">
                156 ตร.ม.
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-xl font-[300]">
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-xl font-[300]">
                <ZoomOutMapOutlined className="text-[#92CA68]"/> ขนาดที่ดิน
              </div>
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-xl font-[300]">
                32 ตร.ว.
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-xl font-[300]">
            <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-xl font-[300]">
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-xl font-[300]">
                <KingBedOutlined className="text-[#92CA68]"/>3 ห้องนอน
              </div>
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-xl font-[300]">
                <BathtubOutlined className="text-[#92CA68]"/>3 ห้องน้ำ
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-xl font-[300]">
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-xl font-[300]">
                <ChairOutlined className="text-[#92CA68]"/> 1 ห้องรับแขก
              </div>
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-xl font-[300]">
                <DirectionsCarFilledOutlined className="text-[#92CA68]"/> 2 ที่จอดรถ
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-xl font-[300]">
            <Link
              href="/images/townhome/floor_1.png"
              target="_black"
              className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-md font-[600]"
            >
              <ArrowOutward className="text-[#92CA68]"/>
              Floor 1
            </Link>
            <Link
              href="/images/townhome/floor_2.png"
              target="_black"
              className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-md font-[600]"
            >
              <ArrowOutward className="text-[#92CA68]"/>
              Floor 2
            </Link>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-sm text-[300]">
            *บริษัทฯ ขอสงวนสิทธิ์ในการเปลี่ยนแปลงและรายละเอียดตามความเหมาะสม
            โดยไม่ต้องแจ้งให้ทราบล่วงหน้า
          </div>
        </div>
      </div>
    </div>
  );
}
