"use client";

import { useEffect, useState } from "react";

import { ScrollProgress } from "./components";

const ScrollProgressBar = () => {
  const [baseElement, setBaseElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const mainFrame = document.getElementById("main_frame");

    if (!mainFrame) return;

    setBaseElement(mainFrame);
  }, []);

  if (!baseElement) return null;

  return <ScrollProgress baseElement={baseElement} />;
};

export default ScrollProgressBar;
