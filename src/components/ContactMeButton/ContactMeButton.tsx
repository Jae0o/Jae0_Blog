import "./ContactMeButton.style.css";

import React from "react";

interface ContactMeButtonProps {
  url: string;
  IconComponent: React.ReactNode;
}

const ContactMeButton = ({
  url,
  IconComponent,
}: ContactMeButtonProps): React.ReactNode => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      className="aside__footer-link"
      aria-label={`link move ${url}`}
    >
      {IconComponent}
    </a>
  );
};

export default ContactMeButton;
