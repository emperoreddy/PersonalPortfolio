import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import profile from "../assets/profile.png";
import "../hamburgers.css";

export default function Navbar(props) {
  const [isActive, setIsActive] = useState(false);

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  };

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="sticky top-0 z-50 flex h-14 justify-between  bg-[#200047]/80 py-2 pl-5 backdrop-blur-md md:justify-around md:gap-72  md:px-0 lg:gap-96 "
      >
        <div className="flex items-center gap-3">
          <img
            src={profile}
            alt="profile pic"
            className="pointer-events-none w-8 md:w-10"
          />
          <p className="select-none font-amatic text-xl font-bold md:text-3xl">
            {props.name}
          </p>
        </div>
        <button
          className={`hamburger hamburger--squeeze  scale-50 self-center md:hidden ${
            isActive ? "is-active" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            setIsActive(!isActive);
          }}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <ul className="hidden items-center gap-10 md:flex">
          <a href="#header">
            <li className="font-medium text-[#6865FF] transition-all duration-100">
              {props.first}
            </li>
          </a>
          <a href="#projects">
            <li className="transition-all duration-100 hover:text-[#6865FF]">
              {props.second}
            </li>
          </a>
          <a href="#contact">
            <button className="rounded-md bg-button px-3 py-1  font-medium transition-all duration-100 hover:bg-button/70">
              {props.third}
            </button>
          </a>
        </ul>
      </motion.div>

      {/* DROPDOWN NAV */}

      <AnimatePresence>
        {isActive && (
          <motion.div
            className="fixed left-0 z-30 w-full rounded-md bg-[#200047]/80 px-6 text-white backdrop-blur-md transition-all duration-150 ease-in md:hidden md:w-auto  md:items-center"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "10rem", opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <motion.ul
              className="pt-2 pb-4 text-base md:flex md:justify-between md:pt-0"
              initial="hidden"
              animate="visible"
              variants={list}
            >
              <motion.li variants={item}>
                <a
                  className="block py-2 focus:text-[#6865FF] md:p-4"
                  href="#header"
                >
                  Home
                </a>
              </motion.li>
              <motion.li variants={item}>
                <a
                  className="block py-2 focus:text-[#6865FF]  md:p-4"
                  href="#projects"
                >
                  My work
                </a>
              </motion.li>

              <motion.li variants={item}>
                <a
                  className="block py-2 focus:text-[#6865FF]  md:p-4"
                  href="#contact"
                >
                  Contact
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
