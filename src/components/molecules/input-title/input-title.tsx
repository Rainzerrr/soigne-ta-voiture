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
  type?: string;
  placeholder?: string;
  required?: boolean;
  variant?: "input" | "textarea";
  onChange: (value: string) => void;
}

const InputTitle: FC<InputTitleProps> = ({
  title,
  icon,
  value,
  variant = "input",
  type = "text",
  placeholder,
  required,
  onChange,
}) => {
  return (
    <div className="input-title">
      <p className="input-title__title">
        <span>{title}</span> {!required && <span>(Optionnel)</span>}
      </p>
      <div
        className={`input-title__input-icon ${
          variant === "textarea" ? "input-textarea-icon" : ""
        }`}
      >
        <Icon className="input-title__icon" name={icon} fill="#E1E1E1" />
        {variant === "textarea" ? (
          <textarea
            rows={5}
            className="input-title__input"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            required={required}
          />
        ) : (
          <input
            className="input-title__input"
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            required={required}
          />
        )}
      </div>
    </div>
  );
};

export default InputTitle;
