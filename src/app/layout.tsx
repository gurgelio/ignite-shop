import "@/styles/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import Image from "next/image";
import logo from "./assets/logo.svg";

export const metadata: Metadata = {
  title: "Ignite Shop",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.className} bg-zinc-900 text-zinc-100 antialiased`}
      >
        <div className="flex min-h-screen flex-col items-start justify-center">
          <header className="mx-auto w-full max-w-7xl py-8">
            <Image src={logo} alt="" />
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
