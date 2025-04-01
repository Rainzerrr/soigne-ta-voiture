"use client";
import React, { FC, useState } from "react";
import Icon from "../../atoms/icon/icon";
import "./question-drawer.scss";

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
    <div className={`question-drawer ${className}`}>
      <div className="question-drawer__question-chevron" onClick={toggleDrawer}>
        <p className="question-drawer__question">{question}</p>
        <Icon name={isOpened ? "close" : "open"} />
      </div>
      {isOpened && <p className="question-drawer__answer">{answer}</p>}
    </div>
  );
};

export default QuestionDrawer;
