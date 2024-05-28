import { getOptions } from "../firebase";

export const QUERY_KEY = {
  GET_OPTIONS: (optionName: string) => ["options", "get", optionName],
};

export const QUERY_OPTIONS = {
  GET_OPTIONS: (optionName: string) => ({
    queryKey: QUERY_KEY.GET_OPTIONS(optionName),
    queryFn: () => getOptions(optionName),
    gcTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 18,
  }),
};
