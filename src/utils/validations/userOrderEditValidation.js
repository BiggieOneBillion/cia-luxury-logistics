import { z } from "zod";

export const userOrderEditSchema = z
  .object({
    firstName: z.string().min(1, { message: "" }),
    lastName: z.string().min(1, { message: "" }),
    email: z.string().email(),
    pickupLocation: z.string().min(1, { message: "" }),
    dropoffLocation: z.string().min(1, { message: "" }),
    startDate: z.coerce
      .date()
      .transform((val) => val.toISOString().split("T")[0]),
    endDate: z.coerce
      .date()
      .transform((val) => val.toISOString().split("T")[0]),
    //   endDate: z.coerce.date().refine(
    //     (value, data) => {
    //       return value > data.startDate;
    //     },
    //     {
    //       message: "End date must be greater than the start date.",
    //     }
    //   ),
  })
  .refine(
    (data) => {
      return data.endDate >= data.startDate;
    },
    {
      message: "End date must be greater than the start date.",
      path: ["endDate"],
    }
  );

export const userEditSchema = z.object({
  firstName: z.string().min(1, { message: "First Name Cannot Be Blank" }),
  lastName: z.string().min(1, { message: "Last Name Cannot Be Blank" }),
  email: z.string().email(),
});
