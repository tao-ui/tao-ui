import Link from "next/link";
import type { FC } from "react";

export const Banner: FC = () => {
  return (
    <div className="bg-primary py-4" tabIndex={-1}>
      <div className="container mx-auto flex justify-center text-white">
        In pre-contribution Alpha. Contact aaron.crockett.00@gmail.com for info.
      </div>
    </div>
  );
};
