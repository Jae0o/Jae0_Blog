import React from "react";
import "./ContactMeButton.Styles.css";

interface ContactMeButtonProps {
  url: string;
  Icon: React.ReactNode;
}

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
