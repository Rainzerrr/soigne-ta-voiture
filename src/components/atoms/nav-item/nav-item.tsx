import Link from "next/link";
import React, { FC } from "react";
import "./nav-items.scss";

interface NavItemProps {
  label: string;
  url: string;
  isActive?: boolean;
  color?: "light" | "dark";
  variant?: "default" | "secondary" | "tertiary" | "filled";
  fullwidth?: boolean;
  onClick: () => void;
}

const NavItem: FC<NavItemProps> = ({
  label,
  url,
  isActive,
  variant = "default",
  color = "light",
  fullwidth,
  onClick,
}) => {
  return (
    <Link
      className={`nav-item nav-item--${variant} nav-item--${color} ${
        isActive ? "nav-item--active" : ""
      } ${fullwidth ? "nav-item--fullwidth" : ""}`}
      href={url}
      onClick={() => onClick()}
    >
      <span className="nav-item__label">{label}</span>
    </Link>
  );
};

export default NavItem;
export type { NavItemProps };
