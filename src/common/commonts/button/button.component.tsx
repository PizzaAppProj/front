import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

enum ButtonSize {
  sm = "sm",
  base = "base",
}

enum ButtonVariant {
  primary = "primary",
  danger = "danger",
}

interface ButtonProps {
  size?: keyof typeof ButtonSize;
  disbled?: boolean;
  variant?: keyof typeof ButtonVariant;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  size = ButtonSize.base,
  disbled,
  variant = ButtonVariant.primary,
}) => {
  const buttonClasses = clsx(
    "text-sm text-gray-900 px-4 border  outline-none  rounded-md  transition-all",
    {
      "py-2": size === ButtonSize.base,
      "py-0.5": size === ButtonSize.sm,
      "opacity-50 cursor-not-allowed": disbled,
      "bg-amber-400  border-amber-400 hover:bg-amber-500 hover:border-amber-500  disabled:hover:border-amber-400 disabled:hover:bg-amber-400":
        variant === ButtonVariant.primary,
      "bg-red-400  border-red-400 hover:bg-red-500 hover:border-red-500  disabled:hover:border-red-400 disabled:hover:bg-red-400":
        variant === ButtonVariant.danger,
    }
  );

  return (
    <button disabled={disbled} className={buttonClasses}>
      {children}
    </button>
  );
};
