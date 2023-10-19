"use client";
const asideLinks = [
  {
    id: 1,
    title: "profile",
    icon: "/svg/user.svg",
    link: "profile/personal_information",
  },
  { id: 2, title: "projects", icon: "/svg/file.svg", link: "projects" },
  { id: 3, title: "leave", icon: "/svg/clipboard.svg", link: "leave" },
];

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type singleEnployeeProps = {
  windowSize: "desktop" | "mobile";
};
export default function SingleEmployeeSideBar({
  windowSize,
}: singleEnployeeProps) {
  const pathname = usePathname();

  return (
    <div
      className={`  ${
        windowSize === "desktop"
          ? "relative hidden h-fit flex-col shadow-sm md:flex md:w-4/12 lg:w-3/12"
          : "fixed bottom-0 left-0 right-0 z-[100] flex w-full flex-row md:hidden"
      } gap-2 overflow-hidden rounded-md bg-white  `}
    >
      {asideLinks.map((item) => {
        const active = pathname.includes(item.title);
        return (
          <Link
            key={item.id}
            href={`${pathname.slice(0, 24)}/${item.link}`}
            className={`flex flex-1 items-center ${
              windowSize === "desktop"
                ? "flex-row py-3"
                : "flex-col py-1 text-xs"
            } gap-2 px-4  capitalize lg:hover:bg-primary-500 lg:hover:text-white ${
              active ? "bg-primary-500 text-white" : ""
            }`}
          >
            <Image
              src={item.icon}
              alt=""
              height={24}
              width={24}
              priority
              className={`${active ? "svg-color-employee" : ""}`}
            />
            <span>{item.title}</span>
          </Link>
        );
      })}
    </div>
  );
}
