"use client";

import React, { useState, useRef } from "react";
import { Avatar, Overlay, User } from "@/components";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

type EmployeeType = {
  employee_name: string;
  employee_id: number;
  department: string;
  office: string;
  imageUrl: string;
};

export default function AllEmployees() {
  const handleClickEmployee = (employee: EmployeeType) => {};

  return (
    <div>
      <div className="mb-6 hidden grid-cols-1 gap-0 p-0 md:block md:grid md:grid-cols-5">
        <div>Employee Name</div>
        <div>Employee ID</div>
        <div>Department</div>
        <div>Office</div>
        <div>Action</div>
      </div>
      {dummyEmployees.map((employee) => (
        <div
          key={employee.employee_id}
          className=" mx-10 mx-4 mb-4 grid grid-cols-1 place-items-center gap-0 rounded-lg border-4 border-solid border-primary-100 px-4 py-4 shadow-lg  md:m-0 md:grid-cols-5 md:place-items-start md:border-none md:p-0 md:py-2 md:shadow-none"
        >
          <div
            className="flex cursor-pointer  hover:text-blue-700"
            onClick={() => {
              // handleClickEmployee(employee);
            }}
          >
            <Avatar
              imageUrl={employee.imageUrl}
              size="small"
              rounded="sm"
              alt={employee.employee_name}
              className="mr-4"
            />

            {employee.employee_name}
          </div>
          <div>{employee.employee_id}</div>
          <div>{employee.department}</div>
          <div>{employee.office}</div>
          <div className="flex">
            <PencilSquareIcon
              onClick={() => {
                /*logic for edit event*/
              }}
              className="h-6 w-6 cursor-pointer hover:text-primary-800"
            />
            <TrashIcon
              onClick={() => {
                /*logic for delete event*/
              }}
              className="h-6 w-6 cursor-pointer hover:text-primary-800"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

const dummyEmployees = [
  {
    employee_name: "Alice Johnson",
    employee_id: 101,
    department: "Marketing",
    office: "Sales",
    imageUrl: "/images/girl.jpg",
  },
  {
    employee_name: "David Smith",
    employee_id: 202,
    department: "Development",
    office: "Engineering",
    imageUrl: "/images/girl.jpg",
  },
  {
    employee_name: "Emily Davis",
    employee_id: 303,
    department: "Finance",
    office: "Accounting",
    imageUrl: "/images/girl.jpg",
  },
  {
    employee_name: "John Doe",
    employee_id: 404,
    department: "Customer Support",
    office: "Service",
    imageUrl: "/images/girl.jpg",
  },
  {
    employee_name: "Linda Johnson",
    employee_id: 505,
    department: "Human Resources",
    office: "Admin",
    imageUrl: "/images/girl.jpg",
  },
  {
    employee_name: "Michael Clark",
    employee_id: 606,
    department: "Sales",
    office: "Marketing",
    imageUrl: "/images/girl.jpg",
  },
];
