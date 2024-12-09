import { cache } from "react";

import { QueryClient } from "@tanstack/react-query";

export const getQueryClient = cache(() => new QueryClient());

export const QUERY_KEY = {};

export const QUERY_OPTIONS = {};
