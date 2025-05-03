import { PackageCardProps } from "@/components/molecules/package-card/package-card";

export const packages: Record<string, PackageCardProps> = {
  basic: {
    theme: "basic",
    badgeLabel: "Basic",
    badgeColor: "gray",
    title: "Bandage",
    price: 30,
    imageUrl: "/assets/images/package-card-image.png",
    features: ["Aspiration en profondeur de tout l’habitacle : sièges, tapis,"],
    buttonLabel: "CONTINUER",
  },
  standard: {
    theme: "standard",
    badgeLabel: "Standard",
    badgeColor: "gold",
    title: "Kit de soin",
    price: 50,
    imageUrl: "/assets/images/package-card-image.png",
    features: [
      "Aspiration en profondeur de tout l’habitacle : sièges, tapis,",
      "Nettoyage des plastiques et surfaces (tableau de bord, portes, etc.)",
    ],
    buttonLabel: "CONTINUER",
  },
  premium: {
    theme: "premium",
    badgeLabel: "Premium",
    badgeColor: "black",
    title: "Chirurgie esthétique",
    price: 60,
    imageUrl: "/assets/images/package-card-image.png",
    features: [
      "Aspiration en profondeur de tout l’habitacle : sièges, tapis,",
      "Nettoyage des plastiques et surfaces (tableau de bord, portes, etc.)",
      "Nettoyage en profondeur des sièges avec shampooing.",
    ],
    buttonLabel: "CONTINUER",
  },
};
