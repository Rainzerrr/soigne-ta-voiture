"use client";
import PackageCard from "./components/molecules/package-card/package-card";
import "./page.scss";

export default function Home() {
  return (
    <div className="body">
      <PackageCard
        className="custom-class"
        theme="basic"
        badgeLabel="Basic"
        badgeColor="gray"
        title="Essentiel"
        price={19}
        imageUrl="/assets/images/package-card-image.png"
        features={["Support 24/7", "Accès limité", "1 utilisateur"]}
        buttonLabel="Choisir"
        showButton={true}
        onButtonClick={() => console.log("Basic selected")}
      />

      <PackageCard
        className="custom-class"
        theme="standard"
        badgeLabel="Standard"
        badgeColor="gold"
        title="Avancé"
        price={49}
        imageUrl="/assets/images/package-card-image.png"
        features={["Support prioritaire", "Accès complet", "5 utilisateurs"]}
        buttonLabel="Choisir"
        showButton={true}
        onButtonClick={() => console.log("Standard selected")}
      />

      <PackageCard
        className="custom-class"
        theme="premium"
        badgeLabel="Premium"
        badgeColor="black"
        title="Chirurgie esthétique"
        price={99}
        imageUrl="/assets/images/package-card-image.png"
        features={["Support VIP", "Accès illimité", "Utilisateurs illimités"]}
        buttonLabel="Choisir"
        showButton={true}
        onButtonClick={() => console.log("Premium selected")}
      />
    </div>
  );
}
