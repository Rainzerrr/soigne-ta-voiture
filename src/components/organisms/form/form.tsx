"use client";
import Button from "@/components/molecules/button/button";
import InputTitle from "@/components/molecules/input-title/input-title";
import { FC, useRef } from "react";
import { FormData, FormDataErrors } from "@/contexts/useRendezVous";
import "./form.scss";

interface FormProps {
  buttonLabel: string;
  formData: FormData;
  formDataErrors: FormDataErrors;
  setFormData: (key: keyof FormData, value: string) => void;
  onSubmit: () => void;
  isCommentOptional?: boolean;
}

const Form: FC<FormProps> = ({
  buttonLabel,
  formData,
  formDataErrors,
  setFormData,
  onSubmit,
  isCommentOptional,
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form ref={formRef} className="form">
      <div className="form__identity">
        <InputTitle
          title="Nom"
          icon="user"
          placeholder="Votre nom"
          value={formData["lastname"]}
          isError={formDataErrors["lastname"]}
          required
          onChange={(val) => setFormData("lastname", val)}
        />
        <InputTitle
          title="Prénom"
          placeholder="Votre prénom"
          icon="user"
          value={formData["firstname"]}
          isError={formDataErrors["firstname"]}
          required
          onChange={(val) => setFormData("firstname", val)}
        />
      </div>
      <div className="form__contact">
        <InputTitle
          title="Email"
          placeholder="Votre email"
          icon="email"
          value={formData["email"]}
          isError={formDataErrors["email"]}
          required
          onChange={(val) => setFormData("email", val)}
        />
        <InputTitle
          title="Téléphone"
          placeholder="Votre numéro de téléphone"
          icon="tel"
          value={formData["tel"]}
          isError={formDataErrors["tel"]}
          required
          onChange={(val) => setFormData("tel", val)}
        />
      </div>

      <InputTitle
        title="Commentaires"
        icon="message"
        placeholder="Vos commentaires ici"
        value={formData["comment"]}
        isError={formDataErrors["comment"]}
        variant="textarea"
        required={!isCommentOptional}
        onChange={(val) => setFormData("comment", val)}
      />

      <Button onClick={onSubmit} label={buttonLabel} theme="primary" />
    </form>
  );
};

export default Form;
