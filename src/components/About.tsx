import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import circle from "../assets/circle.svg";
import Typewriter from "typewriter-effect";
import Technologies from "./ScrollingTechnologies";
import ScrollingTechnologies from "./ScrollingTechnologies";

export default function About() {
  const animations = {
    hidden: { opacity: 0, y: 100, clipPath: "inset(100% 0% 0% 0%)" },
    visible: { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" },
  };

  return (
    <>
      <div className=" flex flex-col justify-center gap-14 px-28 md:gap-20">
        <div className=" relative  mb-20 flex justify-center  gap-40 text-justify text-lg font-light md:text-xl">
          <div className="flex w-[18rem] flex-col gap-32 sm:w-[30rem] md:w-[33rem] md:gap-40 lg:w-1/2">
            <motion.p
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7 }}
              variants={animations}
              viewport={{ once: true }}
              className=" leading-relaxed "
            >
              I'm a junior{" "}
              <span className="font-medium text-[#7746ff] selection:text-black">
                Fullstack Developer
              </span>{" "}
              with a focus on{" "}
              <span className="font-medium text-[#7746ff] selection:text-black">
                HTML / CSS, React, NodeJs
              </span>{" "}
              <span className="font-medium text-[#7746ff] selection:text-black">
                and Python
              </span>
              . My goal is to create visually appealing and user-friendly
              websites. I have experience working on a variety of projects and
              I'm always looking to improve my skills. As a team player, I aim
              to deliver the best results for my clients. 
              <span className="font-medium text-[#a787ff] selection:text-black"> If you didn't notice, I like purple and animated elements. </span>
              Thank you for
              considering me for your project.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x:0 }}
              transition={{ duration: 2, type: "spring", bounce: 0.7}}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-start "
            >
              <div className="flex h-12 w-[33rem] items-center  justify-center rounded-lg border-4  border-x-0 border-t-0 border-gray-400 bg-[#3800D6] text-sm font-medium shadow-xl shadow-indigo-500 sm:text-lg md:absolute md:h-14 md:text-xl">
                <Typewriter
                  options={{
                    strings: [
                      "$grep -i “technologies” knowledge.txt",
                      "SELECT technologies FROM knowledge",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </motion.div>
          </div>

          <div className="group relative hidden h-64 lg:block">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              viewport={{ once: true }}
              className="w-65 absolute inset-0 z-30 h-64 rounded-full bg-indigo-600/40 transition-all duration-150 ease-in-out group-hover:bg-transparent"
            ></motion.div>
            <motion.img
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7 }}
              variants={animations}
              viewport={{ once: true }}
              src={profile}
              alt="profile image"
              className="relative z-20 h-full rounded-full "
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              variants={animations}
              viewport={{ once: true }}
              src={circle}
              alt="profile image"
              className="absolute inset-0 z-10 ml-8  mt-5 h-64 rounded-full transition-all duration-150 ease-in-out group-hover:ml-4 group-hover:mt-2"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          variants={animations}
          viewport={{ once: true }}
        >
          <ScrollingTechnologies />
        </motion.div>
      </div>
    </>
  );
}
