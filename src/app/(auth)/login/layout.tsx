"use client";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { loginSchema } from "@/components/forms/formValidationSchema";

import { Button, TextField } from "@/components";

type FormValues = {
  email: string;
  password: string;
};

export default function Layout() {
  const pathname = usePathname().slice(7);
  const [checked, setChecked] = useState(false);

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <main className="font-inter mx-auto flex min-h-screen w-11/12 flex-col justify-center md:w-2/3 lg:w-1/3">
      <Image
        src="/svg/app_name_logo.svg"
        alt="app logo"
        height={100}
        width={100}
        priority
        className="my-[2rem]"
      />

      <h2 className="font-lexend text-2xl font-bold">Welcome 👋 </h2>
      <Link
        href={`/login/${pathname == "admin" ? "employee" : "admin"}`}
        className="mt-4 w-fit text-sm text-primary-500 hover:underline"
      >
        Login as {pathname === "admin" ? "Employee" : "Admin"} here
      </Link>
      <form onSubmit={formik.handleSubmit} className="mt-4 flex flex-col gap-4">
        <TextField
          {...formik.getFieldProps("email")}
          label="email address"
          type="email"
          placehoder="email"
          error={
            formik.errors.email && formik.touched.email && formik.errors.email
          }
        />
        <TextField
          {...formik.getFieldProps("password")}
          label="Password"
          type="password"
          placehoder="password"
          error={
            formik.errors.password &&
            formik.touched.password &&
            formik.errors.password
          }
        />

        <Button type="submit">Login</Button>
        <div className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={checked}
            id=""
            className="h-4 w-4 cursor-pointer checked:accent-primary-500"
            onChange={() => setChecked((prev) => !prev)}
          />
          <p>Remember Me</p>
          <Link
            href={"/reset-password"}
            className="ml-auto text-primary-500 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
      </form>
    </main>
  );
}
