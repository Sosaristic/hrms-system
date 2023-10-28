import ListContainer from "../ListContainer";
import {
  fetchSingleEmployee,
  SingleEmployeeProps,
} from "@/hooks/useFetchEmployees";

export default async function page({ params }: { params: { id: string } }) {
  let singleEmployeeData: SingleEmployeeProps | undefined;
  let transformedEmployeeData: any;

  try {
    singleEmployeeData = await fetchSingleEmployee(params.id).catch((err) => {
      throw err;
    });
    transformedEmployeeData = [
      {
        id: 1,
        header: "first name",
        info: singleEmployeeData?.user.name.split(" ")[0],
      },
      {
        id: 2,
        header: "last name",
        info: singleEmployeeData?.user.name.split(" ")[1],
      },
      { id: 3, header: "mobile number", info: singleEmployeeData?.phoneNumber },
      { id: 4, header: "email address", info: singleEmployeeData?.user.email },
      { id: 5, header: "Gender", info: singleEmployeeData?.gender },

      { id: 6, header: "Salary", info: singleEmployeeData?.salary },
      { id: 8, header: "Job", info: singleEmployeeData?.job },
      {
        id: 9,
        header: "Department",
        info: singleEmployeeData?.department.name,
      },
      ,
    ];
  } catch (err) {
    console.log("error in personal information page");
  }

  return (
    <ul className="mt-4 grid grid-cols-1 gap-4  pb-14 lg:grid-cols-2">
      {transformedEmployeeData ? (
        transformedEmployeeData.map((item: any) => {
          return <ListContainer key={item.id} item={item} />;
        })
      ) : (
        <div className="text-red-500">Error fetching employee data</div>
      )}
    </ul>
  );
}
