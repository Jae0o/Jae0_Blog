import { useNavigate } from "react-router-dom";

import ERROR_ANIMATION from "@/assets/animation/404_animation.json";
import { Button } from "@/components";
import { Player } from "@lottiefiles/react-lottie-player";

import * as S from "./Error.style";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <S.ErrorPageBackground>
      <S.ErrorPageLayout>
        <S.ErrorPageContainer
          initial={{ scale: 0, opacity: 0, rotate: "-45deg" }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1.2 }}
        >
          <S.ErrorPageTitle>페이지에 문제가 있어요!</S.ErrorPageTitle>
          <S.ErrorPageMessage>이게바로.. 404 ..?</S.ErrorPageMessage>

          <Player
            src={ERROR_ANIMATION}
            style={{
              width: "100%",
            }}
            autoplay
            loop
          />

          <S.ErrorPageActions>
            <Button
              backgroundColor="red"
              style={{ width: "12rem" }}
              onClick={() => navigate(-1)}
            >
              이전 페이지
            </Button>

            <Button
              style={{ width: "12rem" }}
              onClick={() => navigate("/")}
            >
              홈 으로
            </Button>
          </S.ErrorPageActions>
        </S.ErrorPageContainer>
      </S.ErrorPageLayout>
    </S.ErrorPageBackground>
  );
};

export default ErrorPage;
