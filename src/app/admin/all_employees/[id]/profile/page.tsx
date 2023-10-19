type PageProps = {
  params: { id: string };
};

export default function page({ params }: PageProps) {
  return <div>profile page for user {params.id}</div>;
}
