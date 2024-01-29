import "./LoginFormInput.Styles.css";
import { validation } from "../Function/validation";

interface LoginFormInputProps {
  title: string;
  type: "email" | "password";
  value: string;
  onChange: (param: { type: "email" | "password"; value: string }) => void;
}

export const LoginFormInput = ({
  title,
  type,
  value,
  onChange,
}: LoginFormInputProps) => {
  let message = "";

  if (type === "email") {
    message = validation.email(value);
  }

  if (type === "password") {
    message = validation.password(value);
  }

  return (
    <div className="loginForm__input">
      <p className="loginForm__input-title">{title}</p>
      <input
        className="loginForm__input-element"
        value={value}
        onChange={({ target }) => onChange({ type, value: target.value })}
        type={type}
      />
      <p className="loginForm__input-message">{message}</p>
    </div>
  );
};
