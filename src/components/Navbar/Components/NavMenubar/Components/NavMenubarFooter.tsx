import ContactMeButton from "@/Components/ContactMeButton/ContactMeButton";
import { CONTACT_ME_DATA } from "@/constants/variables";

const NavMenubarFooter = () => {
  return (
    <li className="nav__footer">
      {CONTACT_ME_DATA.map(({ url, Icon }) => (
        <ContactMeButton
          key={url}
          url={url}
          icon={<Icon />}
        />
      ))}
    </li>
  );
};

export default NavMenubarFooter;
