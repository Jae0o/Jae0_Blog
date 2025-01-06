import {
  NextJSIcon,
  TailwindIcon,
  TanstackIcon,
} from "@/lib/components/server";

export const STACK_FLOW_NODES = [
  {
    id: "1",
    type: "stack",
    data: { title: "Next.js", icon: <NextJSIcon size="100%" /> },
    position: { x: 0, y: 0 },
  },

  {
    id: "2",
    type: "stack",
    data: { title: "Tailwind", icon: <TailwindIcon size="100%" /> },
    position: { x: 0, y: 100 },
  },

  {
    id: "3",
    type: "stack",
    data: { title: "Tanstack Query", icon: <TanstackIcon size="100%" /> },
    position: { x: 150, y: 100 },
  },
];

export const STACK_FLOW_EDGES = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "1", target: "3" },
];
