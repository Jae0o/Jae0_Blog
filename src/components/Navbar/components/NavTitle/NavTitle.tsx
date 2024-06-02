import { useNavigate } from "react-router-dom";

import * as S from "./NavTitle.style";

const NavTitle = () => {
  const navigate = useNavigate();

  return (
    <S.NavbarTitleLayout
      onClick={() => navigate("/")}
      whileHover={{
        scale: 1.1,
        opacity: 0.6,
      }}
      whileTap={{
        scale: 0.9,
      }}
    >
      Jae0's
    </S.NavbarTitleLayout>
  );
};

export default NavTitle;
