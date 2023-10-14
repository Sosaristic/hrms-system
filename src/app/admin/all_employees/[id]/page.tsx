type PageProps = {
  params: { id: string };
};

export default function page({ params }: PageProps) {
  return (
    <div>
      employee with id: {params.id}
      <p>
        Dynamic page yet to be fully built. omo that responsiveness won kill me
      </p>
    </div>
  );
}
