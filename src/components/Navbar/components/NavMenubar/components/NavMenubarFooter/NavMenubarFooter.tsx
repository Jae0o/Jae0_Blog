import { ContactMeButton } from "@/components";
import { CONTACT_ME_DATA } from "@/constants";

import * as S from "./NavMenubarFooter.style";

const NavMenubarFooter = () => {
  return (
    <S.NavbarFooter>
      {CONTACT_ME_DATA.map(({ url, IconComponent }) => (
        <ContactMeButton
          key={url}
          url={url}
          IconComponent={IconComponent}
        />
      ))}
    </S.NavbarFooter>
  );
};

export default NavMenubarFooter;
