import React, { FC, ReactNode } from "react";
import "./content-wrapper.scss";

interface ContentWrapperProps {
  className?: string;
  children: ReactNode;
  showBackgroundColor?: boolean;
}

const ContentWrapper: FC<ContentWrapperProps> = ({
  className,
  children,
  showBackgroundColor,
}) => {
  return (
    <div
      className={`container-wrapper ${className} ${
        showBackgroundColor ? "container-wrapper--background" : ""
      }`}
    >
      <div className="container"> {children}</div>
    </div>
  );
};

export default ContentWrapper;
