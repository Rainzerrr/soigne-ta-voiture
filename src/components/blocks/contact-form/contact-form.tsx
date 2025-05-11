"use client";
import TitleSection from "@/components/molecules/title-section/title-section";
import Form from "@/components/organisms/form/form";
import "./contact-form.scss";
import {
  FormData,
  FormDataErrors,
  useRendezVous,
} from "@/contexts/useRendezVous";
import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
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

  const handleChangeFormData = (key: keyof FormData, value: string) => {
    setFormDataErrors((prev) => ({
      ...prev,
      [key]: false,
    }));

    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleChangeFormDataErrors = (
    key: keyof FormDataErrors,
    value: boolean
  ) => {
    setFormDataErrors((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const validateFormData = (formData: FormData) => {
    const errors: Partial<FormDataErrors> = {};

    if (!formData.firstname.trim()) {
      errors.firstname = true;
    }

    if (!formData.lastname.trim()) {
      errors.lastname = true;
    }

    if (!/^0[1-9]\d{8}$/.test(formData.tel.trim())) {
      errors.tel = true;
    }

    if (!/^[\w.-]+@([\w-]+\.)+[a-zA-Z]{2,}$/.test(formData.email.trim())) {
      errors.email = true;
    }

    if (!formData.comment.trim()) {
      errors.comment = true;
    }

    // Met à jour les erreurs
    Object.entries(errors).forEach(([key, hasError]) => {
      handleChangeFormDataErrors(key as keyof FormDataErrors, hasError);
    });

    return Object.keys(errors).length === 0;
  };

  const onSubmit = () => {
    if (validateFormData(formData)) {
      toast("Message envoyé !", {
        duration: 5000,
        icon: "✅",
        className: "toast",
        position: "top-right",
      });
    }
    setFormData({
      firstname: "",
      lastname: "",
      tel: "",
      email: "",
      comment: "",
    });
  };
  return (
    <div className="contact-form">
      <TitleSection
        title="CONTACTEZ-NOUS"
        subtitle="FORMULAIRE"
        alignement="center"
        size="large"
      />
      <Form
        buttonLabel={"Envoyer"}
        formData={formData}
        setFormData={handleChangeFormData}
        formDataErrors={formDataErrors}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default ContactForm;
