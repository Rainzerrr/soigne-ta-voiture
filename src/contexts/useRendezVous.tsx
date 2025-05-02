"use client";

import { createContext, useContext, ReactNode } from "react";

interface RendezVousContextType {
  currentMilestone: number;
  setCurrentMilestone: (milestoneIndex: number) => void;
}

const RendezVousContext = createContext<RendezVousContextType | undefined>(
  undefined
);

interface RendezVousProviderProps extends RendezVousContextType {
  children: ReactNode;
}

export const RendezVousProvider = ({
  children,
  currentMilestone,
  setCurrentMilestone,
}: RendezVousProviderProps) => {
  return (
    <RendezVousContext.Provider
      value={{ currentMilestone, setCurrentMilestone }}
    >
      {children}
    </RendezVousContext.Provider>
  );
};

export const useRendezVous = () => {
  const context = useContext(RendezVousContext);
  if (!context) {
    throw new Error("useRendezVous must be used within a RendezVousProvider");
  }
  return context;
};
