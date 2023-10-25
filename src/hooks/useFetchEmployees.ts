import axios from "axios";
import { cookies } from "next/headers";

export type EmployeeType = {
  _id: string;
  user: {
    _id: string;
    name: string;
    email: string;
    role: string;
    emailVerified: boolean;
    __v: number;
  };
  employmentStatus: string;
  imageUrl: string;
  phoneNumber: number;
  salary: number;
  gender: string;
  job: null | string;
  department: {
    _id: string;
    name: string;
    __v: number;
  };
  joinDate: string;
  __v: number;
};

export interface IEmployeeType {
  employee_id: string;
  employee_name: string;
  department: string;
  imageUrl: string;
}

export const fetchEmployees = async () => {
  const endpoint: string =
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/employee` ?? "";
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access")?.value;

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.get(endpoint, config);

    const data = await response.data;

    if (data.status === "success") {
      console.log("Success fetching employees");
      const employees: IEmployeeType[] = data.data.map(
        (employee: EmployeeType) => ({
          employee_id: employee._id,
          employee_name: employee.user.name,
          department: employee.department.name,
          imageUrl: employee.imageUrl,
        }),
      );
      return employees;
    }
  } catch (error) {
    // console.error("Error fetching employees data:", error);
    throw error;
  }
};

export interface SingleEmployeeProps {
  _id: string;
  user: {
    _id: string;
    name: string;
    email: string;
    role: string;
    emailVerified: boolean;
    __v: number;
  };
  employmentStatus: string;
  imageUrl: string;
  phoneNumber: number;
  salary: number;
  gender: string;
  job: null | string;
  department: {
    _id: string;
    name: string;
    __v: number;
  };
  joinDate: string;
  __v: number;
}

export const fetchSingleEmployee = async (id: string) => {
  const endpoint: string =
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/employee/${id}` ?? "";
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access")?.value;

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.get(endpoint, config);

    const data = await response.data;

    if (data.status === "success") {
      console.log("Success fetching employee's data");
      const employee: SingleEmployeeProps = data.data;

      return employee;
    }
  } catch (error) {
    console.error("Error fetching employees data:");
    throw error;
  }
};
