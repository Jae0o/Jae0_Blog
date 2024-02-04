import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import ContactMeButton from "@/Components/ContactMeButton/ContactMeButton";
import { CONTACT_ME } from "@/constants/URL";

const NavMenubarFooter = () => {
  return (
    <li className="nav__footer">
      <ContactMeButton
        url={CONTACT_ME.GIT_HUB}
        Icon={<FiGithub />}
      />
      <ContactMeButton
        url={CONTACT_ME.INSTAGRAM}
        Icon={<FaInstagram />}
      />
      <ContactMeButton
        url={CONTACT_ME.EMAIL}
        Icon={<MdOutlineEmail />}
      />
    </li>
  );
};

export default NavMenubarFooter;
