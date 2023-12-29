import {
  FourthDataTypes,
  FourthSectionData,
} from "@/Constants/FourthSectionData";
import howToUseBg from "@/assets/Carousels/background@md.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { Parallax } from "react-parallax";

interface FourthSectionProps {}

const FourthSection: React.FC<FourthSectionProps> = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-95%"]);

  return (
    <Parallax
      bgImage={howToUseBg.src}
      bgImageAlt="bg"
      className="h-screen rounded-xl"
    >
      <section ref={targetRef} className="relative h-[200vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {FourthSectionData.map((el) => (
              <Cards key={el.id} {...el} />
            ))}
          </motion.div>
        </div>
      </section>
    </Parallax>
  );
};

const Cards: React.FC<FourthDataTypes> = (card) => {
  return (
    <div className="group relative h-[350px] w-[200px] overflow-hidden bg-neutral-200">
      <div className="bg-[#f9f6f4] absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110">
        <p className="py-1 px-2.5 border border-gray-500 w-fit rounded-full">
          {card.id}
        </p>
        <Image
          src={card.image}
          alt={card.label}
          width={200}
          height={200}
          className="absolute -top-10 z-20 grid place-content-center"
        />
      </div>
      <p className="text-center absolute z-10 bottom-0">{card.label}</p>
    </div>
  );
};

export default FourthSection;
