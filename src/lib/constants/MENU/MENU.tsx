import {
  BlueBookIcon,
  BrownBookIcon,
  DisplayIcon,
  GreenBookIcon,
  OrangeBookIcon,
} from "@/lib/components/server";

export const MENU_LIST = [
  {
    title: "Blog 작업 기록",
    category: "BLOG",
    Icon: <OrangeBookIcon />,
  },
  { title: "Yap 기록", category: "YAP", Icon: <BlueBookIcon /> },
  {
    title: "Masil Gasil 기록",
    category: "MASILGASIL",
    Icon: <GreenBookIcon />,
  },
  { title: "회고 기록", category: "WORK", Icon: <BrownBookIcon /> },
  { title: "Frontend", category: "Frontend", Icon: <DisplayIcon /> },
];
