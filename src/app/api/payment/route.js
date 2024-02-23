import { NextResponse } from "next/server";
import { dbConnect } from "@/libs/db";
import UserOrder from "@/models/UserOrder";
import axios from "axios";

export async function POST(req, res) {
  const data = await req.json();

  try {
    const conn = await dbConnect();
    const user = UserOrder.findById({ _id: data.id });

    if (!user) {
      return NextResponse.json({ error: "User does not exist" });
    }

    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email: "rchukwu94@gmail.com",
        amount: 320000,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.YOUR_SECRET_KEY}`,
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
      }
    );

    if (!response.data.status) {
      return NextResponse.json({ status: 400, error: "Paystack Error!!" });
    }

   return  NextResponse.json({
      status: "Successful",
      result: {
        data: response.data,
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: "Error !!!!" });
  }
}
