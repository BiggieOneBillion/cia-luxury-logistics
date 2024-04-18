import { dbConnect } from "@/libs/db";
import { NextResponse } from "next/server";
import VehicleInfo from "@/models/VehicleModel";
import { addVehicleSchema } from "@/utils/validations/addVehicleValidation";

export async function GET() {
  try {
    await dbConnect();

    const vehicleInfo = await VehicleInfo.find();

    // console.log(vehicleInfo);

    if (vehicleInfo) {
      return NextResponse.json({ result: vehicleInfo });
    }
    return NextResponse.json({ error: "Network Error" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ errors: error });
  }
}