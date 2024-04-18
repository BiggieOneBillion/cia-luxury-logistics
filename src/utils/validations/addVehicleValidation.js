import { z } from "zod";


export const addVehicleSchema = z.object({
  category: z.string().min(3, { message: "Field cannot be empty" }),
  amount: z.number().gte(40000, { message: "Cannot be less than #40,000" }).lte(150000, {message: "Cannot be more than #150,000"}),
  brandName: z.string().min(1, { message: "Field cannot be empty" }),
  modelName: z.string().min(1, { message: "Field cannot be empty" }),
  seatCapacity: z.number().gte(4, { message: "Starts from 4 seaters" }).lte(30, {message: "Cannot be more than 30 seaters"}),
  fuelCapacity: z.number().gte(50, { message: "starts from 50ltrs" }).lte(100, {message: "Cannot be more than 100lts"}),
  driveTrain: z.string().min(1, { message: "Field cannot be empty" }),
});

	      

