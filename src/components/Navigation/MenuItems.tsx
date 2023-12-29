import React from "react";
import { Variants, motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";

type MenuItemsProps = {
  isNavOpen: boolean;
};

export const menuVariants: Variants = {
  open: {
    clipPath: `circle(139.7% at 97% 1%)`,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    clipPath: `circle(0% at 88.6% 12.2%)`,
    transition: {
      duration: 0.5,
    },
  },
};

const MenuList = [
  "Benefits",
  "How to use",
  "How to purchase",
  "Reviews",
  "What’s in the kit",
  "Become a partner",
];

const MenuItems: React.FC<MenuItemsProps> = ({ isNavOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial={false}
      animate={isNavOpen ? "open" : "closed"}
      className="h-screen w-full fixed z-20 top-0 bg-[#37384c]"
    >
      <div className="h-[calc(100vh-8rem)] mt-[7.5rem]">
        {MenuList &&
          MenuList.map((el, i) => (
            <p
              key={i}
              className={`cursor-pointer text-white text-4xl text-center mt-6`}
            >
              {el}
            </p>
          ))}

        <section className="mt-20 flex justify-between items-center w-10/12 mx-auto">
          <p className="text-white">support@clingr.me</p>
          <div className="flex gap-8">
            <SlSocialVkontakte color="#fff" size={30} />{" "}
            <FaInstagram color="#fff" size={30} />
          </div>
        </section>
      </div>
    </motion.div>
  );
};
export default MenuItems;
