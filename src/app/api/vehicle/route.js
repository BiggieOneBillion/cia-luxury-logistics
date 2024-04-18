import { dbConnect } from "@/libs/db";
import { NextResponse } from "next/server";
import VehicleInfo from "@/models/VehicleModel";
import { addVehicleSchema } from "@/utils/validations/addVehicleValidation";

export async function POST(req, res) {
  const data = await req.json();

  try {
    //1. Validate the data coming from the front-end
    if (!addVehicleSchema.safeParse(data).success) {
      return NextResponse.json(
        { error },
        { status: 400, message: "Validation Error" }
      );
    }
    //2. connect to database
    try {
      const conn = await dbConnect();
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error }, { status: 500, message: error });
    }

    // try {

    // } catch (error) {

    // }

    // console.log(data);
    const {
      brandName,
      modelName,
      seatCapacity,
      fuelCapacity,
      driveTrain,
      amount,
      category,
    } = data;

    // Create new entry from the data and save to the database
    const vehicle = new VehicleInfo({
      brandName,
      modelName,
      seatCapacity,
      fuelCapacity,
      driveTrain,
      amount,
      category,
    });
    // console.log(vehicle);
    try {
      const vehicleInfo = await vehicle.save();
      console.log(vehicleInfo);

      return NextResponse.json({ result: "successful" });
    } catch (error) {
      return NextResponse.json({ error }, { status: 400, message: error });
    }

    // If validation fails then set the status code to 400 and write the error message
    // return NextResponse.json(
    //   {
    //     error: "Validation Error",
    //     ok: false,
    //   },
    //   { status: 400 }
    // );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}

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

export async function PUT(req, res) {
  const data = await req.json();

  const checkedData = { ...data };
  delete checkedData._id;

  try {
    //1. Validate the data coming from the front-end
    if (addVehicleSchema.safeParse(checkedData).success === false) {
      return NextResponse.json(
        { error },
        { status: 400, message: "Validation Error" }
      );
    }
    //2. connect to database
    try {
      const conn = await dbConnect();
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { error },
        { status: 500, message: "DB Connection Error" }
      );
    }

    try {
      const result = await VehicleInfo.findByIdAndUpdate(data._id, checkedData);
      console.log(result);
      return NextResponse.json({ result: "successful" });
    } catch (error) {
      return NextResponse.json(
        { error },
        { status: 400, message: "Not Updated" }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}

export async function DELETE(req, res) {
  const data = req.json();
  const result = req.params();
  console.log(data._id);
  // Check if _id exist in the data sent from the frontend.
  if (data._id == "" || data._id == null || data._id == undefined) {
    return;
  }

  //1. connect to database
  try {
    const conn = await dbConnect();
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error },
      { status: 500, message: "DB Connection Error" }
    );
  }

  // Check if the _id matches any entry in the database 
  try {
    const result = VehicleInfo.findById(data._id);
    if (!result) {
      return NextResponse.json(
        { error },
        { status: 400, message: "No document found" }
      );
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500, message: error });
  }

  // Deletes the data with the _id provided.
  try {
    const result = VehicleInfo.findByIdAndDelete(data._id);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500, message: "N" });
  }
}
