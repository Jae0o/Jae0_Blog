import "./NavbarFooter.css";
import ContactMeButton from "./components/ContactMeButton";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const NavbarFooter = () => {
  return (
    <footer className="navbar__footer">
      <ContactMeButton
        url="https://github.com/Jae0o"
        Icon={<FiGithub />}
      />
      <ContactMeButton
        url="https://www.instagram.com/jae_0o_/"
        Icon={<FaInstagram />}
      />
      <ContactMeButton
        url="mailto:leey153@naver.com"
        Icon={<MdOutlineEmail />}
      />
    </footer>
  );
};

export default NavbarFooter;
