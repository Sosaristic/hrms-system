"use client";
import { Button, SpinningLoader, TextField } from "@/components";
import { useFormik } from "formik";
import Image from "next/image";
import { axiosInstance } from "@/lib/axios";
import { registerSchema } from "@/components/forms/formValidationSchema";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DangerToast } from "@/components";
import { XCircleIcon } from "@heroicons/react/24/solid";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

export default function Register() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
        setErrorMessage(`Registration failed: ${message}`);
      } else {
        console.error("Registration error:", err.message);
        setErrorMessage("Registration failed. Please try again.");
      }
      throw err;
    }
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: toFormikValidationSchema(registerSchema),
    onSubmit: (values) => {
      setIsLoading(true);
      registerUser(values)
        .then((data) => {
          console.log(data);
          alert("Please check your email for a confirmation code");

          setIsLoading(false);
          setTimeout(() => router.push("/login"), 3000);
        })
        .catch((err) => {
          // alert("Please try again");
          console.error(err);
          setIsLoading(false);
        });
    },
  });

  const setLoginButtonToInvalid: () => boolean = () => {
    const { errors, values } = formik;
    if (
      errors.name ||
      errors.email ||
      errors.password ||
      !values.name ||
      !values.email ||
      !values.password
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className="relative">
      <main
        className={`mx-auto flex min-h-screen w-11/12 flex-col justify-center gap-5 md:w-1/2 lg:w-1/3 `}
      >
        <Image
          src="/svg/app_name_logo.svg"
          alt="app logo"
          height={100}
          width={100}
          priority
        />

        <h2 className="font-lexend text-2xl font-bold">Welcome 👋</h2>
        <p>Please register here</p>
        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          <section>
            <TextField
              {...formik.getFieldProps("name")}
              type="text"
              placehoder="name"
              label="full name"
              error={formik.touched.name && formik.errors.name}
            />
          </section>
          <section>
            <TextField
              {...formik.getFieldProps("email")}
              type="email"
              placehoder="email"
              label="email"
              error={formik.touched.email && formik.errors.email}
            />
          </section>
          <section>
            <TextField
              {...formik.getFieldProps("password")}
              placehoder="password"
              type="password"
              label="password"
              error={formik.touched.password && formik.errors.password}
            />
          </section>
          <Button
            size="fullwidth"
            type="submit"
            onClick={() => {}}
            disabled={setLoginButtonToInvalid()}
          >
            Register
          </Button>
        </form>
        {errorMessage && (
          <DangerToast icon={<XCircleIcon />} message={errorMessage} />
        )}
      </main>
      <div>
        {isLoading && (
          <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
            <SpinningLoader></SpinningLoader>
          </div>
        )}
      </div>
    </div>
  );
}
