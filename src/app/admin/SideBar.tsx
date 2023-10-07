"use client";
import React, { RefObject } from "react";

import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@/components";
import { PowerIcon } from "@heroicons/react/24/solid";
const sideBarLinks = [
  {
    id: 1,
    title: "Dashboard",
    link: "/admin/dashboard",
    imgUrl: "/svg/dashboard_icon.svg",
  },
  {
    id: 2,
    title: "All Employees",
    link: "/admin/all_employees",
    imgUrl: "/svg/employee_user_icon.svg",
  },
  {
    id: 3,
    title: "All Departments",
    link: "/admin/all_departments",
    imgUrl: "/svg/community.svg",
  },
  {
    id: 4,
    title: "Payroll",
    link: "/admin/payroll",
    imgUrl: "/svg/coin-dollar.svg",
  },
  {
    id: 5,
    title: "Leaves",
    link: "/admin/leaves",
    imgUrl: "/svg/clipboard.svg",
  },
  {
    id: 6,
    title: "Holidays",
    link: "/admin/holidays",
    imgUrl: "/svg/task.svg",
  },
  {
    id: 7,
    title: "Settings",
    link: "/admin/settings",
    imgUrl: "/svg/setting.svg",
  },
];

type SideBarProps = {
  screen: "desktop" | "mobile";
  sideBarRef?: RefObject<any>;
};

export default function SideBar({ screen, sideBarRef }: SideBarProps) {
  const pathname = usePathname();

  return (
    <aside
      ref={sideBarRef}
      className={`relative  flex-col  ${
        screen === "desktop"
          ? "hidden p-[1.28rem] md:flex md:w-4/12 lg:w-3/12"
          : "flex h-full w-8/12 bg-primary-100"
      } `}
    >
      <div className="flex h-full w-full flex-col rounded-md px-2 py-[1.87rem] md:bg-[#A2A1A819] md:p-[1.87rem] md:px-4">
        <Image
          src={"/svg/app_name_logo.svg"}
          alt="app logo"
          height={100}
          width={100}
          priority
        />
        <section className="mt-6 flex flex-col gap-4">
          {sideBarLinks.map((item) => {
            const active = pathname.includes(item.link);
            return (
              <Link
                href={item.link}
                key={item.id}
                className={`flex items-center gap-2 px-4 py-2 ${
                  active
                    ? "border-l-2 border-l-primary-800 bg-primary-100 font-semibold text-primary-800"
                    : "bg-transparent"
                }`}
              >
                <Image
                  src={item.imgUrl}
                  alt=""
                  height={18}
                  width={18}
                  priority
                  className={`${active ? "svg-color" : ""} `}
                />
                <p className="text-sm">{item.title}</p>
              </Link>
            );
          })}
        </section>
        <div className="mt-auto flex items-center gap-2 md:hidden">
          <Avatar
            imageUrl="/images/girl.jpg"
            alt="girl"
            rounded="md"
            size="small"
          />
          <div className="flex flex-col text-sm">
            <p className="font-bold">Robert Allen</p>
            <p>HR Manager</p>
          </div>
        </div>
        <button className="mt-4 flex items-center justify-center gap-4 rounded-2xl border border-primary-500 py-1 font-semibold text-primary-500 md:mt-auto">
          Logout <PowerIcon className="h-6 w-6 stroke-[6px]" />{" "}
        </button>
      </div>
    </aside>
  );
}
