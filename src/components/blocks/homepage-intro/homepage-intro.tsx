import TitleSection from "@/components/molecules/title-section/title-section";
import Button from "@/components/molecules/button/button";
import "./homepage-intro.scss";
import ContentWrapper from "@/utils/page-wrapper/content-wrapper";

const HomepageIntro = () => {
  return (
    <ContentWrapper>
      <div className="homepage-intro-wrapper">
        <div className="homepage-intro">
          <TitleSection
            title="NETTOYAGE DE VOITURE EN PROFONDEUR"
            variant="light"
            alignement="left"
            size="large"
            subtitle="SOIGNE TA VOITURE"
          />
          <p className="homepage-intro__description">
            Redonnez vie à votre voiture, en la confiant à nox experts qui la
            nettoient dans les moindres recoins, avec notre outillage
            professionnel
          </p>
          <div className="homepage-intro__buttons">
            <Button
              className="homepage-intro__button"
              label="PRENDRE RENDEZ-VOUS"
              theme="primary"
              fullWidth
            />
            <Button
              className="homepage-intro__button"
              label="PARCOURIR LES OFFRES"
              theme="secondary"
              fullWidth
            />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default HomepageIntro;
