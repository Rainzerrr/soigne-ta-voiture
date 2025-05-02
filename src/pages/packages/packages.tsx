import React from "react";
import PageIntro from "@/components/blocks/page-intro/page-intro";
import Packages from "@/components/blocks/packages/packages";
import ContentWrapper from "@/utils/page-wrapper/content-wrapper";
import "./packages.scss";

const PackagesTemplate = () => {
  return (
    <div className="packages">
      <PageIntro
        title="NOS PACKAGES"
        subtitle="PACKAGES"
        imageUrl="/assets/images/packages-intro.jpg"
      />
      <ContentWrapper showBackgroundColor>
        <div className="packages__content">
          <Packages />
        </div>
      </ContentWrapper>
    </div>
  );
};

export default PackagesTemplate;
