import React, { FC } from "react";
import "./badge.scss";

interface BadgeProps {
  className?: string;
  label: string;
  color: string;
}

const Badge: FC<BadgeProps> = ({ className, label, color }) => {
  return <span className={`${className} badge badge--${color}`}>{label}</span>;
};

export default Badge;
