import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { RxDiscordLogo, RxGithubLogo, RxMagnifyingGlass } from "react-icons/rx";
import { Input } from "tao-react";
import { Banner } from "~/components/banner";
import { RAW_HEX_CODES } from "~/data/settings";
import { WrapContainer } from "./ui";

export const Header: FC = () => {
  return (
    <header className="flex flex-col gap-4 ">
      <Banner />
      {/* NOTE: mobile styles are minimal and temporary until I have a Drawer component solution. They consist of hiding the search and adjust the flex direction. */}
      <WrapContainer
        className="mb-4 flex h-input flex-col items-center justify-between gap-x-6 gap-y-2 md:flex-row"
        as="section"
      >
        <Link
          href="/"
          className="flex h-full shrink-0 items-center rounded-full border-input border-secondary-600 bg-tertiary px-4"
        >
          <Image width={147} height={37} alt="Tao UI Logo" src="/tao-logo.svg" />
        </Link>
        <nav className="flex size-full items-center justify-start gap-6 rounded-full border-el border-neutral-cool-300 bg-level-2 px-6 py-2 uppercase">
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
        <search className="hidden md:inline-block">
          <Input
            id="site-search"
            placeholder="Search"
            className="!bg-white"
            LeadIcon={
              <RxMagnifyingGlass size={24} style={{ strokeWidth: 1, color: RAW_HEX_CODES["neutral-cool-gray"] }} />
            }
          />
        </search>
        {/* Comp: Search Component */}
      </WrapContainer>
    </header>
  );
};
