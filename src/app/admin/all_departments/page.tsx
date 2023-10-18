import React from "react";
import DepartmentsCard from "./DepartmentsCard";

export default function Page() {
  return (
    <>
      <div className="max-w-100 grid grid-cols-1 md:grid-cols-2">
        {allDepartmentsInfo.map((departmentInfo, id) => (
          <div key={id} className="">
            <DepartmentsCard
              departmentName={departmentInfo.departmentName}
              members={departmentInfo.members}
            />
          </div>
        ))}
      </div>
    </>
  );
}

const allDepartmentsInfo = [
  {
    departmentName: "Design Department",
    members: [
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
    ],
  },
  {
    departmentName: "Engineering Department",
    members: [
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
    ],
  },
  {
    departmentName: "Sales Department",
    members: [
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
    ],
  },
  {
    departmentName: "Marketing Department",
    members: [
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
    ],
  },
];
