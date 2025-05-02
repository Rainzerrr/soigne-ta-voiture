import "./title-section.scss";
import React, { FC } from "react";

interface TitleSectionProps {
  className?: string;
  title: string;
  subtitle: string;
  variant?: "dark" | "light";
  alignement?: "left" | "center";
  size?: "default" | "large";
}

const TitleSection: FC<TitleSectionProps> = ({
  className,
  title,
  subtitle,
  variant = "dark",
  alignement = "center",
  size = "default",
}) => {
  return (
    <div
      className={`${className} title-section title-section--${alignement} 
        title-section--${size} title-section--${variant}`}
    >
      <span className="title-section__subtitle">{subtitle}</span>
      <span className="title-section__title">{title}</span>
    </div>
  );
};

export default TitleSection;
