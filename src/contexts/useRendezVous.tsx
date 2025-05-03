"use client";

import { createContext, useContext, ReactNode, useState } from "react";

interface FormData {
  firstname: string;
  lastname: string;
  tel: string;
  email: string;
  comment: string;
}

interface FormDataErrors {
  firstname: boolean;
  lastname: boolean;
  tel: boolean;
  email: boolean;
  comment: boolean;
}

interface RendezVousContextType {
  currentMilestone: number;
  setCurrentMilestone: (index: number) => void;
  formData: FormData;
  formDataErrors: FormDataErrors;
  setFormData: (key: keyof FormData, value: string) => void;
  setFormDataErrors: (key: keyof FormData, value: boolean) => void;
  pack: string;
  setPack: (value: string) => void;
  date: Date;
  setDate: (date: Date) => void;
  validateFormData: (formData: FormData) => boolean;
}

const RendezVousContext = createContext<RendezVousContextType>({
  currentMilestone: 1,
  setCurrentMilestone: () => null,
  formData: {
    firstname: "",
    lastname: "",
    tel: "",
    email: "",
    comment: "",
  },
  formDataErrors: {
    firstname: false,
    lastname: false,
    tel: false,
    email: false,
    comment: false,
  },
  setFormData: () => null,
  setFormDataErrors: () => null,
  pack: "basic",
  setPack: () => null,
  date: new Date(),
  setDate: () => null,
  validateFormData: () => true,
});

interface RendezVousProviderProps {
  children: ReactNode;
  currentMilestone: number;
  setCurrentMilestone: (index: number) => void;
}

export const RendezVousProvider = ({
  children,
  currentMilestone,
  setCurrentMilestone,
}: RendezVousProviderProps) => {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    tel: "",
    email: "",
    comment: "",
  });

  const [formDataErrors, setFormDataErrors] = useState<FormDataErrors>({
    firstname: false,
    lastname: false,
    tel: false,
    email: false,
    comment: false,
  });

  const [selectedPack, setSelectedPack] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());

  const updateFormDataErrors = (key: keyof FormData, value: boolean) => {
    setFormDataErrors((prev) => ({ ...prev, [key]: value }));
  };

  const updateFormData = (key: keyof FormData, value: string) => {
    updateFormDataErrors(key, false);
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const validateFormData = (formData: FormData) => {
    const errors: Partial<Record<keyof FormData, boolean>> = {};

    if (!formData.firstname.trim()) {
      errors.firstname = true;
    }

    if (!formData.lastname.trim()) {
      errors.lastname = true;
    }

    if (!/^0[1-9]\d{8}$/.test(formData.tel.trim())) {
      errors.tel = true;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email.trim())) {
      errors.email = true;
    }

    // Met à jour les erreurs
    Object.entries(errors).forEach(([key, hasError]) => {
      updateFormDataErrors(key as keyof FormData, hasError ?? false);
    });

    // Retourne true si aucune erreur
    return Object.keys(errors).length === 0;
  };

  return (
    <RendezVousContext.Provider
      value={{
        currentMilestone,
        setCurrentMilestone,
        formData,
        setFormData: updateFormData,
        formDataErrors,
        setFormDataErrors: updateFormDataErrors,
        pack: selectedPack,
        setPack: setSelectedPack,
        validateFormData,
        date,
        setDate,
      }}
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

export type { FormData, FormDataErrors };
