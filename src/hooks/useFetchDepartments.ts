import axios from "axios";
import { cookies } from "next/headers";

export interface DepartmentType {
  _id: string;
  name: string;
  __v: number;
  departmentHead?: string;
}

export interface IDepartmentType {
  departmentName: string;
  departmentId: string;
  departmentHeadId: string;
}

export const fetchDepartments = async () => {
  const endpoint: string =
    `${
      process.env.SERVER_ENDPOINT ??
      "https://hmrs-management.onrender.com/api/v1"
    }/department` ?? "";
  console.log(endpoint);
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access")?.value;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const response = await axios.get(endpoint, config);
    const data = await response.data;

    if (data.status === "success") {
      const departments: {
        departmentName: string;
        departmentId: string;
        departmentHeadId: string;
      } = data.data.map((department: DepartmentType) => ({
        departmentName: department.name,
        departmentId: department._id,
        departmentHeadId: department.departmentHead,
      }));

      return departments;
    }
  } catch (error) {
    console.error("Error fetching data");
    throw error;
  }
};
