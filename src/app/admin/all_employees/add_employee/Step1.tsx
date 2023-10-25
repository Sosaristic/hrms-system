"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { ImageUploader } from "./ImageUploader";
import { TextField, Dropdown, TimePicker, Button } from "@/components";
import { step1ValidationSchema } from "./addEmployeeValidationSchema";
import { CalendarIcon } from "@heroicons/react/24/outline";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
}

type Step1Props<T> = {
  handleStep1Data: (data: FormValues) => void;
};

const maritalStatus = [
  { name: "single" },
  { name: "married" },
  { name: "Divorced" },
  { name: "widowed" },
];

const gender = [{ name: "male" }, { name: "female" }, { name: "other" }];

export default function Step1<T>({ handleStep1Data }: Step1Props<T>) {
  const router = useRouter();
  const [maritalStatusSelected, setMaritalStatusSelected] = useState(
    maritalStatus[0],
  );
  const [genderSelected, setGenderSelected] = useState(gender[0]);
  const [date, setDate] = useState(new Date());
  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      state: "",
    },
    validationSchema: step1ValidationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      handleStep1Data(values);
    },
  });

  return (
    <div className="relative mx-4">
      <ImageUploader />
      <form>
        <div className="grid gap-4  md:grid-cols-2">
          <TextField
            name="firstName"
            type="text"
            label="first name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            error={
              formik.errors.firstName &&
              formik.touched.firstName &&
              formik.errors.firstName
            }
            placeholder="First Name"
          />
          <TextField
            name="lastName"
            type="text"
            label="last name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            error={
              formik.errors.lastName &&
              formik.touched.lastName &&
              formik.errors.lastName
            }
            placeholder="Last Name"
          />
          <TextField
            name="email"
            type="email"
            label="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={
              formik.errors.email && formik.touched.email && formik.errors.email
            }
            placeholder="email"
          />
          <TextField
            name="phone"
            type="text"
            label="Phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            error={
              formik.errors.phone && formik.touched.phone && formik.errors.phone
            }
            placeholder="Phone Number"
          />

          <button
            type="button"
            className="relative flex h-fit items-center self-end rounded-md border border-dark px-4"
          >
            <TimePicker setDate={setDate} dateValue={date} />
            <span className="ml-auto">
              <CalendarIcon className="mb-2 ml-auto h-6 w-6" />
            </span>
            <span className="absolute -top-6 left-2 text-sm font-semibold text-primary-500 ">
              Date of birth
            </span>
          </button>
          <Dropdown
            lists={maritalStatus}
            selected={maritalStatusSelected}
            setSelected={setMaritalStatusSelected}
            label={"marital status"}
          />
          <Dropdown
            lists={gender}
            selected={genderSelected}
            setSelected={setGenderSelected}
            label={"gender"}
          />
          <TextField
            name="address"
            type="text"
            label="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            error={
              formik.errors.address &&
              formik.touched.address &&
              formik.errors.address
            }
            placeholder="address"
          />
          <TextField
            name="city"
            type="text"
            label="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
            error={
              formik.errors.city && formik.touched.city && formik.errors.city
            }
            placeholder="address"
          />
          <TextField
            name="state"
            type="text"
            label="state"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.state}
            error={
              formik.errors.state && formik.touched.state && formik.errors.state
            }
            placeholder="state"
          />
        </div>
        <div className="my-2 flex justify-end gap-4">
          <Button
            type="button"
            size="small"
            bgColor="white"
            onClick={() => router.back()}
          >
            cancel
          </Button>
          <Button type="submit" size="small" onClick={formik.handleSubmit}>
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}
