"use client";

import { usePathname } from "next/navigation";

import { useEffect, useRef, useState } from "react";

import { motion, useScroll } from "motion/react";

interface ScrollProgressProps {
  baseElement: HTMLElement;
}

const ScrollProgress = ({ baseElement }: ScrollProgressProps) => {
  const ref = useRef(baseElement);
  const path = usePathname();

  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({ container: ref });

  useEffect(() => {
    setProgress(scrollYProgress.get());
    console.log(path);

    const unsubscribe = scrollYProgress.on("change", latestProgress =>
      setProgress(latestProgress),
    );

    return () => unsubscribe();
  }, [path]);

  return (
    <motion.div
      className="w-full h-[1rem] sticky top-0 left-0 right-0 opacity-[0.6] bg-yellow_500 origin-[0%] z-progress"
      style={{ scaleX: progress }}
    />
  );
};

export default ScrollProgress;
