"use client";
import { FC, useEffect } from "react";
import TitleSection from "@/components/molecules/title-section/title-section";
import Button from "@/components/molecules/button/button";
import PackageCard from "@/components/molecules/package-card/package-card";
import RendezVousHours, {
  RendezVousHoursProps,
} from "@/components/molecules/rendez-vous-hours/rendez-vous-hours";
import { useRendezVous } from "@/contexts/useRendezVous";
import "./date.scss";
import { useRouter } from "next/navigation";
import { EventHourProps } from "@/components/atoms/hour/hour";
import { packages } from "@/data/packages";
import { useSearchParams } from "next/navigation";

interface RendezVousDateTemplateProps {
  events: EventHourProps[];
}

const RendezVousDate: FC<RendezVousDateTemplateProps> = ({ events = [] }) => {
  const router = useRouter();
  const { pack, setPack } = useRendezVous();
  const groupEventsByDay = (
    events: EventHourProps[]
  ): RendezVousHoursProps[] => {
    const groupedEvents: RendezVousHoursProps[] = [];

    events.forEach((event) => {
      const eventDate = new Date(event.startHour);

      const existingGroup = groupedEvents.find((group) => {
        const groupDate = new Date(group.events[0].startHour);
        return groupDate.toDateString() === eventDate.toDateString();
      });

      event.startHour = new Date(event.startHour);
      event.endHour = new Date(event.endHour);

      if (!existingGroup) {
        groupedEvents.push({
          events: [
            {
              ...event,
              onClick: () => {
                router.push("/rendez-vous/infos#milestones");
              },
            },
          ],
        });
      } else {
        existingGroup.events.push({
          ...event,
          onClick: () => {
            router.push("/rendez-vous/infos#milestones");
          },
        });
      }
    });

    return groupedEvents;
  };

  const { setCurrentMilestone } = useRendezVous();
  const searchParams = useSearchParams();

  useEffect(() => {
    const packParam = searchParams?.get("package");
    if (packParam) {
      setPack(packParam);
    }
    setCurrentMilestone(2);
  }, []);

  return (
    <div className="rendez-vous__date">
      <div className="rendez-vous__date__title-section">
        <Button
          theme="quartery"
          label="étape précédente"
          leftIcon="chevron-left"
          onClick={() => router.push("/rendez-vous/packages#milestones")}
        />
        <TitleSection
          title="CHOIX DE LA DATE"
          subtitle="ETAPE 2"
          alignement="center"
          size="default"
        />
        <Button
          className="rendez-vous__date__title-section__button-hide"
          theme="quartery"
          label="étape précédente"
          leftIcon="chevron-left"
        />
      </div>
      <div className="rendez-vous__date__content">
        <div className="rendez-vous__date__content__package">
          <span className="rendez-vous__date__content__package-label">
            PACKAGE SÉLECTIONNÉ :
          </span>
          {pack && <PackageCard {...packages[pack]} />}
        </div>
        <div className="rendez-vous__date__content__dates">
          {events.length == 0 && (
            <span className="rendez-vous__date__content__package-label">
              Aucune date disponible
            </span>
          )}
          {groupEventsByDay(events).map((dayEvents: RendezVousHoursProps) => (
            <RendezVousHours
              key={dayEvents.events[0].startHour.toString()}
              {...dayEvents}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RendezVousDate;
