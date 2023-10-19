import ListContainer from "../ListContainer";

const professionalInformationData = [
  { id: 1, header: "Employee ID", info: "879912390" },
  { id: 2, header: "User Name", info: "brooklyn_simmons" },
  { id: 3, header: "Employee Type", info: "Office" },
  { id: 4, header: "email address", info: "brooklyn.s@example.com" },
  { id: 5, header: "Department", info: "Project Manager" },
  { id: 6, header: "Working Days", info: "5 Days" },
  { id: 7, header: "Joining Date", info: "July 10, 2022" },
];

export default function page() {
  return (
    <ul className="mt-4 grid grid-cols-1 gap-4  pb-14 lg:grid-cols-2">
      {professionalInformationData.map((item) => {
        return <ListContainer key={item.id} item={item} />;
      })}
    </ul>
  );
}
