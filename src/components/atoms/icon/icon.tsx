"use client";
import "./icon.scss";

export interface IconProps {
  wrapper?: string;
  className?: string;
  name: string;
  fill?: string;
  onClick?: any;
}

export const Icon = ({
  wrapper,
  className,
  name,
  fill = "white",
  onClick,
}: IconProps): React.ReactElement => {
  return (
    <div className={`icon-wrapper ${wrapper}`}>
      <svg
        className={`${className} icon icon-${name} ${
          onClick ? "icon--clickable" : ""
        }`}
        onClick={onClick}
      >
        <use
          xlinkHref={`/assets/icons/symbol-defs.svg#icon-${name}`}
          width="100%"
          height="100%"
          style={{ fill: fill }}
          className={className}
        />
      </svg>
    </div>
  );
};
