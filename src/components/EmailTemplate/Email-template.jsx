import * as React from "react";

export const EmailTemplate = ({ firstName }) => (
  <div className="space-y-10 text-black">
    <h1 className="text-3xl font-bold">Welcome, {firstName}!</h1>
    <p className="text-base font-normal">Your order has been recieved, please hold on as one of our agent will contact you shortly to verify and complete your order.</p>
  </div>
);
