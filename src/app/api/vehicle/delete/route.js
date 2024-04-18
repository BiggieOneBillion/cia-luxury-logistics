import { dbConnect } from "@/libs/db";
import { NextResponse } from "next/server";
import VehicleInfo from "@/models/VehicleModel";

export async function POST(req, res) {
  const data = await req.json();
  console.log(data._id);
  // Check if _id exist in the data sent from the frontend.
  if (data._id == "" || data._id == null || data._id == undefined) {
    return NextResponse.json({ status: 400, message: "No id avaliable" });
  }

  //1. connect to database
  try {
    const conn = await dbConnect();
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: "DB Connection Error" },
      { status: 500, message: "DB Connection Error" }
    );
  }

  // Check if the _id matches any entry in the database
  try {
    const result = await VehicleInfo.findById(data._id);
    if (!result) {
      return NextResponse.json(
        { error, message: "No document found" },
        { status: 400, message: "No document found" }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error, message: "can't find" },
      { status: 500, message: error }
    );
  }

  // Deletes the data with the _id provided.
  try {
    const result = await VehicleInfo.findByIdAndDelete(data._id);
    return NextResponse.json(
      { result },
      { status: 200, message: "successfully deleted" }
    );
  } catch (error) {
    return NextResponse.json(
      { error, message: "Not deleted" },
      { status: 500, message: "Not deleted" }
    );
  }
}
