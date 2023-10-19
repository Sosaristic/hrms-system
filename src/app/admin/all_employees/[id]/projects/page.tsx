const headerData = [
  { id: 1, title: "Sr. No" },
  { id: 2, title: "Project Name" },
  { id: 3, title: "Start Date" },
  { id: 4, title: "Finished Date" },
  { id: 5, title: "status" },
];

const projectsData = [
  {
    id: 1,
    projectTitle: "Amongus - Discovery Phase",
    startDate: "Feb 01, 2023",
    finishDate: "Mar 05, 2023",
    status: "completed",
  },
  {
    id: 2,
    projectTitle: "Wildcare - Development Project",
    startDate: "Feb 12, 2023",
    finishDate: "April 20, 2023",
    status: "completed",
  },
  {
    id: 3,
    projectTitle: "Hingutsan Web Development",
    startDate: "April 05, 2023",
    finishDate: "October 05, 2023",
    status: "in progress",
  },
  {
    id: 4,
    projectTitle: "Montilisy Ecommerce Platform",
    startDate: "May 12, 2023",
    finishDate: "August 12, 2023",
    status: "in progress",
  },
];

export default function page() {
  return (
    <section className="projects relative border-spacing-3 overflow-auto">
      <table className="relative w-full border-separate border-spacing-2 overflow-x-auto">
        <thead className="overflow-x-auto whitespace-nowrap">
          <tr className="w-full text-xs">
            {headerData.map((item) => {
              return (
                <td key={item.id} className="min-w-fit text-center text-gray">
                  {item.title}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody className="border-spacing">
          {projectsData.map((item) => {
            return (
              <tr
                key={item.id}
                className="my-2 overflow-x-auto whitespace-nowrap py-1 text-center text-xs md:text-sm"
              >
                <td className="p-2">{item.id}</td>
                <td className="p-2">{item.projectTitle}</td>
                <td className="p-2">{item.startDate}</td>
                <td className="p-2">{item.finishDate}</td>
                <td
                  className={`p-2 text-white ${
                    item.status === "completed"
                      ? "bg-[#e1f5ed] text-[#2fbc84]"
                      : "bg-[#f1e9cc] font-semibold text-[#ceb558]"
                  }`}
                >
                  {item.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
