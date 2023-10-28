"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { ImageUploader } from "./ImageUploader";
import { TextField, Dropdown, TimePicker, Button } from "@/components";
import { step2ValidationSchema } from "./addEmployeeValidationSchema";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { Step2FormValuesTypes } from "./employeeTypes";

const jobType = [{ name: "remote" }, { name: "full time" }];

const department = [
  { name: "design" },
  { name: "engineering" },
  { name: "marketing" },
  { name: "sales" },
];

type Form2Types = {
  email: string;
};
type Step2Data = Form2Types & Step2FormValuesTypes;

type Step2Props = {
  handleStep2Data: (data: Step2Data) => void;
  setSteps: (value: number) => void;
};

export default function Step2({ handleStep2Data, setSteps }: Step2Props) {
  const [workType, setworkType] = useState(jobType[0]);
  const [departmentSelected, setdepartmentSelected] = useState(department[0]);
  const [date, setDate] = useState(new Date());
  const formik = useFormik<Form2Types>({
    initialValues: {
      email: "",
    },
    validationSchema: step2ValidationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      const formValues = {
        ...values,
        workType: workType.name,
        department: departmentSelected.name,
        joiningDate: date,
      };

      handleStep2Data(formValues);
    },
  });

  return (
    <div className="relative mx-4 mt-4">
      <form>
        <div className="grid gap-4  md:grid-cols-2">
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

          <button
            type="button"
            className="relative mt-4 flex h-fit items-center self-end rounded-md border border-dark px-4 md:mt-0"
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
            lists={jobType}
            selected={workType}
            setSelected={setworkType}
            label={"Job Type"}
          />
          <Dropdown
            lists={department}
            selected={departmentSelected}
            setSelected={setdepartmentSelected}
            label={"department"}
          />
        </div>

        <div className="my-2 flex justify-end gap-4">
          <Button
            type="button"
            size="small"
            bgColor="white"
            onClick={() => setSteps(1)}
          >
            Prev
          </Button>
          <Button type="submit" size="small" onClick={formik.handleSubmit}>
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}
