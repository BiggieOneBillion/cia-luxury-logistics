import { z } from "zod";

export const orderSchema = z.object({
  email: z.string().email(),
  orderId: z
    .string()
    .min(24, { message: "Order Id must be 24 characters long" })
    .max(24, { message: "Order Id must be 24 characters long" }),
});

export const footerFormSchema = z.object({
  email: z.string().email(),
  fullname: z.string().min(3).max(30),
  message: z.string().min(5),
});

export const adminLoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .refine(
      (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/.test(
          value
        ),
      {
        message:
          "Password must contain at least one capital letter, one small letter, one number, and one symbol",
      }
    ),
});

export const addVehicleSchema = z.object({
  category: z.string().min(3, { message: "Field cannot be empty" }),
  amount: z.number().gte(40000, { message: "Cannot be less than #40,000" }).lte(150000, {message: "Cannot be more than #150,000"}),
  brandName: z.string().min(1, { message: "Field cannot be empty" }),
  modelName: z.string().min(1, { message: "Field cannot be empty" }),
  seatCapacity: z.number().gte(4, { message: "Starts from 4 seaters" }).lte(30, {message: "Cannot be more than 30 seaters"}),
  fuelCapacity: z.number().gte(50, { message: "starts from 50ltrs" }).lte(100, {message: "Cannot be more than 100lts"}),
  driveTrain: z.string().min(1, { message: "Field cannot be empty" }),
});
