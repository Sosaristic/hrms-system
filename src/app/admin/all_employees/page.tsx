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
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeType | null>(
    null,
  );
  const handleClickEmployee = (employee: EmployeeType) => {
    setSelectedEmployee(employee);
  };

  return (
    <div>
      <div className="mb-6 grid grid-cols-5 gap-0 p-0">
        <div>Employee Name</div>
        <div>Employee ID</div>
        <div>Department</div>
        <div>Office</div>
        <div>Action</div>
      </div>
      {dummyEmployees.map((employee) => (
        <div
          className="mb-4 grid grid-cols-5 gap-0 p-0 "
          key={employee.employee_id}
        >
          <div
            className="flex cursor-pointer hover:text-blue-700"
            onClick={() => {
              handleClickEmployee(employee);
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
              className="h-8 w-8 cursor-pointer hover:text-blue-700"
            />
            <TrashIcon
              onClick={() => {
                /*logic for delete event*/
              }}
              className="h-8 h-8 w-8 w-8 cursor-pointer hover:text-blue-700"
            />
          </div>
        </div>
      ))}
      {selectedEmployee && (
        <Overlay>
          <User
            name={selectedEmployee!.employee_name}
            imageUrl={selectedEmployee!.imageUrl}
            role={selectedEmployee!.office}
          ></User>
        </Overlay>
      )}
    </div>
  );
}
