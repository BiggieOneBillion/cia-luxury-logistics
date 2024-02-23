import { z } from 'zod';


export const orderSchema = z.object({
    email: z.string().email(),
    order: z.string().min(24).max(24)
});

export const footerFormSchema = z.object({
     email: z.string().email(),
     fullname: z.string().min(3).max(30),
     message: z.string().min(5)
})