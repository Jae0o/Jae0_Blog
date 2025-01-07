import {
  NextJSIcon,
  TailwindIcon,
  TanstackIcon,
} from "@/lib/components/server";

export const STACK_FLOW_NODES = [
  {
    id: "next",
    type: "stack",
    data: { title: "Next.js", icon: <NextJSIcon size="100%" /> },
    position: { x: 0, y: 0 },
  },

  {
    id: "tailwind",
    type: "stack",
    data: { title: "Tailwind", icon: <TailwindIcon size="100%" /> },
    position: { x: 0, y: 100 },
  },

  {
    id: "tanstack",
    type: "stack",
    data: { title: "Tanstack Query", icon: <TanstackIcon size="100%" /> },
    position: { x: 150, y: 100 },
  },
];

export const STACK_FLOW_EDGES = [
  { id: "next-tailwind", source: "next", target: "tailwind" },
  { id: "next-tanstack", source: "next", target: "tanstack" },
];
