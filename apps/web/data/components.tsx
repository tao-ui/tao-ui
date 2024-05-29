interface Component {
  name: string;
  image: string;
  imageDark: string;
  link: string;
  classes: string;
}

export const COMPONENTS_DATA: Component[] = [
  {
    name: "Buttons",
    image: "/images/components/buttons.svg",
    imageDark: "/images/components/buttons-dark.svg",
    link: "/docs/components/button",
    classes: "w-24",
  },

  // {
  //   name: "Rating",
  //   image: "/images/components/rating.svg",
  //   imageDark: "/images/components/rating-dark.svg",
  //   link: "/docs/components/rating",
  //   classes: "w-48",
  // },

  // {
  //   name: "Progress bar",
  //   image: "/images/components/progress.svg",
  //   imageDark: "/images/components/progress-dark.svg",
  //   link: "/docs/components/progress",
  //   classes: "w-48",
  // },
];
