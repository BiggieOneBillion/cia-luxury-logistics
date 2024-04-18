import { dbConnect } from "@/libs/db";
import { NextResponse } from "next/server";
import UserOrder from "@/models/UserOrder";
import VehicleInfo from "@/models/VehicleModel";

export async function POST(req, res) {
  const data = await req.json();

  try {
    // trying to connect to DB.
    try {
      await dbConnect();
    } catch (error) {
      return NextResponse.json(
        { status: 403, error: "Database Error" },
        { status: 403 }
      );
    }

    const user = await UserOrder.findById(data.order);

    if (user && user.email === data.email) {
      // console.log(user);
      const result  = await VehicleInfo.find();
      console.log(result);
      return NextResponse.json({ result: user });
    }

    // console.log("error");
    return NextResponse.json(
      { status: 402, error: "User does not exist" },
      { status: 402 }
    );

    //  return NextResponse.json({result: {"_id":{"$oid":"65b3813c963f5bfde7aa83f1"},"firstName":"basik","lastName":"johnson","email":"sand@gmail.com","pickupLocation":"omu george","dropoffLocation":"sand field","startDate":"21/04/2023","endDate":"29/05/2023","carsSelected":["toyota prado","toyota camry"]}});
  } catch (error) {
    console.log(error);
    return NextResponse.json({ errors: "This is not right" });
  }

  // return NextResponse.json({result: data })
}

export async function GET() {
  try {
    await dbConnect();

    const user = await UserOrder.find();

    // console.log(user);

    if (user) {
      return NextResponse.json({ result: user });
    }
    return NextResponse.json({ error: "User does not exist" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ errors: error });
  }
}
