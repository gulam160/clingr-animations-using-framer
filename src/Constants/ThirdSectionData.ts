import { GiComb, GiFemaleVampire } from "react-icons/gi";
import { GoStopwatch } from "react-icons/go";

interface ThirdSectionData {
  id: number;
  icon: any;
  title: string;
  description: string;
  image: string;
}

export const thirdSectionData: ThirdSectionData[] = [
  {
    id: 1,
    icon: GiComb,
    title: "Dry, comb and style your hair – all at the same time!",
    description:
      "Before you can style your hair, it has to be pre-dried. Now with Clingr you can style your hair while it's drying. Gather the strand with one hand and comb it with the other.Straighten or curl your hair at the same time as drying to easily create your desired look.",
    image:
      "https://clingr.me/assets/images/media/landing/3.benefits/benefits-1@md.webp",
  },
  {
    id: 2,
    icon: GoStopwatch,
    title:
      "Ten minutes instead of 40: style long hair like a professional everyday",
    description:
      "Hands-free from the hairdryer gives you better control of your hair than even a beauty salon stylist. With a Clingr, styling becomes a quick and easy daily ritual. It is no longer a long and painful process, which you can afford just a few times a week, but a simple and enjoyable experience. With a Clingr, you will always look your best.",
    image:
      "https://clingr.me/assets/images/media/landing/3.benefits/benefits-2@md.webp",
  },
  {
    id: 3,
    icon: GiFemaleVampire,
    title: "Healthy, shiny and beautiful hair",
    description:
      "Clingr allows the hairdryer to be attached at a safe distance from the hair, where the airflow temperature will not exceed 50⁰C. This temperature setting ensures efficient drying without burning or damaging the hair. With a Clingr, your hair will shine and look naturally beautiful.",
    image:
      "https://clingr.me/assets/images/media/landing/3.benefits/benefits-3@md.webp",
  },
];
