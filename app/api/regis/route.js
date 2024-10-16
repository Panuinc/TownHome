import { NextResponse } from "next/server";
import { mysqlPool } from "@/utils/db";

// POST DATA
export async function POST(request) {
  try {
    const formData = await request.formData();
    const regis_firstname = formData.get("regis_firstname");
    const regis_lastname = formData.get("regis_lastname");
    const regis_email = formData.get("regis_email");
    const regis_tel = formData.get("regis_tel");

    if (!regis_firstname || !regis_lastname || !regis_email || !regis_tel) {
      return NextResponse.json(
        { message: "Please Enter All Data." },
        { status: 400 }
      );
    }

    const promisePool = mysqlPool.promise();
    const [result] = await promisePool.query(
      `INSERT INTO regis (regis_firstname ,regis_lastname,regis_email,regis_tel) VALUES (?,?,?,?)`,
      [regis_firstname, regis_lastname, regis_email, regis_tel]
    );

    if (result.affectedRows === 1) {
      const lineNotifyToken = "WaLgK8aTyezx7pSwY52wu4neTJBXbl6Vqy3K5cCFNOz";
      const message = `รายชื่อผู้ร่วมลงทะเบียน\nชื่อ: ${regis_firstname} ${regis_lastname}\nอีเมล: ${regis_email}\nโทร: ${regis_tel}`;

      await fetch("https://notify-api.line.me/api/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${lineNotifyToken}`,
        },
        body: new URLSearchParams({
          message: message,
        }),
      });

      return NextResponse.json({ message: "ลงทะเบียนสำเร็จ" });
    } else {
      throw new Error("ลงทะเบียนไม่สำเร็จ");
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Error To Connect Database." },
      { status: 500 }
    );
  }
}
