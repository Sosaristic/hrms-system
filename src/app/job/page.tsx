import AllJobs from "@/components/job/AllJobs";
import { cn } from "@/lib/utils";

type Props = {};

const Page = (props: Props) => {
  return (
    <section
      className={cn("mt-[3rem] flex w-full flex-col gap-2 md:mt-[6rem]")}
    >
      <div className=" flex flex-col items-center border-b-[1px] border-b-primary-500 p-[2rem] ">
        <h2 className="text-[3rem] font-bold text-primary-800">Careers</h2>
        <p className="text">
          Join our team to work hard, make a difference and succeed in a
          fast-paced environment{" "}
        </p>
      </div>
      <AllJobs />
    </section>
  );
};

export default Page;
