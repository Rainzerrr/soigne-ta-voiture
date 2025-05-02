import React, { CSSProperties, FC } from "react";
import "./prestation.scss";

interface PrestationProps {
  position: string;
  title: string;
  description: string;
  imageUrl: string;
}
const Prestation: FC<PrestationProps> = ({
  position,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div
      className="prestation"
      style={
        {
          "--bg-url": `url('${imageUrl}')`,
        } as CSSProperties
      }
    >
      <span className="prestation__position">{position}</span>
      <div className="prestation__title-desc">
        <span className="prestation__title">{title}</span>
        <p className="prestation__desc">{description}</p>
      </div>
    </div>
  );
};

export default Prestation;
export type { PrestationProps };
