"use client";
import Hour, { EventHourProps } from "@/components/atoms/hour/hour";
import { Icon } from "@/components/atoms/icon/icon";
import { FC, useState } from "react";
import { useRendezVous } from "@/contexts/useRendezVous";
import "./rendez-vous-hours.scss";

interface RendezVousHoursProps {
  events: EventHourProps[];
}

const RendezVousHours: FC<RendezVousHoursProps> = ({ events }) => {
  const { setDate, setEventId } = useRendezVous();
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="hours-dropdown">
      <div
        onClick={() => setIsOpened(!isOpened)}
        className="hours-dropdown__date-chevron"
      >
        <span className="hours-dropdown__date">
          {events[0].startHour.toLocaleDateString("fr-FR", {
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
        {events.map((event: EventHourProps) => (
          <Hour
            key={event.startHour.toString()}
            {...event}
            onClick={() => {
              setDate(event.startHour);
              setEventId(event.id);
              event.onClick();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RendezVousHours;
export type { RendezVousHoursProps };
