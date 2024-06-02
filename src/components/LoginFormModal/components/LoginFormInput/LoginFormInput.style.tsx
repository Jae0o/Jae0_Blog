import styled from "styled-components";

export const LoginInputLayout = styled.div`
  width: 100%;
  padding: 0rem 2rem;

  user-select: none;

  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const LoginInputTitle = styled.label`
  width: 100%;
  height: 3rem;
  padding-left: 0.2rem;

  display: flex;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 4rem;
  padding-left: 1rem;

  background-color: ${({ theme }) => theme.colors.light_white};

  border-radius: 0.8rem;

  font-size: ${({ theme }) => theme.fontSize.medium};
  letter-spacing: 1px;

  &:focus {
    outline: double 0.4rem ${({ theme }) => theme.colors.gray};
  }
`;

export const LoginInputMessage = styled.p`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSize.semiSmall};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.red};
`;
