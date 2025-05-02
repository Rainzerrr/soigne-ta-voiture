import PageIntro from "@/components/blocks/page-intro/page-intro";
import { FC, ReactNode } from "react";
import "./layout.scss";
import Milestones from "@/components/organisms/milestones/milestones";
import ContentWrapper from "@/utils/page-wrapper/content-wrapper";

interface RendezVousLayoutProps {
  children: ReactNode;
}

const RendezVousLayout: FC<RendezVousLayoutProps> = ({ children }) => {
  return (
    <div className="rendez-vous">
      <PageIntro
        title="PRENDRE RENDEZ-VOUS"
        subtitle="RENDEZ-VOUS"
        imageUrl="/assets/images/rendez-vous-intro.jpg"
      />
      <ContentWrapper showBackgroundColor>
        <div className="rendez-vous__content">
          <Milestones
            currentMilestone={1}
            milestones={[
              { index: 1, label: "Choix du package", status: "next" },
              { index: 2, label: "Date & Heure", status: "next" },
              { index: 3, label: "Informations", status: "next" },
              { index: 4, label: "Récapitulatif", status: "next" },
            ]}
          />

          {children}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default RendezVousLayout;
