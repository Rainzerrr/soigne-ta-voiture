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

interface RendezVousDateTemplateProps {
  dates: RendezVousHoursProps[];
}
const RendezVousDate: FC<RendezVousDateTemplateProps> = ({ dates }) => {
  const { setCurrentMilestone } = useRendezVous();
  const router = useRouter();
  useEffect(() => {
    setCurrentMilestone(2);
  }, []);
  return (
    <div className="rendez-vous__date">
      <div className="rendez-vous__date__title-section">
        <Button
          theme="quartery"
          label="étape précédente"
          leftIcon="chevron-left"
          onClick={() => router.push("/rendez-vous/packages")}
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
          <PackageCard
            theme="basic"
            badgeLabel="Basic"
            badgeColor="gray"
            title="Bandage"
            price={30}
            imageUrl={"/assets/images/package-card-image.png"}
            features={[
              "Aspiration en profondeur de tout l’habitacle : sièges, tapis,",
            ]}
            buttonLabel={"PRENDRE RENDEZ-VOUS"}
          />
        </div>
        <div className="rendez-vous__date__content__dates">
          {dates.map((date: RendezVousHoursProps) => (
            <RendezVousHours key={date.hours[0].hour.toString()} {...date} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RendezVousDate;
