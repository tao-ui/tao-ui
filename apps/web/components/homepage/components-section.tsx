import type { ComponentProps, FC } from "react";

export const ComponentsSection: FC = () => {
  return <section>asdf</section>;
};

interface ComponentCardProps extends ComponentProps<"div"> {
  link: string;
  name: string;
  image: string;
  imageDark: string;
  classes: string;
}

const ComponentCard: FC<ComponentCardProps> = ({}) => {
  return <div>components</div>;
};
