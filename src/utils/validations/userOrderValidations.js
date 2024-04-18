import { z } from "zod";

export const registrationSchema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  email: z.string().email(),
  pickupLocation: z.string().min(1),
  dropoffLocation: z.string().min(1),
  startDate: z.date(),
  endDate: z.date(),
  carsSelected: z.array(z.string()).refine((data) => data.length > 0, {
    message: "Must have at least one vehicle selected",
  }),
});

const isValidTel = (val) => {
  // You can use any custom logic here to validate the telephone number
  return /^\d{11}$/i.test(val); // Example: Validate if it's a 10-digit number
};

export const userDetailsSchema = z.object({
  firstname: z.string().min(1, { message: "Please Enter Your First Name" }),
  lastname: z.string().min(1, { message: "Please Enter Your Last Name" }),
  email: z.string().email().min(1, { message: "Please Enter Your Email" }),
  pickUpLocation: z
    .string()
    .min(1, { message: "Please Enter Your Pick Up Location" }),
  dropOffLocation: z
    .string()
    .min(1, { message: "Please Enter Your Drop Off Location" }),
  phoneNumber: z
    .string()
    .refine((val) => !isNaN(Number(val)), {
      message: "Please enter a valid phone number",
    })
    .refine((val) => val.trim().length > 0, {
      message: "Please enter a telephone number",
    })
    .refine((val) => isValidTel(val), {
      message: "Please enter a valid telephone number (11 digits)",
    }),
});
