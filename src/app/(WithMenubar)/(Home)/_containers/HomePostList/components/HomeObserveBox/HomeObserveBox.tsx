import React, { forwardRef } from "react";

const HomeObserveBox = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <li className="w-[32rem] h-[12rem]">
      <div
        className="w-full h-full"
        ref={ref}
      />
    </li>
  );
});

export default HomeObserveBox;
