import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { RxDiscordLogo, RxGithubLogo, RxMagnifyingGlass } from "react-icons/rx";
import { Input } from "tao-react";
import { Banner } from "~/components/banner";

export const Header: FC = () => {
  return (
    <header className="flex flex-col gap-4">
      <Banner />

      <section className="container mx-auto flex h-input max-w-screen-xl items-center justify-between gap-x-6 gap-y-2">
        <Link
          href="/"
          className="flex h-full items-center rounded-full border-input border-secondary-600 bg-tertiary px-4"
        >
          <Image width={147} height={37} alt="Tao UI Logo" src="/logo.png" />
        </Link>
        <nav className="flex size-full items-center justify-start gap-6 rounded-full border-input border-input-border bg-surface px-6 uppercase">
          <Link href="#">Docs</Link>
          <Link href="/theming">Theming</Link>
          <Link href="/sponsor">Sponsor</Link>
          <Link href="https://github.com/tao-ui/tao-ui">
            <RxGithubLogo size={24} />
          </Link>
          <Link href="#">
            <RxDiscordLogo size={24} />
          </Link>
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
