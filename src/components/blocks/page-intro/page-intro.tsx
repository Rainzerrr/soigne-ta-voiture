import TitleSection from "@/components/molecules/title-section/title-section";
import React, { CSSProperties, FC } from "react";
import "./page-intro.scss";
import ContentWrapper from "@/utils/page-wrapper/content-wrapper";

interface PageIntroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const PageIntro: FC<PageIntroProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <div
      className="page-intro"
      style={
        {
          "--bg-url": `url('${imageUrl}')`,
        } as CSSProperties
      }
    >
      <ContentWrapper>
        <TitleSection
          className="page-intro__title-section"
          title={title}
          subtitle={subtitle}
          alignement="center"
          size="large"
          variant="light"
        />
      </ContentWrapper>
    </div>
  );
};

export default PageIntro;
