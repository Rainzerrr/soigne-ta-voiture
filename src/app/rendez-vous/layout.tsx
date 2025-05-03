"use client";
import PageIntro from "@/components/blocks/page-intro/page-intro";
import { FC, ReactNode, useState } from "react";
import "./layout.scss";
import Milestones from "@/components/organisms/milestones/milestones";
import ContentWrapper from "@/utils/page-wrapper/content-wrapper";
import { RendezVousProvider, useRendezVous } from "@/contexts/useRendezVous";

interface RendezVousLayoutProps {
  children: ReactNode;
}

const RendezVousLayout: FC<RendezVousLayoutProps> = ({ children }) => {
  const [currentMilestone, setCurrentMilestone] = useState(1);

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
            currentMilestone={currentMilestone}
            milestones={[
              {
                index: 1,
                label: "Choix du package",
                status: "next",
              },
              {
                index: 2,
                label: "Date & Heure",
                status: "next",
              },
              {
                index: 3,
                label: "Informations",
                status: "next",
              },
              {
                index: 4,
                label: "Récapitulatif",
                status: "next",
              },
            ]}
          />
          <RendezVousProvider
            currentMilestone={currentMilestone}
            setCurrentMilestone={setCurrentMilestone}
          >
            {children}
          </RendezVousProvider>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default RendezVousLayout;
