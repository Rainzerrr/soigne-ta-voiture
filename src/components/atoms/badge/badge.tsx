import React, { FC } from "react";
import { Icon } from "../icon/icon";
import "./badge.scss";

interface BadgeProps {
  className?: string;
  label: string;
  color: string;
}

const Badge: FC<BadgeProps> = ({ className, label, color }) => {
  return (
    <div className={`${className} badge badge--${color} `}>
      {color == "black" && (
        <>
          <Icon className="badge__spark1" name="spark" />
          <Icon className="badge__spark2" name="spark" />
        </>
      )}
      <span className="badge__label">{label}</span>
    </div>
  );
};

export default Badge;
