import "./LoginFormInput.Styles.css";

interface LoginFormInputProps {
  title: string;
  type: "email" | "password";
}

export const LoginFormInput = ({ title, type }: LoginFormInputProps) => {
  return (
    <div className="loginForm__input">
      <p className="loginForm__input-title">{title}</p>
      <input
        className="loginForm__input-element"
        type={type}
      />
      <p className="loginForm__input-message">
        이것은 경고 문제 테스트용이여라?
      </p>
    </div>
  );
};
