import * as Yup from "yup";
import { z } from "zod";

export const loginSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "invalid email address",
    )
    .required("no email provided"),
  password: Yup.string()
    .required("No password provided")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z\d]/, "Password can only contain Latin letters."),
});

export const resetPasswordSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "invalid email address",
    )
    .required("no email provided"),
});

export const registerSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name must be 3 or more characters long" }),
  email: z
    .string({ required_error: "E  mail is required" })
    .email("Enter a valid e-mail address"),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "Password is too short - should be 8 chars minimum.")
    .regex(/[a-zA-Z\d]/, "Password can only contain Latin letters."),
});
