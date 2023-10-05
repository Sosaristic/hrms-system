import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type buttonProps = {
  size?: "small" | "large" | "fullwidth";
  type: "button" | "submit";
  children: ReactNode;
};

export default function Button({ size, type, children }: buttonProps) {
  const normal =
    "bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors duration-150 w-full h-[3.5rem]";
  const small = "w-[5rem] h-[3.5ren] bg-primary";

  const combinedClasses = cn(normal, size === "small" && small);

  return (
    <button type={type} className={combinedClasses}>
      {children}
    </button>
  );
}
