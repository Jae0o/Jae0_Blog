import { LoginInputType } from "../../LoginFormModal";
import { loginValidation } from "../../utils";
import * as S from "./LoginFormInput.style";

interface LoginFormInputProps {
  title: string;
  type: LoginInputType;
  value: string;
  onChange: (param: { type: LoginInputType; value: string }) => void;
}

const LoginFormInput = ({
  title,
  type,
  value,
  onChange,
}: LoginFormInputProps) => {
  let message = "";

  if (type === "email") {
    message = loginValidation.email(value);
  }

  if (type === "password") {
    message = loginValidation.password(value);
  }

  return (
    <S.LoginInputLayout>
      <S.LoginInputTitle htmlFor={type}>{title}</S.LoginInputTitle>
      <S.LoginInput
        value={value}
        id={type}
        onChange={({ target }) => onChange({ type, value: target.value })}
        type={type}
        autoComplete={"current-password"}
        placeholder={title}
      />
      <S.LoginInputMessage>{message}</S.LoginInputMessage>
    </S.LoginInputLayout>
  );
};

export default LoginFormInput;
