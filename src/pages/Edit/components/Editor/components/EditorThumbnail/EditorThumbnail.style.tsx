import styled from "styled-components";

export const EditorThumbnailImageInput = styled.input`
  display: none;
`;

export const EditorThumbnailLayout = styled.div`
  flex-grow: 1;
  flex-shrink: 0;

  margin-bottom: 1rem;

  display: flex;
  align-items: center;

  gap: 2rem;

  user-select: none;
`;

export const EditorThumbnailContent = styled.p`
  width: 40rem;
  height: 100%;
  padding: 0rem 1rem;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.8rem;
  box-shadow: ${({ theme }) => theme.shadow.small};

  font-size: ${({ theme }) => theme.fontSize.semiLarge};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
