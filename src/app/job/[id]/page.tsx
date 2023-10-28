import { axiosInstance } from "@/lib/axios";
import { cn } from "@/lib/utils";
import JobDetail from "@/components/job/JobDetail";
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
  let job;

  try {
    job = await getData(params.id);
  } catch (err) {
    console.log(err);
  }

  return (
    <section
      className={cn("mt-[3rem] flex w-full flex-col gap-2 md:mt-[6rem]")}
    >
      {job ? <JobDetail job={job} /> : <div>Error occurred</div>}
    </section>
  );
};

export default Page;
