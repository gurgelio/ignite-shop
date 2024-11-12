import { type ExpandedPriceProduct, getProducts } from "@/lib/stripe";
import { formatPrice } from "@/lib/utils/formatPrice";
import Image from "next/image";
import Link from "next/link";
import Slider from "./slider";

export default async function Home() {
  const { data } = await getProducts();

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
  product: ExpandedPriceProduct;
}

function Product({ product }: ProductProps) {
  return (
    <Link
      className="keen-slider__slide group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-[#1ea483] to-[#7465d4]"
      href={`/product/${product.id}`}
      prefetch={false}
    >
      <Image
        src={product.images[0]}
        width={520}
        height={480}
        priority={false}
        alt=""
        className="object-cover"
      />
      <footer className="absolute bottom-1 left-1 right-1 flex translate-y-[110%] items-center justify-between rounded-md bg-black bg-opacity-60 p-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
        <span className="text-2xl">{product.name}</span>
        <span className="font-bold text-emerald-500">
          {formatPrice(product.default_price.unit_amount!)}
        </span>
      </footer>
    </Link>
  );
}
