import Slider from "@/components/slider";
import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Stripe from "stripe";

export default async function Home() {
  const { data } = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return (
    <>
      <Slider perView={3} spacing={48}>
        {data.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Slider>
    </>
  );
}

interface ProductProps {
  product: Stripe.Product;
}

function Product({ product }: ProductProps) {
  const price = product.default_price as Stripe.Price;
  return (
    <a className="keen-slider__slide group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-[#1ea483] to-[#7465d4]">
      <Image
        src={product.images[0]}
        width={520}
        height={480}
        priority={false}
        alt=""
        className="object-cover"
      />
      <footer className="absolute bottom-1 left-1 right-1 flex translate-y-[110%] items-center justify-between rounded-md bg-black bg-opacity-60 p-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
        <strong className="text-2xl font-bold text-emerald-500">
          {product.name}
        </strong>
        <span>
          {(price.unit_amount! / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </footer>
    </a>
  );
}
