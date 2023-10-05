import Image from "next/image";

import React from "react";
import { Squares2X2Icon, UserGroupIcon } from "@heroicons/react/24/solid";
const sideBarLinks = [
  {
    id: 1,
    title: "Dashboard",
    link: "/dashboard",
    imgUrl: "/svg/dashboard_icon.svg",
  },
  {
    id: 2,
    title: "All Employees",
    link: "/dashboard/all_employees",
    imgUrl: "/svg/employee_user_icon.svg",
  },
  {
    id: 3,
    title: "All Departments",
    link: "/dashboard/all_departments",
    imgUrl: "/svg/community.svg",
  },
  {
    id: 4,
    title: "Payroll",
    link: "/dashboard/payroll",
    imgUrl: "/svg/coin-dollar.svg",
  },
  {
    id: 5,
    title: "Leaves",
    link: "/dashboard/leaves",
    imgUrl: "/svg/clipboard.svg",
  },
  {
    id: 6,
    title: "Holidays",
    link: "/dashboard/holidays",
    imgUrl: "/svg/task.svg",
  },
  {
    id: 7,
    title: "Settings",
    link: "/dashboard/settings",
    imgUrl: "/svg/setting.svg",
  },
];

export default function SideBar() {
  return (
    <aside className="relative w-2/12 p-[1.28rem]">
      <div className="h-full rounded-md bg-[#A2A1A819] p-[1.87rem] px-4">
        <Image
          src={"/svg/app_name_logo.svg"}
          alt="app logo"
          height={100}
          width={100}
          priority
        />
        <section className="mt-6 flex flex-col gap-8">
          {sideBarLinks.map((item) => {
            return (
              <div key={item.id} className="flex items-center gap-2">
                <Image
                  src={item.imgUrl}
                  alt=""
                  height={18}
                  width={18}
                  priority
                />
                <p className="text-sm">{item.title}</p>
              </div>
            );
          })}
        </section>
      </div>
    </aside>
  );
}
