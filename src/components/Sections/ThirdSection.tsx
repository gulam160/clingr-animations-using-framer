import { thirdSectionData } from "@/Constants/ThirdSectionData";
import Lenis from "@studio-freight/lenis";
import { MotionValue, motion, useScroll } from "framer-motion";
import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";

interface ThirdSectionCardProps {
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  id: number;
  Icon: any;
  title: string;
  description: string;
  image: string;
  i: number;
}

const ThirdSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <main ref={containerRef} className="relative">
      {thirdSectionData.map((el, i) => {
        const targetScale = 1 - (thirdSectionData.length - i) * 0.05;
        return (
          <ThirdSectionCard
            key={`card-${el.id}`}
            i={i}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
            Icon={el.icon}
            description={el.description}
            id={el.id}
            image={el.image}
            title={el.title}
          />
        );
      })}
    </main>
  );
};

const ThirdSectionCard: React.FC<ThirdSectionCardProps> = ({
  id,
  description,
  Icon,
  image,
  title,
  i,
}) => {
  const container = useRef<null>(null);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          top: `calc(-0.1vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          className="z-20 h-40 w-40 bg-[#f3f4f6] rounded-md flex flex-col sm:hidden justify-between"
        >
          <p className="text-gray-500 text-3xl font-serif p-2">0{id}</p>
          <p className="text-gray-500 text-end p-2">
            /0{thirdSectionData.length}
          </p>
        </div>
        <div className="border-b flex sm:flex-col gap-6 bg-white">
          <div className="w-1/2 sm:w-full p-10 h-screen flex flex-col items-center">
            <p className="border-[1.5px] border-gray-500 w-fit rounded-full p-2 mt-20">
              <Icon size={30} color={"#38394d"} />
            </p>
            <div className="w-[80%] h-full flex flex-col justify-around">
              <div>
                <p className="h-[0.5px] bg-gray-400 my-10"></p>
                <h1 className="text-3xl text-gray-600 font-serif font-extralight text-center">
                  {title}
                </h1>
              </div>
              <p className="text-center text-gray-500">{description}</p>
            </div>
          </div>
          <div className="w-1/2 sm:w-full h-screen sm:hidden">
            <img src={image} alt={title} className="h-full w-full" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThirdSection;
