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
  swiperId: string;
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
  swiperId,
  infiniteLoop,
  effect,
  fillCarousel,
}: CarouselProps) {
  const navPrevButton = useRef<HTMLButtonElement>(null);
  const navNextButton = useRef<HTMLButtonElement>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className={`carousel ${className || ""}`}>
      <Swiper
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
          nextEl: `.swiper-next-${swiperId}`,
          prevEl: `.swiper-prev-${swiperId}`,
        }}
      >
        {children}
      </Swiper>

      <div className="carousel__navigation">
        <button
          aria-label="Navigation précédent"
          ref={navPrevButton}
          className={`swiper-prev swiper-prev-${swiperId} nav-btn`}
        >
          <Icon name="arrow-left" fill="black" />
        </button>

        <button
          aria-label="Navigation suivant"
          ref={navNextButton}
          className={`swiper-next swiper-next-${swiperId} nav-btn`}
        >
          <Icon name="arrow-right" fill="black" />
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
