import { FC } from "react";
import "./rendez-vous.scss";
import PageIntro from "@/components/blocks/page-intro/page-intro";

interface RendezVousProps {}

const RendezVous: FC<RendezVousProps> = ({}) => {
  return (
    <div className="rendez-vous">
      <PageIntro
        title="PRENDRE RENDEZ-VOUS"
        subtitle="RENDEZ-VOUS"
        imageUrl="/assets/images/rendez-vous-intro.jpg"
      />
      <div className="rendez-vous__content"></div>
    </div>
  );
};

export default RendezVous;
