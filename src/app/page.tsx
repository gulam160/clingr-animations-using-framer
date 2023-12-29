"use client";
import landingImageMD from "@/assets/Intro/intro-background-lg.webp";
import landingImageSM from "@/assets/Intro/intro-background-small.webp";
import landingImageLG from "@/assets/Intro/intro-background.webp";
import MenuItems from "@/components/Navigation/MenuItems";
import SecondSection from "@/components/Sections/SecondSection";
import ThirdSection from "@/components/Sections/ThirdSection";
import { motion, useCycle } from "framer-motion";
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FiCornerLeftDown } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { Parallax } from "react-parallax";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [tablet, setIsTablet] = useState(false);
  const [isNavOpen, toggleNavOpen] = useCycle(false, true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        window.matchMedia("(min-width: 320px) and (max-width: 480px)").matches
      );
      setIsTablet(
        window.matchMedia("(min-width: 601px) and (max-width: 1067px)").matches
      );
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="relative">
      <Parallax
        strength={600}
        bgImage={
          isMobile
            ? landingImageSM.src
            : tablet
            ? landingImageMD.src
            : landingImageLG.src
        }
        bgImageAlt="landing"
        className="h-screen"
      >
        <div className="h-screen flex flex-col justify-between">
          <section className="mt-6 w-full">
            <div className="h-20 mt-2 flex justify-between items-center px-32 sm:px-6">
              <p className="text-white text-2xl relative z-30">Clingr ®</p>
              <div className="flex items-center gap-14 sm:gap-5">
                <p className="border-[1.5px] text-white px-6 py-1.5 rounded-[100%] relative z-30">
                  Buy
                </p>
                <div className="relative z-30" onClick={() => toggleNavOpen()}>
                  {isNavOpen ? (
                    <IoCloseOutline size={32} color={"#fff"} />
                  ) : (
                    <CiMenuFries size={30} color={"#fff"} />
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className="relative">
            <motion.div
              initial={{ opacity: 0, y: "-12vw" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="w-1/2 sm:w-full mx-auto"
            >
              <p className="text-center text-[80px] sm:text-[50px] text-white font-light">
                Beautiful hair?
              </p>
              <p className="-mt-12 sm:-mt-8 text-center text-[80px] sm:text-[50px] text-white font-light">
                It is easy and
              </p>
              <p className="-mt-12 sm:-mt-8 text-center text-[80px] sm:text-[50px] text-white font-light">
                wonderful!
              </p>
            </motion.div>
            <div className="w-60 rounded-md z-10 absolute top-[180px] right-56 lg:right-10 sm:top-[150px] sm:right-8">
              <iframe
                src="https://player.vimeo.com/video/724439058?title=0&byline=0&portrait=0&muted=1&autoplay=1&pip=0&controls=0&loop=1&background=1"
                className="w-full box-border rounded-md"
              ></iframe>
            </div>
          </section>
          <section className="px-32 sm:px-6 my-20">
            <button
              className="border border-white rounded-full p-1"
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
            >
              <FiCornerLeftDown size={20} color="#fff" />
            </button>
          </section>
        </div>
        <MenuItems isNavOpen={isNavOpen} />
      </Parallax>
      <ThirdSection />
      <SecondSection />
    </main>
  );
}
