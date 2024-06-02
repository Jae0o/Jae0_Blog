import React from "react";

import * as S from "./ContactMeButton.style";

interface ContactMeButtonProps {
  url: string;
  IconComponent: React.ReactNode;
}

const ContactMeButton = ({
  url,
  IconComponent,
}: ContactMeButtonProps): React.ReactNode => {
  return (
    <S.ContactMeButton
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`link move ${url}`}
      whileHover={{
        filter: "brightness(80%)",
      }}
      whileTap={{
        scale: 0.9,
      }}
    >
      {IconComponent}
    </S.ContactMeButton>
  );
};

export default ContactMeButton;
