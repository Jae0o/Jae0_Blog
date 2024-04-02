"use client";

interface ButtonProps {
  label: string;

  onClick?: () => void;
}

const Button = ({ onClick, label }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
