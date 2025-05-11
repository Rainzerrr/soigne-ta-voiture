"use client";
import Button from "@/components/molecules/button/button";
import TitleSection from "@/components/molecules/title-section/title-section";
import PackageCard from "@/components/molecules/package-card/package-card";
import { useRendezVous } from "@/contexts/useRendezVous";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { packages } from "@/data/packages";
import { formatDate } from "@/utils/page-wrapper/formatters/format-time";
import axios from "axios";
import "./recap.scss";

const RendezVousRecap = () => {
  const { setCurrentMilestone, formData, pack, date, eventId } =
    useRendezVous();
  const router = useRouter();

  useEffect(() => {
    setCurrentMilestone(4);
  }, []);

  const createRendezVous = async () => {
    const endDate = new Date(date);
    endDate.setHours(endDate.getHours() + 2);
    const event = {
      summary:
        packages[pack].title +
        " - " +
        formData.firstname +
        " " +
        formData.lastname,
      location: "Paris",
      start: {
        dateTime: date.toISOString(),
        timeZone: "Europe/Paris",
      },
      end: {
        dateTime: endDate.toISOString(),
        timeZone: "Europe/Paris",
      },
      colorId: packages[pack].colorId,
      eventId: eventId,
      description: `Téléphone : ${formData.tel}\nEmail : ${formData.email}\nCommentaire : ${formData.comment}`,
    };
    try {
      const response = await axios.post("/api/create-event", event);
      router.push("/");
    } catch (error) {
      console.error("Erreur lors de la création de l'événement :", error);
    }
  };

  return (
    <div className="rendez-vous__recap">
      <div className="rendez-vous__recap__title-section">
        <Button
          theme="quartery"
          label="étape précédente"
          leftIcon="chevron-left"
          onClick={() => router.push("/rendez-vous/infos#milestones")}
        />
        <TitleSection
          title="RÉCAPITULATIF"
          subtitle="ÉTAPE 4"
          alignement="center"
          size="default"
        />
        <Button
          className="rendez-vous__recap__title-section__button-hide"
          theme="quartery"
          label="étape précédente"
          leftIcon="chevron-left"
        />
      </div>
      <div className="rendez-vous__recap__content">
        <div className="rendez-vous__recap__content__package">
          <span className="rendez-vous__recap__content__infos__title">
            Choix du package :
          </span>
          <PackageCard {...packages[pack != "" ? pack : "basic"]} />
        </div>
        <div className="rendez-vous__recap__content__form-date">
          <div className="rendez-vous__recap__content__date">
            <span className="rendez-vous__recap__content__infos__title">
              Date & Heure :
            </span>
            <span className="rendez-vous__recap__content__infos__date__label">
              {formatDate(date)}
            </span>
          </div>
          <div className="rendez-vous__recap__content__infos-section">
            <span className="rendez-vous__recap__content__infos__title">
              Informations :
            </span>
            <div className="rendez-vous__recap__content__infos">
              <div className="rendez-vous__recap__content__infos__group">
                <div className="rendez-vous__recap__content__infos__item">
                  <span className="rendez-vous__recap__content__infos__label">
                    Nom :
                  </span>
                  <span className="rendez-vous__recap__content__infos__value">
                    {formData["lastname"]}
                  </span>
                </div>
                <div className="rendez-vous__recap__content__infos__item">
                  <span className="rendez-vous__recap__content__infos__label">
                    Prénom :
                  </span>
                  <span className="rendez-vous__recap__content__infos__value">
                    {formData["firstname"]}
                  </span>
                </div>
              </div>

              <div className="rendez-vous__recap__content__infos__group">
                <div className="rendez-vous__recap__content__infos__item">
                  <span className="rendez-vous__recap__content__infos__label">
                    Email :
                  </span>
                  <span className="rendez-vous__recap__content__infos__value">
                    {formData["email"]}
                  </span>
                </div>
                <div className="rendez-vous__recap__content__infos__item">
                  <span className="rendez-vous__recap__content__infos__label">
                    Téléphone :
                  </span>
                  <span className="rendez-vous__recap__content__infos__value">
                    {formData["tel"]}
                  </span>
                </div>
              </div>

              <div className="rendez-vous__recap__content__infos__comment">
                <span className="rendez-vous__recap__content__infos__label">
                  Commentaire :
                </span>
                <p className="rendez-vous__recap__content__infos__value">
                  {formData["comment"] ?? "/"}
                </p>
              </div>
            </div>
          </div>
          <Button
            className="rendez-vous__recap__content__button"
            theme="primary"
            label="FINALISER MON RENDEZ-VOUS"
            fullWidth
            onClick={() => {
              createRendezVous();
              toast(
                "Votre rendez vous a été programmé, un membre de l'équipe vous appelera prochainement !",
                {
                  duration: 5000,
                  icon: "✅",
                  className: "toast",
                  position: "top-right",
                }
              );
              // router.push("/");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RendezVousRecap;
