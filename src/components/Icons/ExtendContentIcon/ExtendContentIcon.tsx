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
      <path d="M177-177v-286h126v160h160v126H177Zm480-320v-160H497v-126h286v286H657Z" />
    </svg>
  );
};

export default ExtendContentIcon;
