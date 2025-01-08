import { IconGlobalProps } from "../../IconGlobal.type";

const VercelIcon = ({ size = "3.2rem", ...rest }: IconGlobalProps) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
      {...rest}
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path d="M2310 5109 c-502 -55 -974 -249 -1355 -556 -129 -104 -340 -321 -433 -445 -265 -354 -434 -758 -498 -1193 -22 -147 -29 -428 -15 -575 42 -433 180 -833 405 -1174 414 -629 1047 -1032 1791 -1142 147 -22 428 -29 575 -15 433 42 833 180 1174 405 629 414 1032 1047 1142 1791 22 147 29 428 15 575 -51 524 -238 988 -558 1385 -104 129 -321 340 -445 433 -354 265 -755 432 -1193 498 -121 18 -487 26 -605 13z m909 -2348 c347 -607 631 -1105 631 -1107 0 -2 -569 -4 -1265 -4 -696 0 -1265 2 -1265 5 0 8 1263 2216 1266 2212 1 -1 287 -499 633 -1106z" />
      </g>
    </svg>
  );
};

export default VercelIcon;
