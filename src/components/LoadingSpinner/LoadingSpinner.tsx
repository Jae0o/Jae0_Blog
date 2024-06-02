import LOADING_ANIMATION from "@/assets/animation/loading_animation.json";
import { Player } from "@lottiefiles/react-lottie-player";

interface LoadingSpinnerProps {
  size?: string;
}

const LoadingSpinner = ({ size = "20rem" }: LoadingSpinnerProps) => {
  return (
    <Player
      src={LOADING_ANIMATION}
      style={{
        width: size,
        height: size,
      }}
      autoplay
      loop
    />
  );
};

export default LoadingSpinner;
