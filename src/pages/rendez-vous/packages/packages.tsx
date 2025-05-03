"use client";
import PackageCard, {
  PackageCardProps,
} from "@/components/molecules/package-card/package-card";
import TitleSection from "@/components/molecules/title-section/title-section";
import React, { useEffect } from "react";
import "./packages.scss";
import { useRouter } from "next/navigation";
import { useRendezVous } from "@/contexts/useRendezVous";
import { packages } from "@/data/packages";

const RendezVousPackages = () => {
  const router = useRouter();
  const { setCurrentMilestone, setPack } = useRendezVous();

  useEffect(() => {
    setCurrentMilestone(1);
  }, []);
  return (
    <div className="rendez-vous__packages">
      <TitleSection
        title="CHOIX DU PACKAGE"
        subtitle="ÉTAPE 1"
        alignement="center"
        size="default"
      />

      <div className="rendez-vous__packages__items">
        {Object.entries(packages).map(([key, pack]) => (
          <PackageCard
            key={key}
            {...pack}
            showButton
            onButtonClick={() => {
              setPack(key);
              router.push("/rendez-vous/date#milestones");
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RendezVousPackages;
