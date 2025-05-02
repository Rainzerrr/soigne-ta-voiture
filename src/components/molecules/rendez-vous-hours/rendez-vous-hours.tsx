"use client";
import Hour, { HourProps } from "@/components/atoms/hour/hour";
import { Icon } from "@/components/atoms/icon/icon";
import { FC, useState } from "react";
import "./rendez-vous-hours.scss";

interface RendezVousHoursProps {
  hours: HourProps[];
}

const RendezVousHours: FC<RendezVousHoursProps> = ({ hours }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="hours-dropdown">
      <div
        onClick={() => setIsOpened(!isOpened)}
        className="hours-dropdown__date-chevron"
      >
        <span className="hours-dropdown__date">
          {hours[0].hour.toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
        <Icon fill="black" name={`chevron-${isOpened ? "up" : "down"}`} />
      </div>
      <div
        className={`hours-dropdown__hours ${
          isOpened ? "hours-dropdown__hours--opened" : ""
        }`}
      >
        {hours.map((hour: HourProps) => (
          <Hour key={hour.hour.toString()} {...hour} />
        ))}
      </div>
    </div>
  );
};

export default RendezVousHours;
export type { RendezVousHoursProps };
