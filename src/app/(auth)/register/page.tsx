"use client";
import { Button } from "@/components";
import { loginSchema } from "@/components/forms/formValidationSchema";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { axiosInstance } from "@/lib/axios";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useRouter } from "next/router";

type FormValues = {
  name: string;
  email: string;
  password: string;
  rememberMe: boolean;
};

export default function Register() {
  const registerSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    rememberMe: z.boolean(),
  });

  const registerUser = async (values: FormValues) => {
    const registerData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    try {
      const response = await axiosInstance.post(
        "/auth/register",
        registerData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );

      const data = await response.data;
      return data;
    } catch (err: any) {
      if (err.response && err.response.data) {
        const { status, message } = err.response.data;
        console.error(`Registration error (${status}):`, message);
        alert(`Registration failed: ${message}`);
      } else {
        console.error("Registration error:", err.message);
        alert("Registration failed. Please try again.");
      }
      throw err;
    }
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: toFormikValidationSchema(registerSchema),
    onSubmit: (values) => {
      registerUser(values)
        .then((data) => {
          console.log(data);
          alert("Please check your email for a confirmation code");
          const router = useRouter();
          setTimeout(() => router.push("/login"), 3000);
        })
        .catch((err) => {
          alert("Please try again");
          console.error(err);
        });
    },
  });

  return (
    <main className="flex flex-grow flex-col items-center justify-center gap-5">
      <Image
        src="/svg/app_name_logo.svg"
        alt="app logo"
        height={100}
        width={100}
        priority
      />

      <p className="text-2xl font-bold">Welcome 👋</p>
      <p>Please register here</p>
      <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        <section>
          <p className="text-primary-500">Full Name</p>
          <input
            {...formik.getFieldProps("name")}
            type="text"
            placeholder="name"
            className="min-h-[2.5rem] min-w-fit rounded-md border-2 border-primary-600 p-2 outline-none"
          />
        </section>
        <section>
          <p className="text-primary-500">Email address</p>
          <input
            {...formik.getFieldProps("email")}
            type="email"
            placeholder="email"
            className="min-h-[2.5rem] min-w-fit rounded-md border-2 border-primary-600 p-2 outline-none"
          />
        </section>
        <section>
          <p className="text-primary-500">Password</p>
          <input
            {...formik.getFieldProps("password")}
            placeholder="password"
            type="password"
            className="min-h-[2.5rem] min-w-fit rounded-md border-2 border-primary-600 p-2 outline-none"
          />
        </section>
        <Button size="medium" type="submit" onClick={() => {}}>
          Register
        </Button>

        <section className="flex text-sm">
          <p className="flex-1">
            <input
              {...formik.getFieldProps("rememberMe")}
              type="checkbox"
              className="h-4 w-4 cursor-pointer checked:accent-primary-500"
            />{" "}
            Remember me
          </p>
          <Link href={`/reset-password`} className="flex-1 text-primary-500">
            Forgot password?
          </Link>
        </section>
      </form>
    </main>
  );
}
