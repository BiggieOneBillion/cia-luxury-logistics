import { dbConnect } from "@/libs/db";
import { NextResponse } from "next/server";
import UserOrder from "@/models/UserOrder";


export async function POST(req, res) {
  const data = await req.json();

  // console.log(data);
  try {
    await dbConnect();

    // await UserOrder.findOne({email: data.email }, ( err, user) => {
    //     if (err) throw err;
    //     console.log(user);
    //     NextResponse.json({ userInfo: user})
    //   });

    const user = await UserOrder.find({ email: data.email });

    console.log(user);

    if (user) {
      // console.log(user);
      return NextResponse.json({ result: user });
    }

    console.log("error");
    return NextResponse.json({ error: "User does not exist" });

    //  return NextResponse.json({result: {"_id":{"$oid":"65b3813c963f5bfde7aa83f1"},"firstName":"basik","lastName":"johnson","email":"sand@gmail.com","pickupLocation":"omu george","dropoffLocation":"sand field","startDate":"21/04/2023","endDate":"29/05/2023","carsSelected":["toyota prado","toyota camry"]}});
  } catch (error) {
    console.log(error);
    return NextResponse.json({ errors: "This is not right" });
  }

  // return NextResponse.json({result: data })
}

export async function GET(){
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
