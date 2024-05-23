import "./LoginFormInput.Styles.css";
import { LoginInputType } from "../../LoginFormModal";

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
    <div className="loginForm__input">
      <p className="loginForm__input-title">{title}</p>
      <input
        className="loginForm__input-element"
        value={value}
        onChange={({ target }) => onChange({ type, value: target.value })}
        type={type}
        autoComplete={"current-password"}
        placeholder={title}
      />
      <p className="loginForm__input-message">{message}</p>
    </div>
  );
};

export default LoginFormInput;
