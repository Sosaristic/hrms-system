"use client";
import React from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@/components";
import { step3ValidationSchema } from "./addEmployeeValidationSchema";
import { Step3FormValuesTypes } from "./employeeTypes";

type Step3Data = Step3FormValuesTypes;

type Step3Props = {
  handleStep3Data: (data: Step3Data) => void;
  setSteps: (value: number) => void;
};

export default function Step3({ handleStep3Data, setSteps }: Step3Props) {
  const formik = useFormik<Step3FormValuesTypes>({
    initialValues: {
      slackID: "",
      twitterLink: "",
      githubLink: "",
    },
    validationSchema: step3ValidationSchema,
    onSubmit: (values) => {
      // Handle form submission here

      handleStep3Data(values);
    },
  });

  return (
    <div className="relative mx-4 mt-4">
      <form>
        <div className="grid gap-4  md:grid-cols-2">
          <TextField
            name="slackID"
            type="text"
            label="slackID"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.slackID}
            error={
              formik.errors.slackID &&
              formik.touched.slackID &&
              formik.errors.slackID
            }
            placeholder="slack ID"
          />
          <TextField
            name="twitterLink"
            type="text"
            label="twitter ID"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.twitterLink}
            error={
              formik.errors.twitterLink &&
              formik.touched.twitterLink &&
              formik.errors.twitterLink
            }
            placeholder="twitter link"
          />{" "}
          <TextField
            name="githubLink"
            type="text"
            label="github link"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.githubLink}
            error={
              formik.errors.githubLink &&
              formik.touched.githubLink &&
              formik.errors.githubLink
            }
            placeholder="github link"
          />
        </div>

        <div className="my-2 flex justify-end gap-4">
          <Button
            type="button"
            size="small"
            bgColor="white"
            onClick={() => setSteps(2)}
          >
            Prev
          </Button>
          <Button type="submit" size="small" onClick={formik.handleSubmit}>
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}
