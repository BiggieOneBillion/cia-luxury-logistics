import { NextResponse } from "next/server";
import { dbConnect } from "@/libs/db";
import UserOrder from "@/models/UserOrder";
import { registrationSchema } from "../../../utils/validations/userOrderValidations";
import { EmailTemplate } from "../../../components/EmailTemplate/Email-template";
import { Resend } from "resend";
import { sendMail, compileWelcomeTemplate } from "@/libs/mail";
import { userOrderEditSchema } from "@/utils/validations/userOrderEditValidation";

const resend = new Resend(process.env.RESEND_API_KEY);

export function GET() {
  const conn = dbConnect();
  return NextResponse.json({ result: "hello boss!!!" });
}

export async function POST(req, res) {
  const data = await req.json();
  // console.log(registrationSchema.safeParse(data));
  // return NextResponse.json({data})

  // Change date string from '2024-02-22T23:00:00.000Z' to '2024-02-23'
  function handleChangeDateForm(dateString) {
    const date = new Date(dateString);
    const offset = date.getTimezoneOffset() * 60000;
    const localDate = new Date(date.getTime() - offset);
    const formattedDate = localDate.toISOString().split("T")[0];
    return formattedDate;
  }
  try {
    // connect to database
    const conn = await dbConnect();
    // validate the user information using zod
    // if (registrationSchema.safeParse(data).success) {
    // If true, then destructure the data variable
    let { firstname, lastname, email } = data;

    // console.log(data);
    // Create new entry from the data and save to the database
    const user = new UserOrder({
      firstName: firstname,
      lastName: lastname,
      email,
      pickupLocation: data.pickUpLocation,
      dropoffLocation: data.dropOffLocation,
      startDate: handleChangeDateForm(data.startDates),
      endDate: handleChangeDateForm(data.endDate),
      carsSelected: data.carSelected,
      phoneNumber: data.phoneNumber,
      paymentStatus: false,
    });
    // console.log(user);
    try {
      const saveInfo = await user.save();
      // console.log(saveInfo);
      await sendMail({
        to: email, // change it to dynamic instead of static---get it from the destructured data variable.
        name: "Raymond",
        subject: "Welcome Sir",
        // body:`<h1>Hello sir, we are happy to have you</h1>`
        // body: compileWelcomeTemplate(firstname)
        body: `
          <h1>Welcome to CiaLuxury, ${firstname}</h1>
          <p>Hurray!!..You are almost done with your order!</p>
          <p>Below is your order Id, simply go to the order page, fill the form to view your order and make payment to the bank account stated there.  </p>
          <p>Order ID: ${saveInfo._id} . </p>
          `,
      });
      return NextResponse.json({ result: "successful" });
    } catch (error) {
      return NextResponse.json({ error }, { status: 400, message: error });
    }

    // console.log("saveinfo : ",saveInfo._id);

    // const sendEmail = await resend.emails.send({
    //   from: 'Acme <cialuxuryfleet@resend.dev>',
    //   to: [data.email],
    //   subject: 'CIA lUXURY FLEET',
    //   react: EmailTemplate({ firstName: data.firstname}),
    // });

    // console.log(sendEmail);
    // Send a success response if everything goes as planned

    // }

    // If validation fails then set the status code to 400 and write the error message
    // return NextResponse.json(
    //   {
    //     error: "Validation Error",
    //     ok: false,
    //   },
    //   { status: 400 }
    // );
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ error });
  }

  // return NextResponse.json({
  //   res: "User not verified",
  // });
}

export async function PUT(req, res) {
  const data = await req.json();

  const checkedData = { ...data };
  delete checkedData._id;

  if (userOrderEditSchema.safeParse(checkedData).success === false) {
    return NextResponse.json(
      { error },
      { status: 400, message: "Validation Error" }
    );
  }

  try {
    // connect to database
    try {
      const conn = await dbConnect();
    } catch (error) {
      return NextResponse.json(
        { error },
        { status: 500, message: "Network Error!!" }
      );
    }

    try {
      const result = await UserOrder.findByIdAndUpdate(data._id, checkedData);
      // console.log(result);
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
