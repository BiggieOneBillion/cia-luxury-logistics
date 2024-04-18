import { dbConnect } from "@/libs/db";
import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import mongoose from "mongoose";
import { getJwtSecretKey } from "@/libs/auth";
import UserOrder from "@/models/UserOrder";

export async function POST(req, res) {
  const data = await req.json();

  try {
    await dbConnect();

    // Access the Collection
    const collectionName = "admin"; // Specify the collection name
    const collection = mongoose.connection.collection(collectionName);

    const user = await collection.findOne({ email: data.email });

    if (user) {
      // console.log("user details", user);
      if (data.password === user.password) {
        // console.log("User Exist in this life!!!");
        // construct the JWT token.
        const token = await new SignJWT({
          username: data.email,
        })
          .setProtectedHeader({ alg: "HS256" })
          .setIssuedAt()
          .setExpirationTime("30s")
          .sign(getJwtSecretKey());

        // Set cookies using NextResponse
        const response = NextResponse.json(
          { success: true },
          { status: 200, headers: { "content-type": "application/json" } }
        );
        response.cookies.set({
          name: "token",
          value: token,
          path: "/dashboard", 
          expires: 3000// optional: specify the path where the cookie is valid
          // other cookie options such as expires, maxAge, domain, secure, etc. can be set here
        });

        return response
      }
      return NextResponse.json({
        status: 404,
        error: "Password did not match",
      });
    }

    return NextResponse.json({ error: "User does not exist" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ errors: "This is not right" });
  }
}
