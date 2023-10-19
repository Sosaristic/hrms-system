import ListContainer from "../ListContainer";

const accountAccessData = [
  { id: 1, header: "Email Address", info: "brooklyn.s@example.com" },
  { id: 2, header: "Slack ID", info: "brooklyn_simmons" },
  { id: 3, header: "Skype ID", info: "brooklyn_simmons" },
  { id: 4, header: "Github ID", info: "brooklyn_simmons" },
];

export default function page() {
  return (
    <ul className="mt-4 grid grid-cols-1 gap-4  lg:grid-cols-2">
      {accountAccessData.map((item) => {
        return <ListContainer key={item.id} item={item} />;
      })}
    </ul>
  );
}
