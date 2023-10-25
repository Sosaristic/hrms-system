import { Avatar } from "@/components";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { fetchEmployees } from "@/hooks/useFetchEmployees";

const headerText1 = ["Name", "ID", "Dept", "Action"];

export default async function AllEmployees() {
  const employees = await fetchEmployees().catch((error) => {
    console.error("Error fetching employees data");
  });

  return (
    <div>
      <div className="text-xm md:text-md relative my-4 flex gap-2  text-gray ">
        {headerText1.map((text, id) => (
          <p key={id} className="min-w-[20%] flex-1 text-center text-sm ">
            {text}
          </p>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {employees ? (
          employees.map((employee) => (
            <Link
              href={`/admin/all_employees/${employee.employee_id}/profile/personal_information`}
              key={employee.employee_id}
              className="flex items-center gap-4 px-2 font-inter text-xs shadow-sm lg:hover:bg-primary-100"
            >
              <div className="w-3/9 flex flex-1 items-center gap-2">
                <Avatar
                  imageUrl={employee.imageUrl}
                  alt={employee.employee_name}
                />

                <p className="text-center">{employee.employee_name}</p>
              </div>
              <p className="w-2/9 flex-1  text-center">
                {employee.employee_id}
              </p>

              <p className="w-3/9 flex-1  text-center">{employee.department}</p>

              <div className="w-1/9 ml-auto flex flex-1 flex-col items-end gap-4  py-1 md:flex-row md:justify-center">
                <button className="z-10 p-1 hover:text-primary-600">
                  <PencilIcon className="h-4 w-4 " />
                </button>
                <button className="z-10 p-1 hover:text-primary-600">
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
            </Link>
          ))
        ) : (
          <div className="flex justify-center text-red-500">
            <p className="flex-1">
              Oops... Employees data could not be fetched, please refresh
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
