"use client";

import React, { useRef, useState } from "react";
import { Swiper } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Icon } from "../../atoms/icon/icon";
import "./carousel.scss";

export type CarouselProps = {
  className?: string;
  children: React.ReactNode;
  spaceBetween?: number;
  breakpoints?: Record<string, any>;
  slidesPerViews?: number;
  slidesPerGroup?: number;
  direction?: "horizontal" | "vertical";
  autoPlay?: boolean;
  delay?: number;
  infiniteLoop?: boolean;
  effect?: string;
  fillCarousel?: boolean;
};

export default function Carousel({
  className,
  children,
  spaceBetween,
  breakpoints,
  slidesPerViews,
  slidesPerGroup,
  direction,
  autoPlay,
  delay,
  infiniteLoop,
  effect,
  fillCarousel,
}: CarouselProps) {
  const navPrevButton = useRef<HTMLButtonElement>(null);
  const navNextButton = useRef<HTMLButtonElement>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const onBeforeInit = (Swiper: SwiperCore): void => {
    if (typeof Swiper.params.navigation !== "boolean") {
      const navigation = Swiper.params.navigation;
      navigation!.prevEl = navPrevButton.current;
      navigation!.nextEl = navNextButton.current;
    }
  };

  const updateButtonsState = (prev: any, next: any) => {
    setIsBeginning(prev.current.classList.contains("swiper-button-disabled"));
    setIsEnd(next.current.classList.contains("swiper-button-disabled"));
  };

  return (
    <div className={`carousel ${className || ""}`}>
      <Swiper
        onBeforeInit={onBeforeInit}
        breakpoints={breakpoints}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerViews}
        slidesPerGroup={slidesPerGroup}
        direction={direction || "horizontal"}
        autoplay={autoPlay && { delay: delay }}
        modules={[Autoplay, Navigation, Pagination]}
        loop={infiniteLoop || false}
        effect={effect}
        navigation={{
          enabled: true,
          nextEl: ".swiper-navigation-next",
          prevEl: ".swiper-navigation-prev",
        }}
      >
        {children}
      </Swiper>

      <div className="carousel__navigation">
        <button
          aria-label="Navigation précédent"
          ref={navPrevButton}
          className={`swiper-navigation-prev nav-btn prev ${
            !isBeginning ? "hover" : ""
          }`}
          onClick={() => {
            updateButtonsState(navPrevButton, navNextButton);
          }}
        >
          <Icon name="arrow-left" fill={isBeginning ? "#dedede" : "black"} />
        </button>

        <button
          aria-label="Navigation suivant"
          ref={navNextButton}
          className={`swiper-navigation-next nav-btn next ${
            !isEnd ? "hover" : ""
          }`}
          onClick={() => updateButtonsState(navPrevButton, navNextButton)}
        >
          <Icon name="arrow-right" fill={isEnd ? "#dedede" : "black"} />
        </button>
      </div>
      {/* 
    <div
      className="swiper-pagination-custom"
      onClick={() => updateButtonsState(navPrevButton, navNextButton)}
    ></div> 
    */}
    </div>
  );
}
