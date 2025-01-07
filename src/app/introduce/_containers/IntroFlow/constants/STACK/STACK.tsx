import {
  ChromaticIcon,
  FirebaseIcon,
  FramerIcon,
  NextJSIcon,
  StorybookIcon,
  TailwindIcon,
  TanstackIcon,
  VercelIcon,
  ZustandIcon,
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

  {
    id: "zustand",
    type: "stack",
    data: { title: "Zustand", icon: <ZustandIcon size="100%" /> },
    position: { x: -150, y: 160 },
  },

  {
    id: "framer",
    type: "stack",
    data: { title: "Framer-Motion", icon: <FramerIcon size="100%" /> },
    position: { x: 150, y: 160 },
  },

  // BACKEND -----------------------------------------
  {
    id: "back",
    type: "title",
    data: { title: "Back" },
    position: { x: 700, y: 0 },
  },

  {
    id: "firebase",
    type: "stack",
    data: { title: "Firebase", icon: <FirebaseIcon size="100%" /> },
    position: { x: 700, y: 80 },
  },

  // Bridge -----------------------------------------
  {
    id: "tanstack",
    type: "stack",
    data: { title: "Tanstack Query", icon: <TanstackIcon size="100%" /> },
    position: { x: 200, y: 80 },
  },

  // Deploy -----------------------------------------
  {
    id: "deploy",
    type: "title",
    data: { title: "Deploy" },
    position: { x: 200, y: -320 },
  },

  {
    id: "chromatic",
    type: "stack",
    data: { title: "Chromatic", icon: <ChromaticIcon size="100%" /> },
    position: { x: 350, y: -240 },
  },

  {
    id: "vercel",
    type: "stack",
    data: { title: "Vercel", icon: <VercelIcon size="100%" /> },
    position: { x: 200, y: -240 },
  },

  {
    id: "storybook",
    type: "stack",
    data: { title: "Storybook", icon: <StorybookIcon size="100%" /> },
    position: { x: 350, y: -160 },
  },
];

export const STACK_FLOW_EDGES = [
  // Front -----------------------------------------
  { id: "front-next", source: "front", target: "next" },
  { id: "next-tailwind", source: "next", target: "tailwind" },
  { id: "next-zustand", source: "next", target: "zustand" },
  { id: "next-framer", source: "next", target: "framer" },
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

  // Deploy -----------------------------------------
  { id: "deploy-vercel", source: "deploy", target: "vercel" },
  { id: "deploy-chromatic", source: "deploy", target: "chromatic" },
  { id: "vercel-next", source: "vercel", target: "next", animated: true },
  { id: "chromatic-storybook", source: "chromatic", target: "storybook" },
];
