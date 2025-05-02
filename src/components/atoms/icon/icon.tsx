"use client";
import "./icon.scss";

export interface IconProps {
  wrapper?: string;
  className?: string;
  name: string;
  fill?: string;
  onClick?: any;
  stroke?: string;
}

export const Icon = ({
  wrapper,
  className,
  name,
  fill = "white",
  stroke,
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
          style={{ fill: fill, stroke: stroke }}
          className={className}
        />
      </svg>
    </div>
  );
};
