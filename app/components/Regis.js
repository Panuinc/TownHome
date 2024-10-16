"use client";
import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Input, Button } from "@nextui-org/react";
import toast, { Toaster } from "react-hot-toast";

export default function Regis() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    regis_firstname: "",
    regis_lastname: "",
    regis_email: "",
    regis_tel: "",
  });

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  const validateTel = (value) => /^\d{10}$/.test(value.replace(/-/g, ""));

  const isEmailInvalid = useMemo(() => {
    return formData.regis_email ? !validateEmail(formData.regis_email) : false;
  }, [formData.regis_email]);

  const isTelInvalid = useMemo(() => {
    return formData.regis_tel ? !validateTel(formData.regis_tel) : false;
  }, [formData.regis_tel]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      isEmailInvalid ||
      isTelInvalid ||
      !formData.regis_firstname ||
      !formData.regis_lastname
    ) {
      toast.error("กรุณากรอกข้อมูลให้ถูกต้อง");
      return;
    }

    const form = new FormData();
    form.append("regis_firstname", formData.regis_firstname);
    form.append("regis_lastname", formData.regis_lastname);
    form.append("regis_email", formData.regis_email);
    form.append("regis_tel", formData.regis_tel);

    try {
      const response = await fetch("/api/regis", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        setTimeout(() => {
          router.push("/thank");
        }, 1000);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("เกิดข้อผิดพลาดขณะส่งฟอร์ม");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 bg-[#FFFFFF] border-2 border-[#000000]"
    >
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-[#000000] text-2xl font-[900]">
        Regis Now!
      </div>
      <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2">
        <div className="flex items-center justify-center w-full h-full xl:w-5/12 p-2 gap-2">
          <Input
            size="sm"
            type="text"
            label="ชื่อ"
            name="regis_firstname"
            value={formData.regis_firstname}
            onChange={handleChange}
            placeholder="ชื่อ*"
          />
        </div>
        <div className="flex items-center justify-center w-full h-full xl:w-5/12 p-2 gap-2">
          <Input
            size="sm"
            type="text"
            label="นามสกุล"
            name="regis_lastname"
            value={formData.regis_lastname}
            onChange={handleChange}
            placeholder="นามสกุล*"
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2">
        <div className="flex items-center justify-center w-full h-full xl:w-5/12 p-2 gap-2">
          <Input
            size="sm"
            type="email"
            label="อีเมลล์"
            name="regis_email"
            value={formData.regis_email}
            onChange={handleChange}
            isInvalid={isEmailInvalid}
            color={isEmailInvalid ? "danger" : "default"}
            errorMessage="กรุณากรอกอีเมลล์ที่ถูกต้อง"
            placeholder="อีเมลล์*"
          />
        </div>
        <div className="flex items-center justify-center w-full h-full xl:w-5/12 p-2 gap-2">
          <Input
            size="md"
            type="text"
            label="เบอร์โทรศัพท์"
            name="regis_tel"
            value={formData.regis_tel}
            onChange={handleChange}
            isInvalid={isTelInvalid}
            color={isTelInvalid ? "danger" : "default"}
            errorMessage="เบอร์โทรศัพท์ต้องมี 10 หลัก"
            placeholder="เบอร์โทรศัพท์มือถือ 10 หลัก* (เช่น 0123456789)"
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2">
        <Button type="submit" className="bg-[#000000] text-[#FFFFFF]">
          ลงทะเบียน
        </Button>
      </div>
    </form>
  );
}
