"use client";
import { Button } from "@/components";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

function CandidatesPage() {
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const noCandidatesShowing = 10;
  const numberOfPages = Math.ceil(candidatesData.length / 10);
  return (
    <div className="mx-2 my-4 flex flex-col gap-3">
      <div className="flex flex-1 justify-between gap-2 text-xs text-gray md:text-sm">
        {headerText.map((header, id) => (
          <div className="min-w-[20%] flex-1 truncate md:min-w-[16%]" key={id}>
            {id === 0 ? (
              <div className="items-center justify-center truncate">
                <input type="checkbox" /> {header}
              </div>
            ) : (
              header
            )}
          </div>
        ))}
      </div>

      <div className="flex-1">
        {candidatesData.map((candidate, id) => (
          <div
            className="mb-4 flex justify-between gap-2 text-xs  md:text-sm"
            key={id}
          >
            <div className="min-w-[20%] flex-1 items-center truncate md:min-w-[16%]">
              <input type="checkbox" /> {candidate.candidateName}
            </div>
            <div className="min-w-[20%] flex-1 truncate md:min-w-[16%]">
              {candidate.appliedFor}
            </div>
            <div className="min-w-[20%] flex-1 truncate md:min-w-[16%]">
              {candidate.appliedDate}
            </div>
            <div className="min-w-[20%] flex-1 truncate md:min-w-[16%]">
              {candidate.email}
            </div>
            <div className="min-w-[20%] flex-1 truncate md:min-w-[16%]">
              {candidate.mobileNumber}
            </div>
            <div
              className={`min-w-[20%] flex-1 truncate ${
                candidate.status.toLowerCase() === "selected"
                  ? "text-green-500"
                  : candidate.status.toLowerCase() === "rejected"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {candidate.status}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-1 items-center justify-between gap-2 sm:hidden">
        <a className="border-gray-300 text-gray-700 hover:bg-gray-50 relative ml-3 inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium">
          Previous
        </a>
        <a className="border-gray-300 text-gray-700 hover:bg-gray-50 relative mr-3 inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium">
          Next
        </a>
      </div>

      <div className="md:text:sm hidden flex-row items-center justify-between gap-2 text-xs text-gray sm:flex">
        <span className=" inline-flex flex-1 items-center gap-2 ">
          <p className="mr-2">Showing</p>

          <select name="candidates" id="candidates" value={10}>
            {numberArray.map((number) => (
              <option value={number} key={number}>
                {number}
              </option>
            ))}
          </select>
        </span>
        <span>
          Showing <b>1</b> to <b>10</b> out of <b>{candidatesData.length}</b>{" "}
          records
        </span>
        <span className="inline-flex items-center gap-2">
          <ChevronLeftIcon className="h-[1.25rem] w-[1.25rem]" />
          <span className="inline-flex items-center gap-1">
            <p className="rounded-md border-[1px] border-primary-500 px-2 py-1">
              1
            </p>
            <p className="rounded-md border-[1px] border-primary-500 px-2 py-1">
              2
            </p>
            <p className="rounded-md border-[1px] border-primary-500 px-2 py-1">
              3
            </p>
          </span>
          <ChevronRightIcon className="h-[1.25rem] w-[1.25rem]" />
        </span>
      </div>
    </div>
  );
}

export default CandidatesPage;

const headerText = [
  "Candidate Name",
  "Applied For",
  "Applied Date",
  "Email Address",
  "Mobile Number",
  "Status",
];
const candidatesData = [
  {
    candidateName: "Leasie Watson",
    appliedFor: "UI/UX Designer",
    appliedDate: "July 14, 2023",
    email: "leasie.w@demo.com",
    mobileNumber: "(629)555-0129",
    status: "Selected",
  },
  {
    candidateName: "Sarah Johnson",
    appliedFor: "Frontend Developer",
    appliedDate: "August 2, 2023",
    email: "sarah.j@demo.com",
    mobileNumber: "(629)555-0456",
    status: "In Process",
  },
  {
    candidateName: "Alex Davis",
    appliedFor: "Backend Developer",
    appliedDate: "August 5, 2023",
    email: "alex.d@demo.com",
    mobileNumber: "(629)555-0789",
    status: "Rejected",
  },
  {
    candidateName: "Michael Lee",
    appliedFor: "Data Analyst",
    appliedDate: "August 10, 2023",
    email: "michael.l@demo.com",
    mobileNumber: "(629)555-0912",
    status: "Selected",
  },
  {
    candidateName: "Emily White",
    appliedFor: "Graphic Designer",
    appliedDate: "August 15, 2023",
    email: "emily.w@demo.com",
    mobileNumber: "(629)555-0345",
    status: "In Process",
  },
  {
    candidateName: "Daniel Smith",
    appliedFor: "Software Engineer",
    appliedDate: "August 20, 2023",
    email: "daniel.s@demo.com",
    mobileNumber: "(629)555-0678",
    status: "Rejected",
  },
  {
    candidateName: "Olivia Brown",
    appliedFor: "Product Manager",
    appliedDate: "August 25, 2023",
    email: "olivia.b@demo.com",
    mobileNumber: "(629)555-0123",
    status: "Selected",
  },
  {
    candidateName: "Ethan Miller",
    appliedFor: "QA Tester",
    appliedDate: "August 30, 2023",
    email: "ethan.m@demo.com",
    mobileNumber: "(629)555-0456",
    status: "In Process",
  },
  {
    candidateName: "Ethan Miller",
    appliedFor: "QA Tester",
    appliedDate: "August 30, 2023",
    email: "ethan.m@demo.com",
    mobileNumber: "(629)555-0456",
    status: "In Process",
  },
  {
    candidateName: "Ethan Miller",
    appliedFor: "QA Tester",
    appliedDate: "August 30, 2023",
    email: "ethan.m@demo.com",
    mobileNumber: "(629)555-0456",
    status: "In Process",
  },
];
