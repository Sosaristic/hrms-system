"use client";
import { useState, ChangeEvent, FocusEvent } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

type TextFieldProps = {
  name: string;
  placehoder?: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  type: "email" | "password" | "text";
  error?: string | boolean;
};

export default function TextField({
  name,
  onChange,
  onBlur,
  type,
  label,
  placehoder,
  error,
  value,
}: TextFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleInputType = (type: string) => {
    if (type != "password") return type;

    if (showPassword) return "text";
    if (!showPassword) return "password";
  };

  return (
    <div className="relative flex flex-col font-inter">
      <label
        htmlFor="email"
        className=" font-semi-bold ml-1 text-sm font-semibold capitalize text-primary-500"
      >
        {label}
      </label>
      <div
        className={`border-darkGrey group relative flex items-center justify-start gap-2 overflow-hidden rounded-md border px-2
           py-3 pr-2 transition-colors duration-200 focus-within:border-primary-500 ${
             error && "border-red-500 focus-within:border-red-500"
           }`}
      >
        <input
          autoComplete="off"
          className="h-full w-full bg-transparent text-dark outline-none placeholder:text-gray"
          placeholder={placehoder}
          type={handleInputType(type)}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
        />
        {type == "password" && (
          <button
            type="button"
            className={`text-[1rem] group-focus-within:text-white`}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <EyeIcon className="h-6 w-6 text-gray" />
            ) : (
              <EyeSlashIcon className="h-6 w-6 text-gray" />
            )}
          </button>
        )}
      </div>
      <p className={` min-h-4 font-inter  text-xs text-red-500`}>{error}</p>
    </div>
  );
}
