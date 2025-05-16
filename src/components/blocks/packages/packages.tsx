"use client";
import PackageCard from "@/components/molecules/package-card/package-card";
import TitleSection from "@/components/molecules/title-section/title-section";
import React from "react";
import "./packages.scss";
import { useRouter } from "next/navigation";
import { packages } from "@/data/packages";
import { useRendezVous } from "@/contexts/useRendezVous";

const Packages = () => {
  const router = useRouter();
  const { setPack } = useRendezVous();

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
        {Object.entries(packages).map(([key, pack]) => (
          <PackageCard
            key={key}
            {...pack}
            onButtonClick={() => {
              if (pack.theme) {
                setPack(pack.theme);
                router.push("/rendez-vous/date#milestones");
              }
            }}
            showButton
          />
        ))}
      </div>
    </div>
  );
};

export default Packages;
