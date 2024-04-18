import nodemailer from "nodemailer";
// import * as handlebars from "handlebars/runtime";
// import { welcometemplate } from "./template/welcome";

export async function sendMail({
  to,
  name,
  subject,
  body,
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    // console.log(testResult);
  } catch (error) {
    // console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
    // console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}

export function compileWelcomeTemplate(name) {
  // const template = handlebars.compile(welcometemplate);
  // // const htmlBody = template({
  // //   name: name,
  // // });
  const htmlBody = `
  <h1>Welcome to CiaLuxury, ${name}</h1>
  <p>Hurray!!..You are almost done with your order!</p>
  <p>Below is your order Id, simply go to the order page, fill the form to view your order and make payment to the bank account stated there.  </p>
  `
  return htmlBody;
}