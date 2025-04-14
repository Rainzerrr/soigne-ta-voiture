import Image from "next/image";
import React, { FC } from "react";
import Badge from "../../atoms/badge/badge";
import "./before-after-card.scss";

interface BeforeAfterCardProps {
  variant?: "before" | "after";
  imageUrl: string;
  alt?: string;
}

const BeforeAfterCard: FC<BeforeAfterCardProps> = ({
  imageUrl,
  alt,
  variant = "before",
}) => {
  return (
    <div className="before-after-card">
      <div className="before-after-card__image-wrapper">
        <Image
          className="before-after-card__image"
          src={imageUrl}
          alt={alt ?? "Before after image"}
          fill
        />
      </div>

      <Badge
        className="before-after-card__badge"
        label={variant === "after" ? "Après" : "Avant"}
        color={variant === "after" ? "blue" : "gray"}
      />
    </div>
  );
};

export default BeforeAfterCard;
export type { BeforeAfterCardProps };
