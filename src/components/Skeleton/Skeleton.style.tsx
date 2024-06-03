import styled, { keyframes } from "styled-components";

export const SkeletonKeyframe = keyframes`
      0% {
      transform: translateX(-100%);
    }
    50%,
    100% {
      transform: translateX(100%);
    }  
`;

export const SkeletonLayout = styled.div<{
  $width: string | number;
  $height: string | number;
  $radius: string | number;
}>`
  width: ${({ $width }) =>
    typeof $width === "number" ? `${$width}px` : $width};
  height: ${({ $height }) =>
    typeof $height === "number" ? `${$height}px` : $height};

  position: relative;
  overflow: hidden;
  background-color: #e6e6e6;
  border-radius: ${({ $radius }) =>
    typeof $radius === "number" ? `${$radius}px` : $radius};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 300%;
    height: 100%;

    background-image: linear-gradient(
      120deg,
      #e6e6e6,
      #e6e6e6,
      #f0f0f0,
      #e6e6e6,
      #e6e6e6
    );

    background-repeat: no-repeat;
    animation: ${SkeletonKeyframe} 2s infinite linear;
  }
`;
