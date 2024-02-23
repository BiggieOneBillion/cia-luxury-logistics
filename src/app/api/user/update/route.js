import { NextResponse } from "next/server";
import { dbConnect } from "@/libs/db";
import UserOrder from "@/models/UserOrder";
import axios from "axios";

export async function PATCH(req, res) {
  const data = await req.json();

  try {
    const conn = await dbConnect();
    const user = UserOrder.findById({ _id: data.id });

    if (!user) {
      return NextResponse.json({ error: "User does not exist" });
    }

    const updatedUser = await UserOrder.findOneAndUpdate(
      { _id: data.id },
      { paymentStatus: true },
      { new: true, runValidators: true }
    );

    return NextResponse.json({
      status: "Successful",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: "Error !!!!" });
  }
}
