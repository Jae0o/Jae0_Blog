import { IconGlobalProps } from "../IconGlobal.type";

const TipTap_BoldIcon = ({
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
      <path d="M272-200v-560h221q65 0 120 40t55 111q0 51-23 78.5T602-491q25 11 55.5 41t30.5 90q0 89-65 124.5T501-200H272Zm121-112h104q48 0 58.5-24.5T566-372q0-11-10.5-35.5T494-432H393v120Zm0-228h93q33 0 48-17t15-38q0-24-17-39t-44-15h-95v109Z" />
    </svg>
  );
};

export default TipTap_BoldIcon;
