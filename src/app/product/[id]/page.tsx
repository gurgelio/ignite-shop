import { getProductDetails } from "@/lib/stripe";
import { formatPrice } from "@/lib/utils/formatPrice";
import Image from "next/image";

interface ProductProps {
  params: Promise<{
    id: string;
  }>;
}

export const revalidate = 14400; // 4 hours in seconds
export const dynamic = "force-static";

export async function generateStaticParams() {
  return [];
}

export default async function Product({ params }: ProductProps) {
  const { id } = await params;
  const product = await getProductDetails(id);

  return (
    <main className="mx-auto grid max-w-6xl grid-cols-2 items-stretch gap-16">
      <div className="flex h-[656px] w-full max-w-xl items-center justify-center rounded-lg bg-gradient-to-b from-[#1ea483] to-[#7465d4] object-cover p-1">
        <Image src={product.images[0]} alt="" width={576} height={656} />
      </div>
      <article className="flex flex-col">
        <h1 className="text-3xl text-gray-300">{product.name}</h1>
        <span className="mt-4 block text-3xl text-emerald-400">
          {formatPrice(product.default_price.unit_amount!)}
        </span>
        <p className="mt-10 text-lg text-gray-300">{product.description}</p>

        <button className="mt-auto cursor-pointer rounded-lg bg-emerald-600 p-5 text-xl font-bold text-white transition-colors hover:bg-emerald-500">
          Comprar agora
        </button>
      </article>
    </main>
  );
}
