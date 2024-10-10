import { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
  variant: string;
  type?: "submit" | "button" | "reset";
}

export function Button({ children, variant, type = "button" }: ButtonProps) {
  return (
    <button
      className="rounded-md py-1 px-2 hover:brightness-75 transition-all"
      type={type}
    >
      {children}
    </button>
  );
}
