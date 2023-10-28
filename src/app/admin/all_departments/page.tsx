import React from "react";
import DepartmentsCard from "./DepartmentsCard";
import { fetchEmployees, IEmployeeType } from "@/hooks/useFetchEmployees";
import { fetchDepartments, IDepartmentType } from "@/hooks/useFetchDepartments";
import { Loader } from "@/components";

const transformEmployees = (
  employees: IEmployeeType[],
  departments: IDepartmentType[],
) => {
  let departmentsData: any = [];
  for (let i = 0; i < departments.length; i++) {
    departmentsData.push({
      departmentName: departments[i].departmentName,
      members: [],
    });
  }
  for (let i = 0; i < employees.length; i++) {
    for (let j = 0; j < departmentsData.length; j++) {
      if (departmentsData[j].departmentName === employees[i].department) {
        departmentsData[j].members.push(employees[i]);
      }
    }
  }
  return departmentsData;
};
export default async function Page() {
  let newDepartments: any;

  try {
    const employees: any = await fetchEmployees().catch((err) => {
      "Error fetching Employees";
    });

    const departments: any = await fetchDepartments().catch((err) => {
      "Error fetching departments";
    });

    newDepartments = transformEmployees(employees, departments);
  } catch (err) {
    console.log("error occured");
  }

  return (
    <>
      <div className="max-w-100 grid grid-cols-1 md:grid-cols-2">
        {newDepartments ? (
          newDepartments.map((departmentInfo: any) => (
            <div key={departmentInfo.departmentName} className="">
              <DepartmentsCard
                departmentName={departmentInfo.departmentName}
                members={departmentInfo.members}
              />
            </div>
          ))
        ) : (
          <div className="align-item flex min-h-screen justify-center text-red-500">
            <p className="flex-1">
              Oops... Departments data could not be fetched, please refresh
            </p>
          </div>
        )}
      </div>
    </>
  );
}

interface Member {
  employee_name: string;
  employee_id: number;
  department: string;
  imageUrl: string;
}

interface DepartmentInfo {
  departmentName: string;
  members: Member[];
}

interface AllDepartmentsInfo {
  allDepartmentsInfo: DepartmentInfo[];
}
