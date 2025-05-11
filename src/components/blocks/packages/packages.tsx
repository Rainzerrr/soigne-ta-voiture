"use client";
import PackageCard, {
  PackageCardProps,
} from "@/components/molecules/package-card/package-card";
import TitleSection from "@/components/molecules/title-section/title-section";
import React from "react";
import "./packages.scss";
import { useRouter } from "next/navigation";
import { packages } from "@/data/packages";

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
        {Object.values(packages).map((pkg: PackageCardProps) => (
          <PackageCard key={pkg.title} {...pkg} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
