import { ContactMeButton } from "@/components";
import { CONTACT_ME_DATA } from "@/constants";

import * as S from "./AsideFooter.style";

const AsideFooter = () => {
  return (
    <S.AsideFooter>
      {CONTACT_ME_DATA.map(({ url, IconComponent }) => (
        <ContactMeButton
          key={url}
          url={url}
          IconComponent={IconComponent}
        />
      ))}
    </S.AsideFooter>
  );
};

export default AsideFooter;
