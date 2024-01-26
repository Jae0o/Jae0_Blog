import React from "react";
import { ContactMeButtonProps } from "./ContactMeButton.Types";
import "./ContactMeButton.Styles.css";

const ContactMeButton = ({
  url,
  Icon,
}: ContactMeButtonProps): React.ReactNode => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      className="navbar__footer-link">
      {Icon}
    </a>
  );
};

export default ContactMeButton;
