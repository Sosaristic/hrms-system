import { Avatar, Button } from "@/components";
import {
  BriefcaseIcon,
  EnvelopeIcon,
  PencilIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import SingleEmployeeSideBar from "./SingleEmployeeSideBar";

const SingleEmployeeHeader = () => {
  return (
    <section className="relative flex flex-col xs:flex-row">
      <div className="mditems-center flex gap-1  px-2">
        <div className="w-1/4">
          <Avatar
            imageUrl="/images/girl.jpg"
            alt=""
            rounded="md"
            className="vs h-[4rem] w-[3rem] flex-1"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Brooklyn Simmons</h2>
          <p className="flex items-center gap-2 text-xs xs:text-sm">
            <span>
              <BriefcaseIcon className="h-6 w-6" />
            </span>
            Project Manager
          </p>
          <p className="flex items-center gap-2 text-xs xs:text-sm">
            <span>
              <EnvelopeIcon className="h-6 w-6" />
            </span>
            brooklyn.s@example.com
          </p>
        </div>
      </div>
      <Button
        type="button"
        onClick={() => console.log("edit details")}
        className=" flex w-fit items-center justify-center gap-2 text-xs xs:ml-auto md:self-end"
      >
        <span>
          <PencilIcon className="h-4 w-4" />
        </span>
        Edit Profile
      </Button>
    </section>
  );
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[89%] p-2 px-4">
      <SingleEmployeeHeader />
      <hr className="my-6 border-gray" />
      <div className="flex h-full gap-2">
        <SingleEmployeeSideBar windowSize="desktop" />
        <section className="min-h-full w-full md:w-8/12 lg:w-9/12">
          {children}
        </section>
        <SingleEmployeeSideBar windowSize="mobile" />
      </div>
    </div>
  );
}
