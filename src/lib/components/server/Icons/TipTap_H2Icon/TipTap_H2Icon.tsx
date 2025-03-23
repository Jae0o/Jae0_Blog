import { IconGlobalProps } from "../IconGlobal.type";

const TipTap_H2Icon = ({
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
      <path d="M120-280v-400h80v160h160v-160h80v400h-80v-160H200v160h-80Zm400 0v-160q0-33 23.5-56.5T600-520h160v-80H520v-80h240q33 0 56.5 23.5T840-600v80q0 33-23.5 56.5T760-440H600v80h240v80H520Z" />{" "}
    </svg>
  );
};

export default TipTap_H2Icon;
