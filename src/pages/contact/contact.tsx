import Faq from "@/components/blocks/faq/faq";
import PageIntro from "@/components/blocks/page-intro/page-intro";
import SocialMedias from "@/components/blocks/social-medias/social-medias";
import ContentWrapper from "@/utils/page-wrapper/content-wrapper";
import React, { FC } from "react";
import "./contact.scss";
import ContactForm from "@/components/blocks/contact-form/contact-form";
interface ContactProps {}
const Contact: FC<ContactProps> = ({}) => {
  return (
    <div className="contact">
      <PageIntro
        title="PRISE DE CONTACT"
        subtitle="CONTACT"
        imageUrl="/assets/images/contact-intro.jpg"
      />
      <ContentWrapper showBackgroundColor>
        <div className="contact__content">
          <ContactForm />
          <SocialMedias />
          <Faq />
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Contact;
