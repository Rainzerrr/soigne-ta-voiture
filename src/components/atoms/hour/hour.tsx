import { FC } from "react";
import "./hour.scss";

interface HourProps {
  hour: Date;
  onClick: () => void;
}

const Hour: FC<HourProps> = ({ hour, onClick }) => {
  return (
    <div onClick={onClick} className="hour">
      {hour.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
    </div>
  );
};

export default Hour;
export type { HourProps };
