"use client";
import Button from "@/components/molecules/button/button";
import InputTitle from "@/components/molecules/input-title/input-title";
import "./form.scss";
import { useRef, useState } from "react";

const Form = () => {
  const [value, setValue] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.submit();
    }
  };

  return (
    <form ref={formRef} className="form">
      <div className="form__identity">
        <InputTitle
          title="Nom"
          icon="user"
          placeholder="Votre nom"
          value={""}
          required
          onChange={(val) => setValue(val)}
        />
        <InputTitle
          title="Prénom"
          placeholder="Votre prénom"
          icon="user"
          value={""}
          required
          onChange={(val) => setValue(val)}
        />
      </div>
      <div className="form__contact">
        <InputTitle
          title="Email"
          placeholder="Votre email"
          icon="email"
          value={""}
          required
          onChange={(val) => setValue(val)}
        />
        <InputTitle
          title="Téléphone"
          placeholder="Votre numéro de téléphone"
          icon="tel"
          value={""}
          required
          onChange={(val) => setValue(val)}
        />
      </div>

      <InputTitle
        title="Commentaires"
        icon="message"
        placeholder="Vos commentaires ici"
        value={value}
        variant="textarea"
        onChange={(val) => setValue(val)}
      />

      <Button onClick={handleSubmit} label="ENVOYER " theme="primary" />
    </form>
  );
};

export default Form;
