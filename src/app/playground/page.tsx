"use client";
import InputTitle from "@/components/molecules/input-title/input-title";
import Homepage from "@/pages/homepage/homepage";
import { useState } from "react";

const page = () => {
  const [value, setValue] = useState("dzdaz");
  return (
    <div className="body">
      <div className="custom-class">
        {/* <Carousel
          autoPlay
          infiniteLoop
          delay={5000}
          slidesPerGroup={1}
          slidesPerViews={1}
          breakpoints={{
            1: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <BeforeAfter
              beforeCard={{
                variant: "before",
                imageUrl: "/assets/images/before-devant.png",
                alt: "Before image alt",
              }}
              afterCard={{
                variant: "after",
                imageUrl: "/assets/images/after-devant.png",
                alt: "After image alt",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BeforeAfter
              beforeCard={{
                variant: "before",
                imageUrl: "/assets/images/before-seats.jpg",
                alt: "Before image alt",
              }}
              afterCard={{
                variant: "after",
                imageUrl: "/assets/images/after-seats.jpg",
                alt: "After image alt",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BeforeAfter
              beforeCard={{
                variant: "before",
                imageUrl: "/assets/images/before-chassis.png",
                alt: "Before image alt",
              }}
              afterCard={{
                variant: "after",
                imageUrl: "/assets/images/after-chassis.png",
                alt: "After image alt",
              }}
            />
          </SwiperSlide>
        </Carousel> */}
        <InputTitle
          title="Nom"
          icon="spark"
          placeholder="Votre nom"
          value={value}
          onChange={(value: string) => setValue(value)}
        />
      </div>
    </div>
  );
};

export default page;
