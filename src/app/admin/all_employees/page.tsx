"use client";

import React, { useState, useRef } from "react";
import { Avatar, Overlay, User } from "@/components";
import {
  EllipsisVerticalIcon,
  PencilIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

type EmployeeType = {
  employee_name: string;
  employee_id: number;
  department: string;
  office: string;
  imageUrl: string;
};

const headerText1 = ["Name", "ID", "Dept", "Action"];
const headerText2 = ["Name", "ID", "Dept", "Office", "Action"];

export default function AllEmployees() {
  const handleClickEmployee = (employee: EmployeeType) => {};

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
        {dummyEmployees.map((employee) => (
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
            <p className="w-2/9 flex-1  text-center">{employee.employee_id}</p>

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
