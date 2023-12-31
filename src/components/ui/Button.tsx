import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type buttonProps = {
  size?: "small" | "medium" | "fullwidth";
  type: "button" | "submit";
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
  className?: string;
};

export default function Button({
  size,
  type,
  children,
  disabled,
  className,
  onClick,
}: buttonProps) {
  const normal =
    "bg-primary-500 text-white rounded-md hover:bg-primary-600 disabled:bg-primary-200 transition-colors duration-150 px-2 w-fit h-[3.5rem]";
  const defaultClasses = cn(normal, {
    " w-[5rem]": size === "small",
    " w-[12rem]": size === "medium",
    " w-full": size === "fullwidth",
  });

  const combinedClasses = cn(defaultClasses, className);

  return (
    <button type={type} className={combinedClasses} disabled={disabled}>
      {children}
    </button>
  );
}
