"use client";
import { ChangeEvent, useState } from "react";
import { TextField } from "..";
import { axiosInstance } from "@/lib/axios";

type Props = {
  jobId: string;
};

const ApplyForm = (props: Props) => {
  const { jobId } = props;
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [resumeFile, setResumeFile] = useState("");

  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setResumeFile(files[0]);
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("name", formValue.name);
    formData.append("email", formValue.email);
    formData.append("phoneNumber", formValue.phoneNumber);
    formData.append("jobId", jobId);

    try {
      const data = await axiosInstance.post("/candidate/register", formData);
      console.log({ data });
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex w-full flex-col  justify-between gap-4 lg:w-[60%] lg:flex-row lg:flex-wrap"
    >
      <div className=" w-full md:w-[70%] lg:w-[45%] ">
        <TextField
          label="Full Name"
          type="text"
          name="name"
          value={formValue.name}
          onChange={handleOnchange}
          onBlur={() => {}}
          error={formValue.email === ""}
        />
      </div>
      <div className="w-full md:w-[70%] lg:w-[45%] ">
        <TextField
          label="Email"
          type="email"
          name="email"
          value={formValue.email}
          onChange={handleOnchange}
          onBlur={() => {}}
        />
      </div>
      <div className=" w-full md:w-[70%] lg:w-[45%] ">
        <TextField
          label="Phone Number"
          type="text"
          name="phoneNumber"
          value={formValue.phoneNumber}
          onChange={handleOnchange}
          onBlur={() => {}}
        />
      </div>
      <div className=" w-full md:w-[70%] lg:w-[45%] ">
        <label htmlFor="cv">Resume / CV</label>
        <input
          type="file"
          onChange={handleUpload}
          name="resume"
          className="w-full"
        />
      </div>
      <button className=" w-full rounded-md bg-primary-500 p-3 text-white md:w-[70%] lg:w-[45%]">
        Submit
      </button>
    </form>
  );
};

export default ApplyForm;
