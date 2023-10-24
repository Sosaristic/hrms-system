import { axiosInstance } from "@/lib/axios";
import { cn } from "@/lib/utils";
import ApplyForm from "@/components/job/ApplyForm";
type Props = {};

const getData = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/job/${id}`);
    if (data.status === "success") {
      return data.data;
    } else {
      throw new Error("No Data found");
    }
  } catch (error) {
    throw new Error("No Data found");
  }
};

const Page = async ({ params }: { params: { id: string } }) => {
  const job = await getData(params.id);

  return (
    <section
      className={cn("mt-[3rem] flex w-full flex-col gap-2 md:mt-[6rem]")}
    >
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
          <ApplyForm jobId={job._id} />
        </div>
      </div>
    </section>
  );
};

export default Page;
