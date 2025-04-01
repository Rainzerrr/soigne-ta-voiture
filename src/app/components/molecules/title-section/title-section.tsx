import "./title-section.scss";
import React, { FC } from "react";

interface TitleSectionProps {
  title: string;
  subtitle: string;
  alignement?: "left" | "center";
  size?: "default" | "large";
}

const TitleSection: FC<TitleSectionProps> = ({
  title,
  subtitle,
  alignement = "center",
  size = "default",
}) => {
  return (
    <div
      className={`title-section title-section--${alignement} 
        title-section--${size}`}
    >
      <span className="title-section__subtitle">{subtitle}</span>
      <span className="title-section__title">{title}</span>
    </div>
  );
};

export default TitleSection;
