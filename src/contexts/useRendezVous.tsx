"use client";

import {
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface RendezVousContextType {
  currentMilestone: number;
  setCurrentMilestone: (index: number) => void;
}

const RendezVousContext = createContext<RendezVousContextType>({
  currentMilestone: 1,
  setCurrentMilestone: () => null,
});

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
  }
  return context;
};
