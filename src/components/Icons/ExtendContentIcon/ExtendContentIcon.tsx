import { IconGlobalProps } from "../IconGlobal.type";

const ExtendContentIcon = ({
  size = "3.2rem",
  fill = "black",
  ...rest
}: IconGlobalProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 -960 960 960"
      fill={fill}
      {...rest}
    >
      <path d="M194.5-194.5v-251h91v160h160v91h-251Zm480-320v-160h-160v-91h251v251h-91Z" />
    </svg>
  );
};

export default ExtendContentIcon;
