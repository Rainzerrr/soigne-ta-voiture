import React, { FC } from "react";
import BeforeAfterCard, {
  BeforeAfterCardProps,
} from "../../molecules/before-after-card/before-after-card";
import "./before-after.scss";

interface BeforeAfterProps {
  beforeCard: BeforeAfterCardProps;
  afterCard: BeforeAfterCardProps;
}

const BeforeAfter: FC<BeforeAfterProps> = ({ beforeCard, afterCard }) => {
  return (
    <div className="before-after-section">
      <BeforeAfterCard {...beforeCard} />
      <BeforeAfterCard {...afterCard} />
    </div>
  );
};

export default BeforeAfter;
