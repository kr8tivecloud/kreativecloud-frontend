import { z } from "zod";

export const joinUsFormSchema = z.object({
  firstName: z
    .string({ required_error: "First name is required" })
    .min(1, "First name is required"),
  lastName: z
    .string({ required_error: "Last name is required" })
    .min(1, "Last name is required"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Please provide a valid email address"),
  phone: z.string().optional(),
  socialMedia: z
    .string({ required_error: "Social media is required" })
    .min(1, "Social media is required"),
  specialty: z
    .array(z.string())
    .min(1, { message: "Please select at least one specialty" })
    .default([]),
  portfolio: z
    .instanceof(File, { message: "Your portfolio is required" })
    .refine(
      (file) => {
        if (file) {
          return file.size <= 5 * 1024 * 1024;
        }
      },
      {
        // 5 MB limit
        message: "File size must be less than or equal to 5MB",
      }
    )
    .refine(
      (file) => {
        if (file) {
          return ["image/jpeg", "image/png", "application/pdf"].includes(
            file.type
          );
        }
      },
      {
        message: "Invalid file type. Allowed types: JPEG, PNG, PDF",
      }
    ),
});
