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
    <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 bg-[#FFFFFF] border-2 border-[#000000]">
      <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-[#000000] text-2xl font-[900]">
        House Model
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
        <div className="flex flex-col items-center justify-center w-full h-full xl:w-6/12 p-2 gap-2">
          <Image
            src="/images/townhome/model_1.jpg"
            layout="responsive"
            alt="home"
            width={800}
            height={600}
            priority={true}
            className="rounded-3xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full xl:w-4/12 p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-2xl text-[900]">
            แบบบ้าน 3 ห้องนอน
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-md text-[600]">
            3 ห้องนอน | 3 ห้องน้ำ | 1 ห้องรับแขก | 2 ที่จอดรถ
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-md text-[600]">
            <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-md text-[600]">
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-md text-[600]">
                <SpaceDashboardOutlined /> พื้นที่ใช้สอย
              </div>
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-md text-[600]">
                156 ตร.ม.
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-md text-[600]">
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-md text-[600]">
                <ZoomOutMapOutlined /> ขนาดที่ดิน
              </div>
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-md text-[600]">
                32 ตร.ว.
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-md text-[600]">
            <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-md text-[600]">
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-md text-[600]">
                <KingBedOutlined />3 ห้องนอน
              </div>
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-md text-[600]">
                <BathtubOutlined />3 ห้องน้ำ
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-md text-[600]">
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-md text-[600]">
                <ChairOutlined /> 1 ห้องรับแขก
              </div>
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-md text-[600]">
                <DirectionsCarFilledOutlined /> 2 ที่จอดรถ
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-md text-[600]">
            <Link
              href="/images/townhome/floor_1.png"
              target="_black"
              className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-md text-[600]"
            >
              <ArrowOutward />
              Floor 1
            </Link>
            <Link
              href="/images/townhome/floor_2.png"
              target="_black"
              className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-md text-[600]"
            >
              <ArrowOutward />
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
