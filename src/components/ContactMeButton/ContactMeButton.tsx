import "./ContactMeButton.Styles.css";
import React from "react";

interface ContactMeButtonProps {
  url: string;
  icon: React.ReactNode;
}

const ContactMeButton = ({
  url,
  icon,
}: ContactMeButtonProps): React.ReactNode => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      className="aside__footer-link">
      {icon}
    </a>
  );
};

export default ContactMeButton;
