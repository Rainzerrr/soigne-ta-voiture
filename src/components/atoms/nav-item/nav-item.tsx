import Link from "next/link";
import React, { FC } from "react";
import "./nav-items.scss";

interface NavItemProps {
  label: string;
  url: string;
  isActive?: boolean;
  variant?: "default" | "outlined" | "filled";
  fullwidth?: boolean;
}

const NavItem: FC<NavItemProps> = ({
  label,
  url,
  isActive,
  variant = "default",
  fullwidth,
}) => {
  return (
    <Link
      className={`nav-item nav-item--${variant} ${
        isActive ? "nav-item--active" : ""
      } ${fullwidth ? "nav-item--fullwidth" : ""}`}
      href={url}
    >
      <span>{label}</span>
    </Link>
  );
};

export default NavItem;
export type { NavItemProps };
