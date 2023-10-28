"use client";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { loginSchema } from "@/components/forms/formValidationSchema";
import axios from "axios";
import { Button, TextField } from "@/components";
import { useRouter } from "next/navigation";
import { parseCookies, setCookie } from "nookies";

type FormValues = {
  email: string;
  password: string;
};

export default function Layout() {
  const router = useRouter();
  useEffect(() => {
    const cookies = parseCookies();
    if (cookies["access"]) {
      router.push("/admin/dashboard");
    }
  }, []);
  const getUser = async (email: string, password: string) => {
    setLoginButtonToInvalid();
    const endpoint: string =
      `${
        process.env.SERVER_ENDPOINT ??
        "https://hmrs-management.onrender.com/api/v1"
      }/auth/login` ?? "";
    console.log(endpoint);
    const loginData = { email, password };

    try {
      const response = await axios.post(endpoint, loginData, {
        withCredentials: true,
      });

      const data = await response.data;
      return data;
    } catch (error) {
      // console.error("Error during login:", error);
      throw error;
    }
  };

  const [checked, setChecked] = useState(false);

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      getUser(values.email, values.password)
        .then((data) => {
          setCookie(null, "access", data.user.accessToken, {
            path: "/",
            maxAge: 60 * 60 * 24,
            // httpOnly: true,
          });
          router.push("/admin/dashboard");
        })
        .catch((error) => {
          // console.log(error);
          alert("Invalid Credentials");
        });
    },
  });

  const setLoginButtonToInvalid = () => {
    if (
      formik.errors.email ||
      formik.errors.password ||
      !formik.values.email ||
      !formik.values.password
    ) {
      return true;
    }
  };

  return (
    <main className="mx-auto flex min-h-screen w-11/12 flex-col justify-center font-inter md:w-2/3 lg:w-1/3">
      <Image
        src="/svg/app_name_logo.svg"
        alt="app logo"
        height={100}
        width={100}
        priority
        className="my-[2rem]"
      />

      <h2 className="font-lexend text-2xl font-bold">Welcome 👋 </h2>

      <form onSubmit={formik.handleSubmit} className="mt-4 flex flex-col gap-4">
        <TextField
          {...formik.getFieldProps("email")}
          label="email address"
          type="email"
          placeholder="email"
          error={
            formik.errors.email && formik.touched.email && formik.errors.email
          }
        />
        <TextField
          {...formik.getFieldProps("password")}
          label="Password"
          type="password"
          placeholder="password"
          error={
            formik.errors.password &&
            formik.touched.password &&
            formik.errors.password
          }
        />

        <Button
          type="submit"
          size="fullwidth"
          disabled={setLoginButtonToInvalid()}
          onClick={() => console.log("login")}
        >
          Login
        </Button>
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
