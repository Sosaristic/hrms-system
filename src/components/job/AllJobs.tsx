import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type JobRoleType = {
  job: JobType;
};

const JobRole = (props: JobRoleType) => {
  const { job } = props;
  return (
    <div className="w-full  rounded-md border border-primary-200 p-2 shadow-md md:w-[40%] md:p-4">
      <div className=" flex  flex-col sm:flex-row">
        <div className="p-2">
          <EnvelopeIcon className="h-8 w-8" />
        </div>
        <div className="">
          <p>{job.title}</p>
          <p className="text-xs">{job.department.name}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-4 p-2 sm:flex-row sm:items-center">
        <div className="flex gap-4">
          <p className="rounded-md bg-primary-500 p-2 text-center text-sm text-white">
            {job.jobType}
          </p>
          <Link
            href={`/job/${job._id}`}
            className="rounded-md bg-primary-500 p-2 text-center text-sm text-white"
          >
            Apply
          </Link>
        </div>
        <p>
          <span>&#8358;</span>
          <span className="">{job.salary}</span>/
          <span className="text-sm">month</span>
        </p>
      </div>
    </div>
  );
};

type Props = {
  allJobs: JobType[];
};

const AllJobs = async (props: Props) => {
  const { allJobs } = props;

  return (
    <div className="flex flex-col items-center px-[2rem] py-[1rem]">
      <h2 className="md:text-[1.5rem]">
        We currently employing for the following roles:
      </h2>
      <div className="mt-4 flex w-full flex-col gap-4 md:flex-row md:justify-between lg:w-full lg:flex-wrap">
        {allJobs.map((job: JobType) => (
          <JobRole key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
