import React from "react";

import { HomeIcon, SearchIcon, WriteIcon } from "@/lib/components/server";

import { ROUTE_PATH } from "@/lib/constants";

import { AsideProfileActionType } from "../../components/AsideProfileButton/AsideProfileButton.type";

export const ASIDE_ACTIONS: {
  action: AsideProfileActionType;
  Icon: React.ReactNode;
  path: string;
}[] = [
  {
    action: "search",
    Icon: <SearchIcon size="2.4rem" />,
    path: ROUTE_PATH.HOME,
  },
  {
    action: "write",
    Icon: <WriteIcon size="2.4rem" />,
    path: ROUTE_PATH.NEW_EDIT,
  },
  {
    action: "home",
    Icon: <HomeIcon size="2.4rem" />,
    path: ROUTE_PATH.HOME,
  },
];
