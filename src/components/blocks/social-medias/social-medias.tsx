import React from "react";
import "./social-medias.scss";
import TitleSection from "@/components/molecules/title-section/title-section";
import SocialMedia, {
  SocialMediaProps,
} from "@/components/molecules/social-media/social-media";

const SocialMedias = () => {
  const socialMedias: SocialMediaProps[] = [
    {
      linkUrl: "/",
      imageUrl: "/assets/images/snapchat.png",
      label: "@Soigne_ta_voiture",
    },
    {
      linkUrl: "/",
      imageUrl: "/assets/images/instagram.png",
      label: "@Soigne_ta_voiture",
    },
    {
      linkUrl: "/",
      imageUrl: "/assets/images/tiktok.png",
      label: "@Soigne_ta_voiture",
    },
    {
      linkUrl: "/",
      imageUrl: "/assets/images/whatsapp.png",
      label: "@Soigne_ta_voiture",
    },
  ];
  return (
    <div className="social-medias">
      <TitleSection
        title="RETROUVEZ-NOUS ICI"
        subtitle="RESEAUX-SOCIAUX"
        size="default"
        alignement="center"
      />
      <div className="social-medias__socials">
        <div className="social-medias__socials__container">
          <SocialMedia {...socialMedias[0]} />
          <SocialMedia {...socialMedias[1]} />
        </div>
        <div className="social-medias__socials__container">
          <SocialMedia {...socialMedias[2]} />
          <SocialMedia {...socialMedias[3]} />
        </div>
      </div>
    </div>
  );
};

export default SocialMedias;
