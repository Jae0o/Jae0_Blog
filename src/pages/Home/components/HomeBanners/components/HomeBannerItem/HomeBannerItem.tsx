import { useInView } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./HomeBannerItem.styles";

interface HomeBannerItemProps {
  thumbnail: string;
  title: string;
  description: string;
  stacks: string[];
  isRight: boolean;
  path: string;
}

const HomeBannerItem = ({
  thumbnail,
  title,
  description,
  stacks,
  isRight,
  path,
}: HomeBannerItemProps) => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setImageUrl(thumbnail);
    }
  }, [isInView, thumbnail]);

  return (
    <S.HomeBannerLayout
      onClick={() => navigate(path)}
      $isRight={isRight}
      whileHover={{
        scale: 1.06,
      }}
    >
      <S.HomeBannerItemImage
        ref={ref}
        src={imageUrl}
        alt={`Project_Preview ${title}`}
        sizes="40rem 32rem"
      />

      <S.HomeBannerInfo>
        <S.HomeBannerTitle>{title}</S.HomeBannerTitle>
        <S.HomeBannerDescription>{description}</S.HomeBannerDescription>

        <S.HomeBannerStackList>
          {stacks.map(stack => (
            <S.HomeBannerStackItem
              $stack={stack}
              key={stack}
            >
              {stack}
            </S.HomeBannerStackItem>
          ))}
        </S.HomeBannerStackList>
      </S.HomeBannerInfo>
    </S.HomeBannerLayout>
  );
};

export default HomeBannerItem;
