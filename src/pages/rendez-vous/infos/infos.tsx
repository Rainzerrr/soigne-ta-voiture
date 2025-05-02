"use client";
import TitleSection from "@/components/molecules/title-section/title-section";
import "./infos.scss";
import Button from "@/components/molecules/button/button";
import Form from "@/components/organisms/form/form";
import { useRendezVous } from "@/contexts/useRendezVous";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const RendezVousInfos = () => {
  const { setCurrentMilestone } = useRendezVous();
  const router = useRouter();
  useEffect(() => {
    setCurrentMilestone(3);
  }, []);
  return (
    <div className="rendez-vous__infos">
      <div className="rendez-vous__infos__title-section">
        <Button
          theme="quartery"
          label="étape précédente"
          leftIcon="chevron-left"
          onClick={() => router.push("/rendez-vous/date")}
        />
        <TitleSection
          title="VOS INFORMATIONS"
          subtitle="ÉTAPE 3"
          alignement="center"
          size="default"
        />
        <Button
          className="rendez-vous__infos__title-section__button-hide"
          theme="quartery"
          label="étape précédente"
          leftIcon="chevron-left"
        />
      </div>
      <div className="rendez-vous__infos__content">
        <Form />
      </div>
    </div>
  );
};

export default RendezVousInfos;
