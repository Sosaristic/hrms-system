"use client";
import { useRouter } from "next/navigation";
import { Avatar } from "@/components";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

type EmployeeCardProp = {
  employee: {
    employee_id: number;
    imageUrl: string;
    employee_name: string;
    department: string;
  };
};

export default function EmployeeCard({ employee }: EmployeeCardProp) {
  const router = useRouter();
  const actionHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    type: "edit" | "delete",
  ) => {
    event.stopPropagation();
    if (type === "edit") {
      console.log("edit button");
    } else console.log("delete button");
  };
  return (
    <div
      key={employee.employee_id}
      className="flex items-center gap-4 px-2 font-inter text-xs shadow-sm lg:hover:bg-primary-100"
      onClick={() =>
        router.push(
          `/admin/all_employees/${employee.employee_id}/profile/personal_information`,
        )
      }
    >
      <div className="w-3/9 flex flex-1 items-center gap-2">
        <Avatar imageUrl={employee.imageUrl} alt={employee.employee_name} />

        <p className="text-center">{employee.employee_name}</p>
      </div>
      <p className="w-2/9 flex-1  text-center">{employee.employee_id}</p>

      <p className="w-3/9 flex-1  text-center">{employee.department}</p>

      <div className="w-1/9 ml-auto flex flex-1 flex-col items-end gap-4  py-1 md:flex-row md:justify-center">
        <button
          className="z-10 p-1 hover:text-primary-600"
          onClick={(event) => actionHandler(event, "edit")}
        >
          <PencilIcon className="h-4 w-4 " />
        </button>
        <button
          className="z-10 p-1 hover:text-primary-600"
          onClick={(event) => actionHandler(event, "delete")}
        >
          <TrashIcon className="h-4 w-4 " />
        </button>
      </div>
    </div>
  );
}
