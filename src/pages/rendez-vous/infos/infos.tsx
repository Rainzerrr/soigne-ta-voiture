"use client";
import TitleSection from "@/components/molecules/title-section/title-section";
import "./infos.scss";
import Button from "@/components/molecules/button/button";
import Form from "@/components/organisms/form/form";
import { useRendezVous } from "@/contexts/useRendezVous";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const RendezVousInfos = () => {
  const router = useRouter();
  const {
    setCurrentMilestone,
    formData,
    setFormData,
    formDataErrors,
    validateFormData,
  } = useRendezVous();
  useEffect(() => {
    setCurrentMilestone(3);
  }, []);

  const onSubmit = () => {
    if (validateFormData(formData)) {
      router.push("/rendez-vous/recap#milestones");
    }
  };

  return (
    <div className="rendez-vous__infos">
      <div className="rendez-vous__infos__title-section">
        <Button
          theme="quartery"
          label="étape précédente"
          leftIcon="chevron-left"
          onClick={() => router.push("/rendez-vous/date#milestones")}
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
        <Form
          formData={formData}
          setFormData={setFormData}
          buttonLabel={"Continuer"}
          formDataErrors={formDataErrors}
          onSubmit={onSubmit}
          isCommentOptional
        />
      </div>
    </div>
  );
};

export default RendezVousInfos;
