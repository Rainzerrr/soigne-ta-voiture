import React, { FC, ReactNode } from "react";
import "./content-wrapper.scss";

interface ContentWrapperProps {
  className?: string;
  children: ReactNode;
}

const ContentWrapper: FC<ContentWrapperProps> = ({ className, children }) => {
  return <div className={`container-wrapper ${className}`}>{children}</div>;
};

export default ContentWrapper;
