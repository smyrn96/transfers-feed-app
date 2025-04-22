import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { validLinks } from "../constants";

type useQueryHookType = {
  query: string;
  serviceFunction: () => Promise<AxiosResponse<any, any>>;
};

export const useQueryHook = ({ query, serviceFunction }: useQueryHookType) =>
  useQuery({
    queryKey: [query],
    queryFn: async () => {
      const { data } = await serviceFunction();
      return data;
    },
  });

export const isValidRedirectLink = (link: string) => {
  return validLinks.find((valid) => valid === link);
};

export const capitalizeFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const getLastPathSegment = (pathname: string) => {
  const pathSegments = pathname.split("/");
  const returnSegments = Boolean(pathSegments[pathSegments.length - 1])
    ? pathSegments[pathSegments.length - 1]
    : "scheduled";

  return returnSegments;
};

export const formatDateHelper = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();

  const isSameDay = (d1: Date, d2: Date) =>
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear();

  const tomorrow = new Date();
  tomorrow.setDate(now.getDate() + 1);

  let prefix = "";

  if (isSameDay(date, now)) {
    prefix = "Today";
  } else if (isSameDay(date, tomorrow)) {
    prefix = "Tomorrow";
  } else {
    prefix = date.toLocaleDateString(undefined, {
      weekday: "short", // e.g., "Mon"
    });
  }

  const day = date.getDate();
  const month = date.toLocaleString(undefined, { month: "long" });
  const time = date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${prefix}, ${day} ${month}, ${time}`;
};
