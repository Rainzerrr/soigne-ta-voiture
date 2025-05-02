import React, { FC } from "react";
import "./milestone.scss";
import { Icon } from "@/components/atoms/icon/icon";

interface MilestoneProps {
  label: string;
  index: number;
  status: "next" | "current" | "passed";
  url?: string;
  showSeparator?: boolean;
}

const Milestone: FC<MilestoneProps> = ({
  label,
  index,
  status,
  url,
  showSeparator,
}) => {
  return (
    <div className={`milestone milestone--${status}`}>
      <div className="milestone__index">
        {status === "passed" ? (
          <Icon name="check" fill="white" stroke="white" />
        ) : (
          index
        )}
      </div>
      <span className="milestone__label">{label}</span>

      <div
        className={`milestone__separator milestone__separator--${
          status == "passed" ? "passed" : ""
        } milestone__separator--${!showSeparator ? "hide" : ""}`}
      />
    </div>
  );
};

export default Milestone;
export type { MilestoneProps };
