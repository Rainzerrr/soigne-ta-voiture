"use client";
import React from "react";
import HomepageIntro from "@/components/blocks/homepage-intro/homepage-intro";
import SavoirFaire from "@/components/blocks/savoir-faire/savoir-faire";
import { beforeAfterSlides } from "@/pages/homepage/homepage";
import "./savoir-faire.scss";
import ContentWrapper from "@/utils/page-wrapper/content-wrapper";
import Prestations from "@/components/blocks/prestations/prestations";
import { PrestationProps } from "@/components/molecules/prestation/prestation";
import PageIntro from "@/components/blocks/page-intro/page-intro";

const SavoirFaireTemplate = () => {
  const prestations: PrestationProps[] = [
    {
      position: "01",
      title: "CHASSIS",
      description:
        "Nous prenons soins de nettoyer votre chassis de font en comble, afin de faire renaitre votre voiture. Nous utilisons des produits qui ne porte pas atteinte à la peinture ou à la matière de votre chassis.",
      imageUrl: "/assets/images/prestation-chassis.jpg",
    },
    {
      position: "02",
      title: "PNEUS",
      description:
        "Nous prenons soins de nettoyer votre chassis de font en comble, afin de faire renaitre votre voiture. Nous utilisons des produits qui ne porte pas atteinte à la peinture ou à la matière de votre chassis.",
      imageUrl: "/assets/images/prestation-pneus.jpg",
    },
    {
      position: "03",
      title: "INTERIEUR",
      description:
        "Nous prenons soins de nettoyer votre chassis de font en comble, afin de faire renaitre votre voiture. Nous utilisons des produits qui ne porte pas atteinte à la peinture ou à la matière de votre chassis.",
      imageUrl: "/assets/images/prestation-interieur.jpg",
    },
    {
      position: "04",
      title: "VITRES",
      description:
        "Nous prenons soins de nettoyer votre chassis de font en comble, afin de faire renaitre votre voiture. Nous utilisons des produits qui ne porte pas atteinte à la peinture ou à la matière de votre chassis.",
      imageUrl: "/assets/images/prestation-vitre.jpg",
    },
    {
      position: "05",
      title: "EXTERIEUR",
      description:
        "Nous prenons soins de nettoyer votre chassis de font en comble, afin de faire renaitre votre voiture. Nous utilisons des produits qui ne porte pas atteinte à la peinture ou à la matière de votre chassis.",
      imageUrl: "/assets/images/homepage-background.jpg",
    },
    {
      position: "06",
      title: "COFFRE",
      description:
        "Nous prenons soins de nettoyer votre chassis de font en comble, afin de faire renaitre votre voiture. Nous utilisons des produits qui ne porte pas atteinte à la peinture ou à la matière de votre chassis.",
      imageUrl: "/assets/images/prestation-chassis.jpg",
    },
  ];
  return (
    <div className="savoir-faire">
      <PageIntro
        title="NOTRE SAVOIR-FAIRE"
        subtitle="SAVOIR-FAIRE"
        imageUrl="/assets/images/savoir-faire-intro.jpg"
      />
      <ContentWrapper showBackgroundColor>
        <div className="savoir-faire__content">
          <SavoirFaire
            beforeAfterCards={beforeAfterSlides}
            variant="savoir-faire"
          />
          <Prestations prestations={prestations} />
        </div>
      </ContentWrapper>
    </div>
  );
};

export default SavoirFaireTemplate;
