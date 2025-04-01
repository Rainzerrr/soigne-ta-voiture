import "./icon.scss";

import React, { FC } from "react";

interface IconProps {
  className?: string;
  name: string;
}

const Icon: FC<IconProps> = ({ className, name }) => {
  return <div>Icon</div>;
};

export default Icon;
