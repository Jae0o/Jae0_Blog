import "./AsideFooter.Styles.css";
import ContactMeButton from "@/Components/ContactMeButton/ContactMeButton";
import { CONTACT_ME_DATA } from "@/constants/variables";

const AsideFooter = () => {
  return (
    <footer className="aside__footer">
      {CONTACT_ME_DATA.map(({ url, Icon }) => (
        <ContactMeButton
          key={url}
          url={url}
          icon={<Icon />}
        />
      ))}
    </footer>
  );
};

export default AsideFooter;
