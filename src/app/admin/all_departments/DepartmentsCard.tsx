import { Avatar } from "@/components";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

type MemberProps = {
  employee_name: string;
  employee_id: number;
  department: string;
  imageUrl: string;
};

export default function DepartmentsCard({
  departmentName,
  members,
}: {
  departmentName: string;
  members: MemberProps[];
}) {
  return (
    <div className="m-4 rounded-lg border-2 border-primary-100">
      <div className="m-4 flex flex-wrap justify-between border-b-2 border-b-primary-100 pb-4">
        <span className="block">
          <p className="flex-1">{departmentName}</p>
          <p className="text-sm text-gray">{`${members.length} members`}</p>
        </span>

        <span>
          <Link
            className="flex-1 text-primary-400 hover:text-primary-700"
            href=""
          >
            View All
          </Link>
        </span>
      </div>

      <div>
        {members.slice(0, 5).map((member) => (
          <div className="mb-4 flex" key={member.employee_id}>
            <div className="ml-2">
              <Avatar
                className="flex-1"
                imageUrl={member.imageUrl}
                size="small"
                alt="employee image"
              ></Avatar>
            </div>
            <div className="ml-3 block flex-1 ">
              <p>{member.employee_name}</p>
              <p className="text-gray">{member.department}</p>
            </div>
            <span>
              <ArrowLongRightIcon className="mr-4 h-6 w-6 flex-1" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
