import { LoadingSpinner } from "@/components";

import * as S from "./Loading.style";

const LoadingPage = () => {
  return (
    <S.LoadingBackground>
      <LoadingSpinner size="40rem" />
    </S.LoadingBackground>
  );
};

export default LoadingPage;
