import image1 from "@/assets/Carousels/carousel-1@md.webp";
import image2 from "@/assets/Carousels/carousel-2@md.webp";
import image3 from "@/assets/Carousels/carousel-3@md.webp";
import image4 from "@/assets/Carousels/carousel-4@md.webp";
import image5 from "@/assets/Carousels/carousel-5@md.webp";

export interface FourthDataTypes {
  id: number;
  image: string;
  label: string;
}

export const FourthSectionData: FourthDataTypes[] = [
  {
    id: 1,
    image: image1.src,
    label: "Take the Clingr from the bag",
  },
  {
    id: 2,
    image: image2.src,
    label: "Attach the holder to any convenient surface",
  },
  {
    id: 3,
    image: image3.src,
    label: "Lay it out",
  },
  {
    id: 4,
    image: image4.src,
    label: "Insert and secure the hairdryer",
  },
  {
    id: 5,
    image: image5.src,
    label: "Ready!",
  },
];
