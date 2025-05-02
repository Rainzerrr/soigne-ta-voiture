import QuestionDrawer, {
  QuestionDrawerProps,
} from "@/components/molecules/question-drawer/question-drawer";
import TitleSection from "@/components/molecules/title-section/title-section";
import React from "react";
import "./faq.scss";

const Faq = () => {
  const questions: QuestionDrawerProps[] = [
    {
      question: "À quelle fréquence devrais-je laver ma voiture ?",
      answer:
        "Il est recommandé de laver votre voiture toutes les deux semaines pour éviter l'accumulation de saletés, de sel ou de polluants qui peuvent abîmer la peinture.",
    },
    {
      question:
        "Quelle est la différence entre un lavage intérieur et extérieur ?",
      answer:
        "Le lavage extérieur inclut le nettoyage de la carrosserie, des vitres et des jantes, tandis que le lavage intérieur comprend l'aspiration, le dépoussiérage et le nettoyage des sièges, tapis et surfaces intérieures.",
    },
    {
      question: "Utilisez-vous des produits écologiques ?",
      answer:
        "Oui, nous utilisons des produits respectueux de l’environnement, biodégradables et sans danger pour votre véhicule.",
    },
    {
      question: "Proposez-vous un service à domicile ?",
      answer:
        "Oui, nous nous déplaçons directement à votre domicile ou sur votre lieu de travail pour plus de confort et de flexibilité.",
    },
    {
      question: "Combien de temps dure un nettoyage complet ?",
      answer:
        "Un nettoyage complet intérieur et extérieur prend en moyenne entre 1h30 et 2h selon l’état du véhicule.",
    },
    {
      question: "Est-ce que vous nettoyez les sièges en cuir ?",
      answer:
        "Oui, nous utilisons des produits spécifiques pour nettoyer et nourrir le cuir sans l’abîmer.",
    },
    {
      question: "Faut-il prendre rendez-vous ?",
      answer:
        "Oui, il est préférable de réserver à l'avance afin de garantir une disponibilité à l'heure souhaitée.",
    },
    {
      question: "Quels sont vos moyens de paiement ?",
      answer:
        "Nous acceptons les paiements en espèces, par carte bancaire, et par virement.",
    },
  ];

  return (
    <div className="faq">
      <TitleSection
        title="FOIRE AUX QUESTIONS"
        subtitle="FAQ"
        size="default"
        alignement="center"
      />
      <div className="faq__content">
        {questions.map((question: QuestionDrawerProps) => (
          <QuestionDrawer key={question.question} {...question} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
