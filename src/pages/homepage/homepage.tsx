import SavoirFaire from "@/components/blocks/savoir-faire/savoir-faire";
import HomepageIntro from "@/components/blocks/homepage-intro/homepage-intro";
import { BeforeAfterProps } from "@/components/organisms/before-after/before-after";
import "./homepage.scss";
import ContentWrapper from "@/utils/page-wrapper/content-wrapper";
import Packages from "@/components/blocks/packages/packages";

export const beforeAfterSlides: BeforeAfterProps[] = [
  {
    beforeCard: {
      variant: "before",
      imageUrl: "/assets/images/before-devant.png",
      alt: "Before image alt",
    },
    afterCard: {
      variant: "after",
      imageUrl: "/assets/images/after-devant.png",
      alt: "After image alt",
    },
  },
  {
    beforeCard: {
      variant: "before",
      imageUrl: "/assets/images/before-seats.jpg",
      alt: "Before image alt",
    },
    afterCard: {
      variant: "after",
      imageUrl: "/assets/images/after-seats.jpg",
      alt: "After image alt",
    },
  },
  {
    beforeCard: {
      variant: "before",
      imageUrl: "/assets/images/before-chassis.png",
      alt: "Before image alt",
    },
    afterCard: {
      variant: "after",
      imageUrl: "/assets/images/after-chassis.png",
      alt: "After image alt",
    },
  },
];

const Homepage = () => {
  return (
    <div className="homepage">
      <HomepageIntro />
      <ContentWrapper showBackgroundColor>
        <div className="homepage__content">
          <SavoirFaire
            variant="homepage"
            beforeAfterCards={beforeAfterSlides}
          />
          <Packages />
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Homepage;
