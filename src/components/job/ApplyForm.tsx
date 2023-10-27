"use client";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { TextField } from "..";
import { axiosInstance } from "@/lib/axios";
import { toast } from "react-toastify";

type Props = {
  jobId: string;
  setSuccess: Dispatch<SetStateAction<boolean>>;
};

const ApplyForm = (props: Props) => {
  const { jobId, setSuccess } = props;
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [resumeFile, setResumeFile] = useState<File>();
  const [resumeError, setResumeError] = useState("");

  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    console.log({ files });
    files?.length && setResumeFile(files[0]);
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("name", formValue.name);
    formData.append("email", formValue.email);
    formData.append("phoneNumber", formValue.phoneNumber);
    formData.append("jobId", jobId);
    if (!resumeFile) {
      setResumeError("Please upload your resume");
      return;
    }
    if (!formValue.email || !formValue.name || !formValue.phoneNumber) {
      toast.error("Incomplete information,Kindly fill out all the form. ");
      return;
    }
    try {
      const data = await axiosInstance.post("/candidate/register", formData);
      setSuccess(true);
      toast.success("Application Successful");
    } catch (error) {
      toast.error(`${error.response.data.message}`);
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
        <small className="text-xs text-red-500">{resumeError}</small>
      </div>
      <button className=" w-full rounded-md bg-primary-500 p-3 text-white md:w-[70%] lg:w-[45%]">
        Submit
      </button>
    </form>
  );
};

export default ApplyForm;
