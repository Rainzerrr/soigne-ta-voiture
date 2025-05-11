import { FC } from "react";
import "./hour.scss";

interface EventHourProps {
  id: string;
  startHour: Date;
  endHour: Date;
  onClick: () => void;
}

const Hour: FC<EventHourProps> = ({ id, startHour, endHour, onClick }) => {
  return (
    <div onClick={onClick} className="hour">
      {startHour.toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </div>
  );
};

export default Hour;
export type { EventHourProps };
