import React, {
  ChangeEvent,
  Dispatch,
  FC,
  InputHTMLAttributes,
  SetStateAction,
} from "react";
import { Icon } from "../../atoms/icon/icon";
import "./input-title.scss";

interface InputTitleProps {
  title: string;
  icon: string;
  value: string;
  placeholder?: string;
  isOptionnal?: boolean;
  onChange: (value: string) => void;
}

const InputTitle: FC<InputTitleProps> = ({
  title,
  icon,
  value,
  placeholder,
  isOptionnal,
  onChange,
}) => {
  return (
    <div className="input-title">
      <p className="input-title__title">
        <span>{title}</span> {isOptionnal && <span>(Optionel)</span>}
      </p>
      <div className="input-title__input-icon">
        <Icon className="input-title__icon" name={icon} fill="#E1E1E1" />
        <input
          className="input-title__input"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InputTitle;
