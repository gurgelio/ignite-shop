"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { type PropsWithChildren } from "react";

export interface SliderProps extends PropsWithChildren {
  perView: number;
  spacing: number;
}

export default function Slider({ children, perView, spacing }: SliderProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView,
      spacing,
    },
  });

  return (
    <main
      ref={sliderRef}
      className="keen-slider ml-auto flex min-h-[656px] w-full max-w-[calc(100vw-((100vw-1180px)/2))]"
    >
      {children}
    </main>
  );
}
