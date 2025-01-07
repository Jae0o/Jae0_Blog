import {
  FirebaseIcon,
  NextJSIcon,
  TailwindIcon,
  TanstackIcon,
} from "@/lib/components/server";

export const STACK_FLOW_NODES = [
  // Front -----------------------------------------
  {
    id: "front",
    type: "title",
    data: { title: "Front" },
    position: { x: 0, y: 0 },
  },
  {
    id: "next",
    type: "stack",
    data: { title: "Next.js", icon: <NextJSIcon size="100%" /> },
    position: { x: 0, y: 80 },
  },

  {
    id: "tailwind",
    type: "stack",
    data: { title: "Tailwind", icon: <TailwindIcon size="100%" /> },
    position: { x: 0, y: 160 },
  },

  // Bridge -----------------------------------------
  {
    id: "tanstack",
    type: "stack",
    data: { title: "Tanstack Query", icon: <TanstackIcon size="100%" /> },
    position: { x: 400, y: 80 },
  },

  // BACKEND -----------------------------------------
  {
    id: "back",
    type: "title",
    data: { title: "Back" },
    position: { x: 600, y: 0 },
  },

  {
    id: "firebase",
    type: "stack",
    data: { title: "Firebase", icon: <FirebaseIcon size="100%" /> },
    position: { x: 600, y: 80 },
  },
];

export const STACK_FLOW_EDGES = [
  // Front -----------------------------------------
  { id: "front-next", source: "front", target: "next" },
  { id: "next-tailwind", source: "next", target: "tailwind" },
  {
    id: "next-tanstack",
    source: "next",
    target: "tanstack",
    animated: true,
  },

  // Bridge -----------------------------------------
  {
    id: "tanstack-firebase",
    source: "tanstack",
    target: "firebase",
    animated: true,
  },

  // BACKEND -----------------------------------------
  { id: "back-firebase", source: "back", target: "firebase" },
];
