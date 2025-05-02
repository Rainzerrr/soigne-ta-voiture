"use client";
import React, { FC } from "react";
import Prestation, {
  PrestationProps,
} from "@/components/molecules/prestation/prestation";
import { SwiperSlide } from "swiper/react";
import Carousel from "@/components/molecules/carousel/carousel";
import TitleSection from "@/components/molecules/title-section/title-section";
import "./prestations.scss";

interface PrestationsProps {
  prestations: PrestationProps[];
}

const Prestations: FC<PrestationsProps> = ({ prestations }) => {
  return (
    <div className="prestations">
      <TitleSection
        title="NOS PRESTATIONS"
        subtitle="PRESTATIONS"
        alignement="center"
        size="default"
      />
      <Carousel
        className="prestations__carousel"
        swiperId="prestations"
        breakpoints={{
          1: {
            slidesPerView: 1.3,
            spaceBetween: 12,
          },
          480: {
            slidesPerView: 1.7,
            spaceBetween: 12,
          },
          680: {
            slidesPerView: 2.1,
            spaceBetween: 16,
          },
          880: {
            slidesPerView: 2.4,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 2.6,
            spaceBetween: 24,
          },

          1280: {
            slidesPerView: 3.4,
            spaceBetween: 24,
          },
        }}
      >
        {prestations.map((prestation: PrestationProps) => (
          <SwiperSlide key={prestation.title}>
            <Prestation {...prestation} />
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default Prestations;
