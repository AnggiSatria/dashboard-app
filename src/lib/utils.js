import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const removeEmptyAttributes = (params) => {
  const queryString = Object?.entries(params)
    .filter(([_, value]) => value !== undefined && value !== "")
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return queryString;
};

export const formatNumbers = (currency, value) => {
  if (value === "") return "";
  const customNumber = new Intl.NumberFormat(currency).format(value);
  return customNumber?.split(".")?.slice(1, customNumber.split(".").length)
    .length >= 2
    ? `${customNumber?.split(".")?.slice(0, 1)}M`
    : `${customNumber?.split(".")?.slice(0, 1)}K`;
};

export const capitalizeFirst = (str) => {
  return str?.charAt(0)?.toUpperCase() + str?.slice(1);
};
