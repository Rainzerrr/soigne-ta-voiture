import TitleSection from "@/components/molecules/title-section/title-section";
import Form from "@/components/organisms/form/form";
import "./contact-form.scss";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <TitleSection
        title="CONTACTEZ-NOUS"
        subtitle="FORMULAIRE"
        alignement="center"
        size="large"
      />
      <Form />
    </div>
  );
};

export default ContactForm;
