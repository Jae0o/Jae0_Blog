import { MotionValue } from "framer-motion";

import * as S from "./ProgressBar.style";

interface ProgressBarProps {
  scrollYProgress: MotionValue<number>;
}

const ProgressBar = ({ scrollYProgress }: ProgressBarProps) => {
  return <S.ProgressBar style={{ scaleX: scrollYProgress }} />;
};

export default ProgressBar;
