type ListContainerProps = {
  item: {
    id: number;
    header: string;
    info: string;
  };
};

export default function ListContainer({ item }: ListContainerProps) {
  return (
    <li className="flex flex-col gap-1 border-b border-b-gray pb-1">
      <h3 className="text-sm capitalize text-gray">{item.header}</h3>
      <p>{item.info}</p>
    </li>
  );
}
