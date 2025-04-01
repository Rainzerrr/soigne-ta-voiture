"use client";
import React, { FC } from "react";
import Badge from "../../atoms/badge/badge";
import Button from "../button/button";
import Icon from "../../atoms/icon/icon";
import "./package-card.scss";

interface PackageCardProps {
  className?: string;
  theme?: "basic" | "standard" | "premium";
  badgeLabel: string;
  badgeColor: string;
  title: string;
  price: number;
  imageUrl: string;
  features: string[];
  buttonLabel: string;
  showButton?: boolean;
  onButtonClick?: Function;
}

const PackageCard: FC<PackageCardProps> = ({
  className,
  theme = "basic",
  badgeColor,
  badgeLabel,
  title,
  price,
  imageUrl,
  features,
  buttonLabel,
  showButton,
  onButtonClick,
}) => {
  return (
    <div className={`${className} package-card package-card--${theme}`}>
      <div className="package-card__badge-image">
        <Badge
          color={badgeColor}
          label={badgeLabel}
          className="package-card__badge"
        />
        <img className="package-card__image" src={imageUrl} />
        <div className="package-card__content">
          <div>
            <div>
              <span>{title}</span>
              <span>{price}€</span>
            </div>
            <div className="package-card__features">
              {features.map((feature: string) => (
                <div key={feature} className="package-card__feature">
                  <Icon name="check" />
                  <p className="package-card__feature__label">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          {showButton && <Button label={buttonLabel} onClick={onButtonClick} />}
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
