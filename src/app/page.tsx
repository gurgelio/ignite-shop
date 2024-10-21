"use client";

import Image, { StaticImageData } from "next/image";
import shirt1 from "@/app/assets/camisa-1.png";
import shirt2 from "@/app/assets/camisa-2.png";
import shirt3 from "@/app/assets/camisa-3.png";
import shirt4 from "@/app/assets/camisa-4.png";
import shirt5 from "@/app/assets/camisa-5.png";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  return (
    <main
      className="keen-slider ml-auto flex min-h-[656px] w-full max-w-[calc(100vw-((100vw-1180px)/2))]"
      ref={sliderRef}
    >
      <Product img={shirt1} price={79.9} name="Camiseta X" />
      <Product img={shirt2} price={79.9} name="Camiseta Y" />
      <Product img={shirt3} price={79.9} name="Camiseta Z" />
      <Product img={shirt4} price={79.9} name="Camiseta Z" />
      <Product img={shirt5} price={79.9} name="Camiseta Z" />
    </main>
  );
}

interface ProductProps {
  price: number;
  name: string;
  img: StaticImageData;
}

function Product({ img, name, price }: ProductProps) {
  return (
    <a className="keen-slider__slide group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-[#1ea483] to-[#7465d4]">
      <Image
        src={img}
        width={520}
        height={480}
        placeholder="empty"
        priority={false}
        alt=""
        className="object-cover"
      />
      <footer className="absolute bottom-1 left-1 right-1 flex translate-y-[110%] items-center justify-between rounded-md bg-black bg-opacity-60 p-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
        <strong className="text-2xl font-bold text-emerald-500">{name}</strong>
        <span>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </footer>
    </a>
  );
}
