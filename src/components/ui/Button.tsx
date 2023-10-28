"use client";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type buttonProps = {
  size?: "small" | "medium" | "fullwidth";
  type: "button" | "submit";
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
  className?: string;
  bgColor?: "white" | "primary";
};

export default function Button({
  size,
  type,
  children,
  disabled,
  className,
  onClick,
  bgColor,
}: buttonProps) {
  const normal =
    "bg-primary-500 text-white rounded-md text-light hover:bg-primary-600 flex items-center justify-center gap-2 disabled:bg-primary-200 transition-colors duration-150 px-2 w-fit h-[3rem]";
  const defaultClasses = cn(normal, {
    " w-[5rem]": size === "small",
    " w-[12rem]": size === "medium",
    " w-full": size === "fullwidth",
    "bg-white border border-gray text-gray hover:bg-primary-300 hover:text-light":
      bgColor === "white",
  });

  const combinedClasses = cn(defaultClasses, className);

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
