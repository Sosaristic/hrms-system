import AllJobs from "@/components/job/AllJobs";
import { axiosInstance } from "@/lib/axios";
import { cn } from "@/lib/utils";

async function getData() {
  try {
    const { data } = await axiosInstance.get("/job");
    if (data.status === "success") {
      return { status: "success", data: data.data };
    } else {
      return { status: "error", message: "Failed to fetch data" };
    }
  } catch (error) {
    return { status: "error", message: "Failed to fetch data" };
  }
}

type Props = {};

const Page = async (props: Props) => {
  const response = await getData();
  const { status } = response;
  return (
    <section
      className={cn("mt-[3rem] flex w-full flex-col gap-2 md:mt-[6rem]")}
    >
      {status === "success" ? (
        <>
          <div className=" flex flex-col items-center border-b-[1px] border-b-primary-500 p-[2rem] ">
            <h2 className="text-[3rem] font-bold text-primary-800">Careers</h2>
            <p className="text">
              Join our team to work hard, make a difference and succeed in a
              fast-paced environment{" "}
            </p>
          </div>
          <AllJobs allJobs={response.data} />
        </>
      ) : (
        <div className="w-">
          <div className=" flex flex-col items-center border-b-[1px] border-b-primary-500 p-[2rem] ">
            <h2 className="text-[3rem] font-bold text-primary-800">OOPS</h2>
            <p className="text">Some went wrong Try again later</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Page;
