"use client";
import React, { FC, useState } from "react";
import "./question-drawer.scss";
import { Icon } from "@/components/atoms/icon/icon";

interface QuestionDrawerProps {
  className?: string;
  question: string;
  answer: string;
}

const QuestionDrawer: FC<QuestionDrawerProps> = ({
  className,
  question,
  answer,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleDrawer = () => setIsOpened(!isOpened);

  return (
    <div className={`question-drawer ${className}`} onClick={toggleDrawer}>
      <div className="question-drawer__question-chevron">
        <p className="question-drawer__question">{question}</p>
        <Icon
          name={`chevron-${isOpened ? "up" : "down"}`}
          fill="black"
          stroke="black"
        />
      </div>
      {isOpened && <p className="question-drawer__answer">{answer}</p>}
    </div>
  );
};

export default QuestionDrawer;
export type { QuestionDrawerProps };
