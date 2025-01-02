import { cache } from "react";

import { QueryClient } from "@tanstack/react-query";

export const getQueryClient = cache(() => new QueryClient());

export const QUERY_KEY = {
  POST: {
    ALL: ["POST"],

    LIST_ALL: () => [...QUERY_KEY.POST.ALL, "LIST"],
    LIST: (category: string) => [...QUERY_KEY.POST.LIST_ALL(), category],

    DETAIL_ALL: () => [...QUERY_KEY.POST.ALL, "DETAIL"],
    DETAIL: (id: string) => [...QUERY_KEY.POST.DETAIL_ALL(), id],
  },
};

export const QUERY_OPTIONS = {};
