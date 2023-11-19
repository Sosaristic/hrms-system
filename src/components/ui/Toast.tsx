"use client";
import { ReactNode, useEffect, useState } from "react";

interface DangerToastProps {
  icon: ReactNode;
  message: string;
}

function DangerToast({ icon, message }: DangerToastProps) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 10000);
  });
  return (
    isOpen && (
      <div
        id="toast-danger"
        className="text-gray-500 dark:text-gray-400 dark:bg-gray-800 mb-4 flex w-full items-center rounded-lg bg-red-200 p-4 shadow "
        role="alert"
      >
        {/* <div className="dark:bg-red-00 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-500  dark:text-red-200">
          {icon}
          <span className="sr-only">Error icon</span>
        </div> */}
        <div className="  text-sm font-normal">{message}</div>
        <button
          type="button"
          className="text-gray-400 focus:ring-gray-300 dark:text-gray-500 dark:bg-gray-800 dark:hover:bg-gray-700 -mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-200  p-1.5 hover:bg-red-600 focus:ring-2 dark:hover:text-white"
          data-dismiss-target="#toast-danger"
          aria-label="Close"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <span className="sr-only">Close</span>
          {icon}
        </button>
      </div>
    )
  );
}

export default DangerToast;
