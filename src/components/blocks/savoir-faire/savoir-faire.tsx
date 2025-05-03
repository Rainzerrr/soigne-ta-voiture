"use client";
import Carousel from "@/components/molecules/carousel/carousel";
import TitleSection from "@/components/molecules/title-section/title-section";
import BeforeAfter, {
  BeforeAfterProps,
} from "@/components/organisms/before-after/before-after";
import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import "./savoir-faire.scss";
import Button from "@/components/molecules/button/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SavoirFaireProps {
  variant?: "homepage" | "savoir-faire";
  beforeAfterCards: BeforeAfterProps[];
}

const SavoirFaire: FC<SavoirFaireProps> = ({ variant, beforeAfterCards }) => {
  const router = useRouter();
  return (
    <div className={`notre-savoir-faire notre-savoir-faire--${variant}`}>
      <div className="notre-savoir-faire__title-section">
        <TitleSection
          title={
            variant === "homepage"
              ? "NOTRE SAVOIR-FAIRE"
              : "PLUS QU’UNE SIMPLE PRESTATION..."
          }
          subtitle="SAVOIR-FAIRE"
          alignement={variant === "homepage" ? "left" : "center"}
          size={variant === "homepage" ? "large" : "default"}
        />
        {variant === "homepage" && (
          <div className="notre-savoir-faire__title-section__buttons">
            <Button
              className="notre-savoir-faire__title-section__button"
              label="PRENDRE RENDEZ-VOUS"
              theme="primary"
              fullWidth
              onClick={() => {
                router.push("/rendez-vous/packages#milestones");
              }}
            />

            <Button
              className="notre-savoir-faire__title-section__button"
              label="VOIR LES PRESTATIONS"
              theme="tertiary"
              fullWidth
              onClick={() => {
                router.push("/savoir-faire");
              }}
            />
          </div>
        )}
      </div>
      <div className="notre-savoir-faire__content">
        <p className="notre-savoir-faire__content__text">
          Chez
          <span className="notre-savoir-faire__content__text--bold">
            Soigne ta voiture,
          </span>
          nous mettons tout notre savoir-faire et notre passion au service de
          votre véhicule. Grâce à un équipement
          <span className="notre-savoir-faire__content__text--bold">
            professionnel
          </span>
          dernier cri et une attention
          <span className="notre-savoir-faire__content__text--bold">
            méticuleuse aux détails,
          </span>
          nous redonnons à votre voiture tout son éclat d'origine. <br /> <br />
          Notre éthique de travail
          <span className="notre-savoir-faire__content__text--bold">
            irréprochable
          </span>
          et notre engagement envers la
          <span className="notre-savoir-faire__content__text--bold">
            qualité
          </span>
          nous permettent de vous offrir un service
          <span className="notre-savoir-faire__content__text--bold">
            haut de gamme
          </span>
          haut de gamme, alliant efficacité et perfection. Chaque intervention
          est réalisée avec
          <span className="notre-savoir-faire__content__text--bold">soin,</span>
          pour un résultat à la hauteur de vos
          <span className="notre-savoir-faire__content__text--bold">
            attentes.
          </span>
        </p>
        <Carousel
          className="notre-savoir-faire__content__carousel"
          slidesPerGroup={1}
          autoPlay
          infiniteLoop
          delay={5000}
          swiperId="savoir-faire"
        >
          {beforeAfterCards.map((slide: BeforeAfterProps) => (
            <SwiperSlide key={slide.beforeCard.imageUrl}>
              <BeforeAfter {...slide} />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SavoirFaire;
