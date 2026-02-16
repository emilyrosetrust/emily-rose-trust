import Lottie from "lottie-react";

interface LottieIconProps {
  animationData: object;
  size?: number;
}

const LottieIcon = ({ animationData, size = 40 }: LottieIconProps) => {
  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      speed={0.2}
      style={{ width: size, height: size }}
    />
  );
};

export default LottieIcon;
