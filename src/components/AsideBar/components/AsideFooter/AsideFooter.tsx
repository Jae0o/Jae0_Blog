import "./AsideFooter.style.css";

import { ContactMeButton } from "@/components";
import { CONTACT_ME_DATA } from "@/constants";

const AsideFooter = () => {
  return (
    <footer className="aside__footer">
      {CONTACT_ME_DATA.map(({ url, IconComponent }) => (
        <ContactMeButton
          key={url}
          url={url}
          IconComponent={IconComponent}
        />
      ))}
    </footer>
  );
};

export default AsideFooter;
