"use client";

import { CONTACT_DATA } from "@/lib/constants";

import ContactMeButton from "../../../ContactMeButton/ContactMeButton";

const AsideFooter = () => {
  return (
    <footer className="w-[24rem] h-[8rem] min-h-[6rem] flex justify-center gap-[1.6rem]">
      {CONTACT_DATA.map(({ url, Icon }) => (
        <ContactMeButton
          key={url}
          url={url}
          Icon={Icon}
        />
      ))}
    </footer>
  );
};

export default AsideFooter;
