import { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
  variant: string;
  type?: "submit" | "button" | "reset";
}

export function Button({ children, variant, type = "button" }: ButtonProps) {
  console.log(variant);
  return (
    <button
      className="rounded-md px-2 py-1 transition-all hover:brightness-75"
      type={type}
    >
      {children}
    </button>
  );
}
