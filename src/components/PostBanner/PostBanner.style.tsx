import styled from "styled-components";

export const PostBannerLayout = styled.section`
  width: 100%;

  user-select: none;

  overflow: hidden;
`;

export const PostBanner = styled.article<{
  $backgroundSrc: string;
  $height?: number;
  $objectFit: string;
}>`
  width: 100%;
  height: ${({ $height }) => ($height ? `${$height}rem` : "28rem")};

  display: flex;
  align-items: center;
  justify-content: center;

  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--color-white);
  background-image: ${({ $backgroundSrc }) => `url(${$backgroundSrc})`};
  object-fit: ${({ $objectFit }) => $objectFit};

  @media (${({ theme }) => theme.media.mobile}) {
    height: 20rem;
  }
`;

export const BannerTextContainer = styled.span`
  width: 80%;
  height: 65%;
  min-width: 40rem;
  padding: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 1.6rem;

  @media (${({ theme }) => theme.media.mobile}) {
    width: 100%;
    height: 100%;
    min-width: 0;
    padding: 2rem;

    border-radius: 0;
  }
`;

export const BannerMainTitle = styled.h2`
  flex-grow: 1;
  width: 100%;
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSize.semiBig};
  font-family: "Nova Square", sans-serif;
  color: ${({ theme }) => theme.colors.white};

  word-break: keep-all;

  @media (${({ theme }) => theme.media.mobile}) {
    width: 100%;

    font-size: ${({ theme }) => theme.fontSize.large};

    overflow: hidden;
  }
`;

export const BannerSubTitle = styled.h3`
  width: 100%;
  height: 30%;

  text-align: end;
  font-size: ${({ theme }) => theme.fontSize.semiLarge};
  font-family: "Nova Square", sans-serif;
  color: ${({ theme }) => theme.colors.white};
`;
