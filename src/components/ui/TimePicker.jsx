"use client";
import React from "react";
import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";

export default function TimePicker({ dateValue, setDate }) {
  return (
    <>
      <Flatpickr
        value={dateValue}
        onChange={([date]) => setDate(date)}
        options={{ dateFormat: "Y-m-d", disableMobile: true }}
        className="h-[3rem] flex-1 bg-transparent text-gray outline-none"
      ></Flatpickr>
    </>
  );
}
