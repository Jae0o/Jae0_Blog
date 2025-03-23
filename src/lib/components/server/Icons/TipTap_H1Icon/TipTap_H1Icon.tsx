import { IconGlobalProps } from "../IconGlobal.type";

const TipTap_H1Icon = ({
  size = "3.2rem",
  fill = "black",
  ...rest
}: IconGlobalProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      fill={fill}
      viewBox="0 -960 960 960"
      {...rest}
    >
      <path d="M200-280v-400h80v160h160v-160h80v400h-80v-160H280v160h-80Zm480 0v-320h-80v-80h160v400h-80Z" />
    </svg>
  );
};

export default TipTap_H1Icon;
