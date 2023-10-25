"use client";

import React from "react";

import EmployeeCard from "./EmployeeCard";
import EmployeesTopBar from "./EmployeesTopBar";

const headerText1 = ["Name", "ID", "Dept", "Action"];

export default function AllEmployees() {
  return (
    <div>
      <EmployeesTopBar />
      <div className="text-xm md:text-md relative my-4 flex gap-2  text-gray ">
        {headerText1.map((text, id) => (
          <p key={id} className="min-w-[20%] flex-1 text-center text-sm ">
            {text}
          </p>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {dummyEmployees.map((employee) => (
          <EmployeeCard key={employee.employee_id} employee={employee} />
        ))}
      </div>
    </div>
  );
}

const dummyEmployees = [
  {
    employee_name: "Alice Johnson",
    employee_id: 101,
    department: "Marketing",
    imageUrl: "/images/girl.jpg",
  },
  {
    employee_name: "David Smith",
    employee_id: 202,
    department: "Development",
    imageUrl: "/images/girl.jpg",
  },
  {
    employee_name: "Emily Davis",
    employee_id: 303,
    department: "Finance",
    imageUrl: "/images/girl.jpg",
  },
  {
    employee_name: "John Doe",
    employee_id: 404,
    department: "Customer Support",
    imageUrl: "/images/girl.jpg",
  },
  {
    employee_name: "Linda Johnson",
    employee_id: 505,
    department: "Human Resources",
    imageUrl: "/images/girl.jpg",
  },
  {
    employee_name: "Michael Clark",
    employee_id: 606,
    department: "Sales",
    imageUrl: "/images/girl.jpg",
  },
];
