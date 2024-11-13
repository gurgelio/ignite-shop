import { getSessionDetails } from "@/lib/stripe";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface SuccessProps {
  searchParams: Promise<{
    session_id?: string;
  }>;
}

export const metadata: Metadata = {
  title: "Compra realizada | Ignite Shop",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function Success({ searchParams }: SuccessProps) {
  const { session_id } = await searchParams;
  if (session_id == null) redirect("/");
  const { customer_details, line_items } = await getSessionDetails(session_id);
  const product = line_items.data[0].price.product;

  return (
    <main className="mx-auto flex h-[656px] flex-col items-center justify-center gap-16">
      <h1 className="text-3xl">Compra efetuada</h1>
      <div className="flex h-32 w-full max-w-32 items-center justify-center rounded-lg bg-gradient-to-b from-[#1ea483] to-[#7465d4]">
        <Image
          className="object-cover"
          src={product.images[0]}
          alt=""
          height={128}
          width={128}
          priority
        />
      </div>

      <p className="max-w-[560px] text-center text-2xl text-zinc-300">
        Uhuul <strong className="font-bold">{customer_details?.name}</strong>,
        sua <strong className="font-bold">{product.name}</strong> já está a
        caminho de sua casa.
      </p>

      <Link
        href="/"
        className="block text-lg font-bold text-emerald-500 hover:text-emerald-400"
      >
        Voltar ao catálogo
      </Link>
    </main>
  );
}
