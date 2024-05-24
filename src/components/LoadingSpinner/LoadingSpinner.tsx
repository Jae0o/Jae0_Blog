import Lottie from "react-lottie-player";

import LOADING_ANIMATION from "@/assets/loading_animation.json";

interface LoadingSpinnerProps {
  size?: string;
}

const LoadingSpinner = ({ size = "20rem" }: LoadingSpinnerProps) => {
  return (
    <Lottie
      animationData={LOADING_ANIMATION}
      style={{
        width: size,
        height: size,
      }}
      loop
      play
    />
  );
};

export default LoadingSpinner;
