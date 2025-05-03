"use client";
import PackageCard from "@/components/molecules/package-card/package-card";
import TitleSection from "@/components/molecules/title-section/title-section";
import React from "react";
import "./packages.scss";
import { useRouter } from "next/navigation";

const Packages = () => {
  const router = useRouter();
  return (
    <div className="packages-section">
      <div className="packages-section__title-section">
        <TitleSection
          title="NOS PACKAGES"
          subtitle="PACKAGES"
          alignement="left"
          size="large"
        />
        <p className="packages-section__title-section__desc">
          Retrouvez les différentes packages proposés par notre équipe, pour
          tous les types de voitures. Chacune d’entre elle est basée sur le
          budget prêt à mettre et le temps accordé au package.
        </p>
      </div>

      <div className="packages-section__packages">
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
          showButton
          onButtonClick={() =>
            router.push("/rendez-vous/date?package=basic#milestones")
          }
        />
        <PackageCard
          theme="standard"
          badgeLabel="Standard"
          badgeColor="gold"
          title="Kit de soin"
          price={50}
          imageUrl={"/assets/images/package-card-image.png"}
          features={[
            "Aspiration en profondeur de tout l’habitacle : sièges, tapis,",
            "Nettoyage des plastiques et surfaces (tableau de bord, portes, etc.)",
          ]}
          buttonLabel={"PRENDRE RENDEZ-VOUS"}
          showButton
          onButtonClick={() =>
            router.push("/rendez-vous/date?package=standard#milestones")
          }
        />
        <PackageCard
          theme="premium"
          badgeLabel="Premium"
          badgeColor="black"
          title="Chirurgie esthétique"
          price={60}
          imageUrl={"/assets/images/package-card-image.png"}
          features={[
            "Aspiration en profondeur de tout l’habitacle : sièges, tapis,",
            "Nettoyage des plastiques et surfaces (tableau de bord, portes, etc.)",
            "Nettoyage en profondeur des sièges avec shampooing.",
          ]}
          buttonLabel={"PRENDRE RENDEZ-VOUS"}
          showButton
          onButtonClick={() =>
            router.push("/rendez-vous/date?package=premium#milestones")
          }
        />
      </div>
    </div>
  );
};

export default Packages;
