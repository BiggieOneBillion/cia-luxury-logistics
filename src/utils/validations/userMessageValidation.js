import { z } from "zod";

export const userMessageValidation = z.object({
    fullName: z.string().min(1, { message: "First Name Cannot Be Blank" }),
    message: z.string().min(1, { message: "Last Name Cannot Be Blank" }),
    email: z.string().email(),
  });
  