import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import clingrXs from "@/assets/Description/clingr-xs.webp";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiHotSurface } from "react-icons/gi";
import { Variants, motion } from "framer-motion";

interface SecondSectionProps {}

export const slideUpFromBottom: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  closed: { opacity: 0, y: "12vw" },
};

const SecondSection: React.FC<SecondSectionProps> = () => {
  const [percentage, setParcentage] = useState(0);
  const [outerParallaxSize, setOuterParallaxSize] = useState({
    width: "100%",
  });

  useEffect(() => {
    const newOuterSize = { width: `${percentage * window.innerWidth - 17}px` };

    percentage == 1
      ? setOuterParallaxSize({ width: "100%" })
      : setOuterParallaxSize(newOuterSize);
  }, [percentage]);

  return (
    <Parallax
      strength={600}
      style={{
        width: outerParallaxSize.width,
      }}
      className="h-screen border mx-auto bg-[#f3f4f6] flex items-center rounded-lg"
      renderLayer={(percentage) => {
        const imageSize = percentage * 500;
        setParcentage(percentage);
        return (
          <div
            style={{
              position: "absolute",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1pxrgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              width: imageSize,
              height: imageSize,
            }}
          >
            <img src={clingrXs.src} alt="cliger-description" />
          </div>
        );
      }}
    >
      <motion.div
        variants={slideUpFromBottom}
        initial={false}
        animate={percentage == 1 ? "open" : "closed"}
        style={{
          width: outerParallaxSize.width,
          height: "100vh",
        }}
        className="relative"
      >
        <section className="flex justify-between mx-auto p-12 sm:p-5">
          <div className="w-1/2 sm:w-full">
            <p className="text-[#38394d] text-3xl font-serif font-extralight">
              An innovative hair dryer clip that frees both hands.With it,you
              can get an impeccable hair style in just 10 minutes.
            </p>
          </div>
          <div className="bg-[#37384c] h-fit w-14 rounded-full flex flex-col items-center px-4 py-2 absolute top-4 right-4">
            <MdOutlineShoppingBag color="#fff" size={30} />
            <p className="text-white">Buy</p>
          </div>
        </section>

        <section
          style={{
            width: outerParallaxSize.width,
          }}
          className="flex sm:flex-col sm:gap-y-4 justify-between mx-auto p-12 sm:p-5 absolute bottom-1"
        >
          <div className="flex flex-col justify-center items-center">
            <p className="border-[1.5px] border-gray-400 p-2 rounded-full">
              <GiHotSurface size={20} color={"#38394d"} />
            </p>
            <p className="text-[#38394d] text-sm">For any surface</p>
          </div>
          <div className="w-1/3 sm:w-full">
            <p className="text-[#38394d] text-sm">
              On any surface. Anywhere: at home, at the gym or any where else.
              Simply clip on a Clingr and style your hair like in a salon,
              keeping the natural beauty of your hair.
            </p>
          </div>
        </section>
      </motion.div>
    </Parallax>
  );
};

export default SecondSection;
