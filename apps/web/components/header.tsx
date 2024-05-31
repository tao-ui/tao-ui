import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { Input } from "tao-react";
import { Banner } from "~/components/banner";

export const Header: FC = () => {
  return (
    <header>
      <Banner />
      <section className="flex items-center justify-between gap-2">
        <Link href="/">
          <Image width={107} height={28} alt="Tao UI Logo" src="/logo.png" />
        </Link>
        <nav>
          <Link href="/theming">Theming</Link>
        </nav>
        {/* TODO: Comp: Search Component */}
        <search>
          <Input
            id="site-search"
            placeholder="Search"
            LeadIcon={<RxMagnifyingGlass size={24} style={{ strokeWidth: 1, color: "#7B797F" }} />}
          />
        </search>
        {/* Comp: Search Component */}
      </section>
    </header>
  );
};
