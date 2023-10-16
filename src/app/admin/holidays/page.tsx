"use client";
import React, { useState } from "react";
import { Button } from "@/components";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/solid";

export default function Page() {
  const holidays = [
    {
      date: "January 01, 2023",
      day: "Tuesday",
      holiday: "New year",
      upcoming: false,
    },
    {
      date: "February 14, 2023",
      day: "Tuesday",
      holiday: "Valentine's Day",
      upcoming: false,
    },
    {
      date: "March 17, 2023",
      day: "Friday",
      holiday: "St. Patrick's Day",
      upcoming: false,
    },
    {
      date: "April 01, 2023",
      day: "Saturday",
      holiday: "April Fools' Day",
      upcoming: false,
    },
    {
      date: "May 12, 2023",
      day: "Thursday",
      holiday: "Mother's Day",
      upcoming: false,
    },
    {
      date: "June 21, 2023",
      day: "Wednesday",
      holiday: "Summer Solstice",
      upcoming: false,
    },
    {
      date: "July 04, 2023",
      day: "Tuesday",
      holiday: "Independence Day",
      upcoming: false,
    },
    {
      date: "August 30, 2023",
      day: "Wednesday",
      holiday: "National Beach Day",
      upcoming: true,
    },
    {
      date: "September 22, 2023",
      day: "Friday",
      holiday: "First Day of Autumn",
      upcoming: true,
    },
    {
      date: "October 31, 2023",
      day: "Tuesday",
      holiday: "Halloween",
      upcoming: true,
    },
  ];

  const [searchFullWidth, setSearchFullWidth] = useState(false);
  const HeaderText: string[] = ["Date", "Day", "Holiday"];
  return (
    <>
      <div
        className="flex pl-2 md:justify-between md:pl-5"
        onClick={() => {
          setSearchFullWidth(false);
        }}
      >
        <Button
          type="button"
          size="small"
          className="w-10 bg-white md:hidden"
          onClick={() => {}}
        >
          <MagnifyingGlassIcon
            className="h-6 w-6 text-dark md:hidden"
            onClick={(event) => {
              event.stopPropagation();
              setSearchFullWidth(true);
            }}
          ></MagnifyingGlassIcon>
        </Button>

        <div
          className={`flex items-center  ${
            searchFullWidth ? " max-w-80 w-80" : "hidden md:block"
          }`}
        >
          <div
            className={`ml-0 h-[2rem] rounded-md border border-gray px-2 md:flex`}
          >
            <MagnifyingGlassIcon className="hidden h-6 w-6 text-gray md:block" />
            <input
              onClick={(event) => {
                event.stopPropagation();
              }}
              type="search"
              placeholder="search"
              className={`pl-2 ${
                searchFullWidth ? "w-70 max-w-80 flex" : "hidden  md:block"
              }`}
            />
          </div>
        </div>

        <div
          className={`${searchFullWidth ? "hidden" : "block"} pr-5 md:block`}
        >
          <Button
            size="medium"
            type="button"
            onClick={() => {}}
            className="mt-2 h-10"
          >
            <div className="flex space-x-2 ">
              <PlusCircleIcon className="h-6 w-6" />
              <p>Add New Holiday </p>
            </div>
          </Button>
        </div>
      </div>
      <div className="md:text-md  m-5 flex gap-2 text-sm text-gray">
        {HeaderText.map((headerText, id) => (
          <p key={id} className="min-w-[20%] flex-1 text-sm lg:flex-initial">
            {headerText}
          </p>
        ))}
      </div>

      <div
        onClick={() => {
          setSearchFullWidth(false);
        }}
      >
        {holidays.map((holiday, id) => (
          <div
            className={`md:text-md m-5 flex gap-2 border-l-2 pl-2 text-sm ${
              holiday.upcoming
                ? " border-l-primary-800"
                : "border-l-primary-200"
            }`}
          >
            <p key={id} className="min-w-[20%] flex-1 text-sm lg:flex-initial ">
              {holiday.date}
            </p>
            <p key={id} className="min-w-[20%] flex-1 text-sm lg:flex-initial">
              {holiday.day}
            </p>
            <p key={id} className="min-w-[20%] flex-1 text-sm lg:flex-initial">
              {holiday.holiday}
            </p>
          </div>
        ))}
      </div>

      <div className="md:text-md mx-4 mt-5 flex gap-2 text-sm">
        <div className="flex items-center gap-1 ">
          <EllipsisHorizontalCircleIcon className="h-2 w-2  text-primary-800" />
          <p> Upcoming</p>
        </div>
        <div className="flex items-center gap-1">
          <EllipsisHorizontalCircleIcon className="h-2 w-2 text-primary-200" />
          <p> Past Holidays</p>
        </div>
      </div>
    </>
  );
}
