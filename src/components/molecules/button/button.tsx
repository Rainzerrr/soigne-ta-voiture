"use client";
import { FC } from "react";
import { Icon } from "../../atoms/icon/icon";
import "./button.scss";

interface ButtonProps {
  className?: string;
  label: string;
  leftIcon?: string;
  rightIcon?: string;
  theme?: string;
  fullWidth?: boolean;
  onClick?: Function;
}

const Button: FC<ButtonProps> = ({
  className,
  label,
  leftIcon,
  rightIcon,
  theme,
  fullWidth,
  onClick,
}) => {
  return (
    <div
      className={`${className} button button--${theme} ${
        fullWidth ? "button--fullwidth" : ""
      }`}
      onClick={() => (onClick ? onClick() : null)}
    >
      {leftIcon && <Icon name={leftIcon} />}
      <span className="button__label">{label}</span>
      {rightIcon && <Icon name={rightIcon} />}
    </div>
  );
};

export default Button;
export type { ButtonProps };
