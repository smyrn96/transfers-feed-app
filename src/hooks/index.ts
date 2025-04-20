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
