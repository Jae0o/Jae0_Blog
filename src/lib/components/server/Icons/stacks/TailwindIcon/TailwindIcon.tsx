import { IconGlobalProps } from "../../IconGlobal.type";

const TailwindIcon = ({ size = "3.2rem", ...rest }: IconGlobalProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...rest}
    >
      <rect
        width="200"
        height="200"
        fill="url(#pattern0_1_4)"
      />
      <defs>
        <pattern
          id="pattern0_1_4"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1_4"
            transform="scale(0.005)"
          />
        </pattern>
        <image
          id="image0_1_4"
          width="200"
          height="200"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAM1BMVEUAAAAAt9YAuNYBuNYBuNYBuNYBuNYBuNYBuNYBuNYBuNYBuNYBuNYBuNYBuNYBuNYBuNZy7gkgAAAAEHRSTlMACBMeMUJacIOWo7HB0eb2J2wZbAAAAAlwSFlzAAALEwAACxMBAJqcGAAAALRlWElmSUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAMgAAAADoAQAAQAAAMgAAAAAAAAAGOWMCAAABG5JREFUeJztnAlywjAMRb3v2/1P20mhBUoaYlvBDqN3gEw+kmVtgRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQd4FFVIb67wPwXtnjVaCkpNBpfGprJC8kadRI0zIZYMcNCfTw3UsOwiakZkRbtMWD3axgsyKCKUKP6cU7ks1bsLDonc71T1Zk7nglV51I07lX6rJHPMZxZQu/CShmLo+HaWkKdyLNkSrP+QsR6sghPTrWFCjZRALoqOU0UdeA+koxQzVIcF0jFXCV4uOEyoJkDqalNDJDkirEgYS7VhHYgITu2gAuYC6b/QVVNUb2AzhWuLhDZI3SnLOhdQ2vkmJKR74Sk9GtFTunUo0TEJwM0hYe5xoTV3y3pfTpYB41s+LRglUwlfaxCylMoAOfv39tuKMSodFYfr9O0qwYipsdw9YY2Bzr1xGfJ/BCKCDpH0/XWMRHOWeTocCyhZ3HUveGL/8/1WjvD4yQRx1W8rOsq65gvTrz7+FQ5ASJpUsDu9NpD/XEyHs7oICMYjYa4/e5DI5LS9NFsqVeQjoIPmirntMT9+rlJJTSk+RHCRkEV+ZcHcqWQOm8VKdrEloJRZEB6vvogMrSeO6k7BK5DAdsErMQB2QSsLgyTCUkjS8fQ+jJE/QvBcASvIMrXsi0mfoIB3Txrl0EEK7BnVpGh13hVEDca7BPDX5oFr+FGsSJY2fz60gqw+9G34N/oOsskqY4Bb8F2HzuReJblDlX2uJZ9i4W4ZObuO2T/4cKq5wZZ/3IFOw6iCPYlIt+68hLgTvLOgGLBNKG2OttWZZrT0oRjFpwroHRKdnP4m/iMfO2IonOzXdnfvEfZdyg+xmSue6FmBLnNcsojIlSnpKKcx+RmKn2qrSF9O4t8P8J6yNkr4mwURGUX1tm2kqa1160Z+wkDxNeW3KJzSaCVEgOkqJg2tsCaRjdBOKAy6OjlRCQRdHB3qXgdTRpISB6HjcUxyhhMKMB3vWKmGisDUzRd52JRpk8EwfIlbyWgpGCeVSb7WeXuErlMiSgFOspw0jubu92aFEZpB9y5tBVqtvqtPBSmSGWWn4MUj8r1ylbV9N7j0nS+2Q4EJWNhR4QLPzjv++wgxYkvXqS83GSv5lqXWZ9maIpMbtKyMa58ubhv79fRyADpr3WrYxjdloev1unwugy1AdW9Ens+o54ndf2xMYz1LH91i8+pN8MX3nqgJCSKppGPRULdEqyRcvY0I9fjPjIHSIusjXuil+49k9QUIW0ZX+yeATZZgWkqktHBjwR4glwrRd+OCqGOikNwGrZOTiKAVUEgbqIIDnJA1u4FMgJeMXRymMEvUR/11R5hhCUPcZOkjr3wbNp4P0DRx3f5v7Dqg9/7ixc5d3ogHwDy1dr7lG8j+w6rVkP585LrAqq8D88cRBUBX6vsSdCG7ipyzAEq43tnmTU+dQcYEK7eJfNctfjpxJxA0mpNLaGKP1tQWEIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIGR2vgA5sbGT9p7mDgAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
};

export default TailwindIcon;
