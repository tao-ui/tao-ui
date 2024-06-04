import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { Input } from "tao-react";
import { Banner } from "~/components/banner";

export const Header: FC = () => {
  return (
    <header className="flex flex-col gap-4">
      <Banner />

      <section className="container mx-auto flex h-input max-w-screen-xl items-center justify-between gap-x-6 gap-y-2">
        <Link href="/" className="flex h-full items-center rounded-full bg-tertiary px-6">
          <Image width={107} height={28} alt="Tao UI Logo" src="/logo.png" />
        </Link>
        <nav className="flex size-full items-center justify-start gap-6 rounded-full border-input px-6 uppercase">
          <Link href="/docs">Docs</Link>
          <Link href="/theming">Theming</Link>
          <Link href="/sponsor">Sponsor</Link>
        </nav>
        {/* TODO: Comp: Search Component */}
        <search>
          <Input
            id="site-search"
            placeholder="Search"
            className="!bg-white"
            LeadIcon={<RxMagnifyingGlass size={24} style={{ strokeWidth: 1, color: "#7B797F" }} />}
          />
        </search>
        {/* Comp: Search Component */}
      </section>
    </header>
  );
};
