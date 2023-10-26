"use client";

import { useState } from "react";
import ApplyForm from "./ApplyForm";
import Link from "next/link";

const SuccessApplication = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="flex w-[90%] flex-col gap-4 lg:w-[50%]">
        <p className="text-[2rem] font-[600]">
          Your Application is successfull
        </p>
        <Link
          href={"/job"}
          className="w-fit rounded-md bg-primary-500 p-2 px-4 text-center text-white"
        >
          back
        </Link>
      </div>
    </div>
  );
};

type Props = {
  job: JobType;
};

const JobDetail = (props: Props) => {
  const { job } = props;
  const [success, setSuccess] = useState(false);
  return (
    <>
      {success ? (
        <SuccessApplication />
      ) : (
        <>
          <div className=" flex flex-col items-center border-b-[1px] border-b-primary-500 px-[2rem] py-4 ">
            <h2 className="text-[1.5rem] font-bold text-primary-800 lg:text-[3rem]">
              {job.title}
            </h2>
            <ul className="w-full">
              <li className="text">
                <span className=" text-primary-400">JobType</span> :{" "}
                <span>{job.jobType}</span>
              </li>
              <li className="text">
                <span className=" text-primary-400">salary</span> :{" "}
                <span>&#8358;</span>
                <span>{job.salary}</span>
              </li>
            </ul>
            <div className="mt-4 w-full">
              <p className="text-primary-400">Job Description:</p>
              <p>{job.description}</p>
            </div>
          </div>
          <div className="w-full px-[2rem] py-4">
            <h2 className=" my-4 text-[1.3rem] text-primary-500">Apply here</h2>
            <div className="flex w-full flex-col ">
              <ApplyForm jobId={job._id} setSuccess={setSuccess} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default JobDetail;
