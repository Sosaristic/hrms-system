"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const topBarLinks = [
  {
    id: 1,
    title: "personal information",
    icon: "/svg/user.svg",
    link: "personal_information",
  },
  {
    id: 2,
    title: "professional information",
    icon: "/svg/briefcase.svg",
    link: "professional_information",
  },
  { id: 3, title: "documents", icon: "/svg/clipboard.svg", link: "documents" },
  {
    id: 4,
    title: "account access",
    icon: "/svg/lock.svg",
    link: "account_access",
  },
];

export default function TopBar() {
  const pathname = usePathname();

  return (
    <div className="employee-profile-top-bar flex gap-2 overflow-x-auto">
      {topBarLinks.map((item) => {
        const active = pathname.includes(item.link);
        return (
          <Link
            key={item.id}
            href={`${pathname.slice(0, 32)}/${item.link}`}
            className={`flex min-w-fit items-center gap-2 px-4 py-3 font-inter text-xs capitalize  ${
              active
                ? "border-b-2 border-b-primary-500 text-primary-500"
                : "border-b border-b-gray"
            }`}
          >
            <Image
              src={item.icon}
              alt=""
              height={24}
              width={24}
              priority
              className={`${active ? "svg-color" : ""}`}
            />
            <span>{item.title}</span>
          </Link>
        );
      })}
    </div>
  );
}
