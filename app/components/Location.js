"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  MapOutlined,
  EditLocationOutlined,
  AddRoadOutlined,
  LocalMallOutlined,
  SchoolOutlined,
  LocalHospitalOutlined,
  DirectionsSubwayFilledOutlined,
} from "@mui/icons-material";

function Listlocation({ text }) {
  return (
    <div className="flex items-center justify-start w-full h-full xl:w-5/12 p-2 gap-2 text-[#999999] text-md font-[600] hover:text-[#000000]">
      ● {text}
    </div>
  );
}

export default function Location() {
  const [activeSection, setActiveSection] = useState("highway");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 bg-[#FFFFFF]">
      <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
        <div className="flex flex-col items-center justify-center w-full h-full xl:w-4/12 p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#92CA68] text-2xl font-[900]">
            Location
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-[#000000] text-md font-[600]">
            Chinnakhet - Ngamwongwan
          </div>
          <div className="flex flex-row items-center justify-start w-full h-full p-2 gap-2 mt-10">
            <Link
              href="/images/townhome/map_1.jpg"
              target="_black"
              className="flex items-center justify-center h-full p-2 gap-2"
            >
              <MapOutlined />
              <p className="border-b-2 border-[#000000] text-[#000000] text-md font-[600]">
                GRAPHIC MAP
              </p>
            </Link>
            <Link
              href="https://www.google.com/maps/place/%E0%B8%97%E0%B8%B2%E0%B8%A7%E0%B8%99%E0%B9%8C%E0%B9%82%E0%B8%AE%E0%B8%A1+%E0%B8%8A%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%82%E0%B8%95/@13.861989,100.559323,16z/data=!4m6!3m5!1s0x30e29d89e911a9d3:0xddb1e17eccde7aea!8m2!3d13.8619888!4d100.5593232!16s%2Fg%2F11w95mgs_6?hl=th&entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_black"
              className="flex items-center justify-center h-full p-2 gap-2"
            >
              <EditLocationOutlined />
              <p className="border-b-2 border-[#000000] text-[#000000] text-md font-[600]">
                GET DIRECTION
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full xl:w-6/12 p-2 gap-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.6174161800313!2d100.55674827485807!3d13.861988786541499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d89e911a9d3%3A0xddb1e17eccde7aea!2z4LiX4Liy4Lin4LiZ4LmM4LmC4Liu4LihIOC4iuC4tOC4meC5gOC4guC4lQ!5e0!3m2!1sth!2sth!4v1728635372581!5m2!1sth!2sth"
            width="1920"
            height="250"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded-3xl"
            // style={{ filter: "grayscale(100%)" }}
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 overflow-auto">
        <div className="flex flex-row items-center justify-between w-full h-full xl:w-10/12 gap-2 border-b-2 border-[#92CA68]">
          <div
            onClick={() => setActiveSection("highway")}
            className="flex items-center justify-center min-w-40 h-full p-2 gap-2 cursor-pointer hover:border-b-4 hover:border-[#92CA68] text-[#999999] text-md font-[600] hover:text-[#000000]"
          >
            <AddRoadOutlined /> ทางด่วน
          </div>
          <div
            onClick={() => setActiveSection("mall")}
            className="flex items-center justify-center min-w-40 h-full p-2 gap-2 cursor-pointer hover:border-b-4 hover:border-[#92CA68] text-[#999999] text-md font-[600] hover:text-[#000000]"
          >
            <LocalMallOutlined /> ห้างสรรพสินค้า
          </div>
          <div
            onClick={() => setActiveSection("school")}
            className="flex items-center justify-center min-w-40 h-full p-2 gap-2 cursor-pointer hover:border-b-4 hover:border-[#92CA68] text-[#999999] text-md font-[600] hover:text-[#000000]"
          >
            <SchoolOutlined /> สถานศึกษา
          </div>
          <div
            onClick={() => setActiveSection("hospital")}
            className="flex items-center justify-center min-w-40 h-full p-2 gap-2 cursor-pointer hover:border-b-4 hover:border-[#92CA68] text-[#999999] text-md font-[600] hover:text-[#000000]"
          >
            <LocalHospitalOutlined /> สถานพยาบาล
          </div>
          <div
            onClick={() => setActiveSection("station")}
            className="flex items-center justify-center min-w-40 h-full p-2 gap-2 cursor-pointer hover:border-b-4 hover:border-[#92CA68] text-[#999999] text-md font-[600] hover:text-[#000000]"
          >
            <DirectionsSubwayFilledOutlined /> สถานนีรถไฟฟ้า
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
        {activeSection === "highway" && (
          <div className="flex flex-col xl:flex-row flex-wrap items-center justify-center w-full h-full xl:w-10/12 p-2 gap-2">
            <Listlocation text="ทางพิเศษศรีรัช ด่านงามวงศ์วาน" />
            <Listlocation text="ทางยกระดับอุตราภิมุข ด่านบางเขน" />
          </div>
        )}
        {activeSection === "mall" && (
          <div className="flex flex-col xl:flex-row flex-wrap items-center justify-center w-full h-full xl:w-10/12 p-2 gap-2">
            <Listlocation text="เดอะมอลล์ ไลฟ์สโตร์ งามวงศ์วาน" />
            <Listlocation text="พันธุ์ทิพย์ งามวงศ์วาน" />
            <Listlocation text="เออร์เบิน สแควร์" />
            <Listlocation text="แม็คโคร แจ้งวัฒนะ" />
          </div>
        )}
        {activeSection === "school" && (
          <div className="flex flex-col xl:flex-row flex-wrap items-center justify-center w-full h-full xl:w-10/12 p-2 gap-2">
            <Listlocation text="รร.ราชวินิตบางเขน" />
            <Listlocation text="รร.อนุบาล วณลักษณ์" />
            <Listlocation text="รร.เบญจมราชานุสรณ์" />
            <Listlocation text="รร.สาธิตแห่งมหาวิทยาลัยเกษตรศาสตร์" />
            <Listlocation text="ม.เกษตรศาสตร์" />
            <Listlocation text="ม.ธุรกิจบัณฑิต" />
          </div>
        )}
        {activeSection === "hospital" && (
          <div className="flex flex-col xl:flex-row flex-wrap items-center justify-center w-full h-full xl:w-10/12 p-2 gap-2">
            <Listlocation text="โรงพยาบาลนนทเวช" />
            <Listlocation text="โรงพยาบาลวิภาวดี" />
          </div>
        )}
        {activeSection === "station" && (
          <div className="flex flex-col xl:flex-row flex-wrap items-center justify-center w-full h-full xl:w-10/12 p-2 gap-2">
            <Listlocation text="รถไฟฟ้าสายสีแดง" />
            <Listlocation text="รถไฟฟ้าสายสีชมพู" />
          </div>
        )}
      </div>
    </div>
  );
}
