import PackageCard from "@/components/molecules/package-card/package-card";
import TitleSection from "@/components/molecules/title-section/title-section";
import React from "react";
import "./packages.scss";

const RendezVousPackages = () => {
  return (
    <div className="rendez-vous__packages">
      <TitleSection
        title="CHOIX DU PACKAGE"
        subtitle="ETAPE 1"
        alignement="center"
        size="default"
      />

      <div className="rendez-vous__packages__items">
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
        />
      </div>
    </div>
  );
};

export default RendezVousPackages;
