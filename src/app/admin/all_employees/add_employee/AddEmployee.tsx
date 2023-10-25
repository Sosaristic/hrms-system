"use client";
import Image from "next/image";
import { useRef, useState, MutableRefObject } from "react";
import Step1 from "./Step1";
import { Combined, Step1FormValuesTypes } from "./employeeTypes";
import Step2 from "./Step2";
import Step3 from "./Step3";

const topBardivs = [
  {
    id: 1,
    title: "personal information",
    icon: "/svg/user.svg",
  },
  {
    id: 2,
    title: "professional information",
    icon: "/svg/briefcase.svg",
  },
  {
    id: 3,
    title: "account access",
    icon: "/svg/lock.svg",
  },
];

const TopBar = ({ step }: { step: number }) => {
  return (
    <div className="employee-profile-top-bar flex w-full gap-2 overflow-x-auto">
      {topBardivs.map((item) => {
        const active = step === item.id;
        return (
          <div
            key={item.id}
            className={`flex min-w-fit items-center gap-2 px-4 py-3 font-inter text-xs font-[500] capitalize  ${
              active
                ? "border-b-[3px] border-b-primary-500 text-primary-500"
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
          </div>
        );
      })}
    </div>
  );
};

export default function AddEmployee() {
  const [steps, setSteps] = useState(1);
  const stepsData = useRef<Combined | null>(null);
  const handleStepsData = (data: Combined): void => {
    stepsData.current = { ...stepsData.current, ...data };
    if (steps < 3) {
      setSteps((prev) => prev + 1);
    } else {
      console.log("form submitted");
      console.log(stepsData.current);
    }
  };

  return (
    <div>
      <TopBar step={steps} />
      {steps === 1 ? (
        <Step1 handleStep1Data={handleStepsData} />
      ) : steps === 2 ? (
        <Step2 handleStep2Data={handleStepsData} setSteps={setSteps} />
      ) : (
        <Step3 handleStep3Data={handleStepsData} setSteps={setSteps} />
      )}
    </div>
  );
}
