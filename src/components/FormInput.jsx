"use client";

import { IconEyeOff } from "@tabler/icons-react";
import { IconEye } from "@tabler/icons-react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function FormInput({
  label,
  type,
  placeholder,
  name,
  value,
  register,
  errors,
  size = "md",
  className = "",
  isDisabled = false,
  isOnlyNumber = false,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const registerProps = register
    ? {
        ...register(name),
      }
    : {};
  const sizeInput = {
    sm: "py-1 text-xs font-normal",
    md: "py-2 text-sm font-normal",
    lg: "py-3 text-md font-normal",
  };

  const handleKeyPress = (event) => {
    if (isOnlyNumber && !/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <div className={`w-full ${label ? "" : "h-full"}`}>
      {label ? (
        <label className="mb-3 text-[14px] font-[600]" htmlFor={name}>
          {label}
        </label>
      ) : null}

      <div className={`relative ${label ? "" : "h-full"}`}>
        <input
          disabled={isDisabled}
          value={value}
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          name={name}
          onKeyPress={handleKeyPress}
          className={twMerge(
            `rounded-md ${label ? "mt-1" : ""} ${
              sizeInput[size]
            } px-3 text-[#0a0a0a] font-[500] w-full border-2 md:text-xs border-[#DADADA] outline-none text-xs ${
              label ? "" : "h-full -mt-1"
            }`,
            className
          )}
          {...registerProps}
        />
        {type === "password" && (
          <div className="absolute right-1 mx-1 mt-2 top-1">
            {showPassword ? (
              <IconEye
                onClick={() => setShowPassword(false)}
                color="#010E80"
                className="w-5 h-5"
              />
            ) : (
              <IconEyeOff
                onClick={() => setShowPassword(true)}
                color="#010E80"
                className="w-5 h-5"
              />
            )}
          </div>
        )}
      </div>
      <h6 className="text-xs text-[#D04848]">{errors?.[`${name}`]?.message}</h6>
    </div>
  );
}
