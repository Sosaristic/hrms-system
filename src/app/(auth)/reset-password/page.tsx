"use client";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { resetPasswordSchema } from "@/components/forms/formValidationSchema";

import { Button, TextField } from "@/components";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

type FormValues = {
  email: string;
};

export default function Page() {
  const router = useRouter();
  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });
  return (
    <main className="relative mx-auto flex min-h-screen w-11/12 flex-col justify-center gap-4 py-6 md:w-2/3 lg:w-1/3">
      <button
        className="absolute top-6 flex w-fit items-center gap-2 text-2xl"
        onClick={() => router.back()}
      >
        <ChevronLeftIcon className="h-8 w-8  text-black" /> Back
      </button>
      <h2 className="font-lexend text-2xl font-bold md:text-5xl">
        Forgot Password
      </h2>
      <p className="text-gray">
        Enter your registered email address. we’ll send you a code to reset your
        password.
      </p>
      <form className="flex flex-col gap-4">
        <TextField
          {...formik.getFieldProps("email")}
          label="email address"
          type="email"
          placehoder="email"
          error={
            formik.errors.email && formik.touched.email && formik.errors.email
          }
        />
        <Button
          type="submit"
          size="fullwidth"
          onClick={() => console.log("Send link")}
        >
          Send Link
        </Button>
      </form>
    </main>
  );
}
