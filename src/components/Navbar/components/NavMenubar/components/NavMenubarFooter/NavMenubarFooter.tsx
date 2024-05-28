import { ContactMeButton } from "@/components";
import { CONTACT_ME_DATA } from "@/constants";

const NavMenubarFooter = () => {
  return (
    <li className="nav__footer">
      {CONTACT_ME_DATA.map(({ url, IconComponent }) => (
        <ContactMeButton
          key={url}
          url={url}
          IconComponent={IconComponent}
        />
      ))}
    </li>
  );
};

export default NavMenubarFooter;
