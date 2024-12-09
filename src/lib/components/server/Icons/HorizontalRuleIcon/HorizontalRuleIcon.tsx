import { IconGlobalProps } from "../IconGlobal.type";

const HorizontalRuleIcon = ({
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
      <path d="M151.87-434.5v-91h656.26v91H151.87Z" />
    </svg>
  );
};

export default HorizontalRuleIcon;
