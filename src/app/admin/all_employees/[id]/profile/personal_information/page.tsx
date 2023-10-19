import ListContainer from "../ListContainer";

const personalInformationData = [
  { id: 1, header: "first name", info: "Brooklyn" },
  { id: 2, header: "last name", info: "simmons" },
  { id: 3, header: "mobile number", info: "(702) 555-0122" },
  { id: 4, header: "email address", info: "brooklyn.s@example.com" },
  { id: 5, header: "Date of Birth", info: "July 14, 1995" },
  { id: 6, header: "Marital Status", info: "Married" },
  { id: 7, header: "Gender", info: "Female" },
  { id: 8, header: "Nationality", info: "America" },
  { id: 9, header: "address", info: "2464 Royal Ln. Mesa, New Jersey" },
  { id: 10, header: "city", info: "California" },
  { id: 11, header: "state", info: "United State" },
  { id: 12, header: "Zip Code", info: "35624" },
];

export default function page() {
  return (
    <ul className="mt-4 grid grid-cols-1 gap-4  pb-14 lg:grid-cols-2">
      {personalInformationData.map((item) => {
        return <ListContainer key={item.id} item={item} />;
      })}
    </ul>
  );
}
