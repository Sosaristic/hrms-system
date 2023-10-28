"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components";

export default function EmployeesTopBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  return (
    <div className="mt-4 flex items-center gap-4 px-4">
      <div className="boder relative flex h-[2.5rem] items-center gap-2 rounded-md border border-gray p-1">
        <span>
          <MagnifyingGlassIcon className="h-6 w-6" />
        </span>

        <input
          type="search"
          name="search"
          id="search"
          placeholder="search"
          value={search}
          className="hidden h-full outline-none md:block"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Button
        type="button"
        onClick={() => router.push("/admin/all_employees/add_employee")}
        className="ml-auto h-[2.5rem]"
      >
        <span>
          <PlusCircleIcon className="h-6 w-6" />
        </span>
        <span className="hidden md:inline">Add New Employee</span>
      </Button>
      <Button
        type="button"
        bgColor="white"
        onClick={() => console.log("filter button")}
        className="h-[2.5rem]"
      >
        Filter
      </Button>
    </div>
  );
}
