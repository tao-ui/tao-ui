import Link from "next/link";
import type { FC } from "react";
import { WrapContainer } from "./ui";

export const Banner: FC = () => {
  return (
    <div className="bg-primary py-4" tabIndex={-1}>
      <WrapContainer className="flex items-center justify-center text-white">
        In pre-contribution Alpha. Contact aaron.crockett.00@gmail.com for info.
      </WrapContainer>
    </div>
  );
};
