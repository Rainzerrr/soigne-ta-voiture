"use client";
import Button from "@/components/molecules/button/button";
import TitleSection from "@/components/molecules/title-section/title-section";
import PackageCard from "@/components/molecules/package-card/package-card";
import "./recap.scss";
import { useRendezVous } from "@/contexts/useRendezVous";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const RendezVousRecap = () => {
  const { setCurrentMilestone } = useRendezVous();
  const router = useRouter();

  useEffect(() => {
    setCurrentMilestone(4);
  }, []);
  return (
    <div className="rendez-vous__recap">
      <div className="rendez-vous__recap__title-section">
        <Button
          theme="quartery"
          label="étape précédente"
          leftIcon="chevron-left"
          onClick={() => router.push("/rendez-vous/infos")}
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
        <div className="rendez-vous__recap__content__form-date">
          <div className="rendez-vous__recap__content__date">
            <span className="rendez-vous__recap__content__infos__title">
              Date & Heure :
            </span>
            <span className="rendez-vous__recap__content__infos__date__label">
              Lundi 24 Janvier 2025 - 00h00
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
                    Votre nom
                  </span>
                </div>
                <div className="rendez-vous__recap__content__infos__item">
                  <span className="rendez-vous__recap__content__infos__label">
                    Prénom :
                  </span>
                  <span className="rendez-vous__recap__content__infos__value">
                    Votre prénom
                  </span>
                </div>
              </div>

              <div className="rendez-vous__recap__content__infos__group">
                <div className="rendez-vous__recap__content__infos__item">
                  <span className="rendez-vous__recap__content__infos__label">
                    Email :
                  </span>
                  <span className="rendez-vous__recap__content__infos__value">
                    Votre email
                  </span>
                </div>
                <div className="rendez-vous__recap__content__infos__item">
                  <span className="rendez-vous__recap__content__infos__label">
                    Téléphone :
                  </span>
                  <span className="rendez-vous__recap__content__infos__value">
                    Votre téléphone
                  </span>
                </div>
              </div>

              <div className="rendez-vous__recap__content__infos__comment">
                <span className="rendez-vous__recap__content__infos__label">
                  Commentaire :
                </span>
                <p className="rendez-vous__recap__content__infos__value">/</p>
              </div>
            </div>
          </div>
          <Button
            className="rendez-vous__recap__content__button"
            theme="primary"
            label="FINALISER MON RENDEZ-VOUS"
            fullWidth
            onClick={() =>
              toast(
                "Votre rendez vous a été programmé, un membre de l'équipe vous appelera prochainement !",
                {
                  duration: 5000,
                  icon: "✅",
                  className: "toast",
                  position: "top-right",
                }
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default RendezVousRecap;
