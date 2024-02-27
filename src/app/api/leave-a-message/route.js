import { NextResponse } from "next/server";
import { dbConnect } from "@/libs/db";
import messageModel from "@/models/leaveAMessage";
import { userMessageValidation } from "@/utils/validations/userMessageValidation";
import { Resend } from "resend";
import { sendMail} from "@/libs/mail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const data = await req.json();

  try {
    // connect to database
    const conn = await dbConnect();
    // validate the user information using zod
    if (userMessageValidation.safeParse(data).success) {
      // If true, then destructure the data variable
      let { fullName, email, message } = data;

      console.log(data);
      // Create new entry from the data and save to the database
      const userMessage = new messageModel({
        fullName,
        email,
        message,
      });

      const saveInfo = await userMessage.save();

      console.log("saveinfo : ", saveInfo);

      await sendMail({
        to: email, // change it to dynamic instead of static---get it from the destructured data variable.
        name: "Raymond",
        subject: "Welcome Sir",
        body: `
        <h1>Welcome to CiaLuxury.</h1>
        <h2> Dear ${fullName}, </h2>
        <p>Thank you for reaching out to us for your logistics needs!</p>
        <p>We are currently processing your request.</p>
        <p>We would get back to you asap!</p>
        `,
      });

      // Send a success response if everything goes as planned
      return NextResponse.json({ result: "successful" });
    }

    // If validation fails then set the status code to 400 and write the error message
    return NextResponse.json(
      {
        error: "Validation Error",
        ok: false,
      },
      { status: 400 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }

}
