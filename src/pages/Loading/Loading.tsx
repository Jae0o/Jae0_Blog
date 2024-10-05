import * as S from "./Loading.style";

import { LoadingSpinner } from "@/components";

const LoadingPage = () => {
  return (
    <S.LoadingBackground>
      <LoadingSpinner size="40rem" />
    </S.LoadingBackground>
  );
};

export default LoadingPage;
