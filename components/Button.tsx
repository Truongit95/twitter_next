import { FC } from "react";

interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  outline?: boolean;
}

const Button: FC<ButtonProps> = ({
  label,
  disabled,
  fullWidth,
  large,
  onClick,
  outline,
  secondary
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
      disabled:opacity-70 
      disabled:cursor-not-allowed 
      rounded-full 
      font-semibold 
      hover:opacity-80 
      border-2 
      transition 
      ${fullWidth ? "w-full" : "w-fit"} 
      ${secondary ? "bg-white" : "bg-sky-500"}
      ${secondary ? "text-black" : "text-white"}
      ${secondary ? "border-black" : "border-sky-500"}
      ${large ? "text-xl" : "text-md"}
      ${large ? "px-5" : "py-4"}
      ${large ? "py-3" : "py-2"}
      ${outline ? "bg-transparent" : ""}
      ${outline ? "border-white" : ""}
      ${outline ? "text-white" : ""}
      `}
    >
      {label}
    </button>
  );
};
export default Button;
