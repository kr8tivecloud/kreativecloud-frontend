import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string({ required_error: "First name is required" })
    .min(1, "First name is required"),
  lastName: z
    .string({ required_error: "Last name is required" })
    .min(1, "Last name is required"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Please provide a valid email address"),
  phone: z
    .string({ required_error: "Phone number is required" })
    .min(1, "Phone number is required"),
  businessName: z.string().optional(),
  services: z.array(z.string()).optional(),
  message: z
    .string({ required_error: "Message is required" })
    .min(1, "Message is required"),
});
