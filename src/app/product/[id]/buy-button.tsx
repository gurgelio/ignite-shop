"use client";

import { useState } from "react";

interface BuyButtonProps {
  handleBuyProduct: () => Promise<void>;
}

export function BuyButton({ handleBuyProduct }: BuyButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const wrappedAction = async () => {
    setIsLoading(true);
    try {
      await handleBuyProduct();
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  return (
    <button
      className="mt-auto cursor-pointer rounded-lg bg-emerald-600 p-5 text-xl font-bold text-white transition-colors hover:bg-emerald-500 disabled:bg-slate-500"
      onClick={wrappedAction}
      disabled={isLoading}
    >
      Comprar agora
    </button>
  );
}
