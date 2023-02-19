import { motion } from "framer-motion";
import { useState } from "react";

export default function Button() {
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave= () => {
    setShowPopup(false);
  };

  return (
    <div className="relative flex justify-center">
      <div className="absolute -z-10 h-10 w-28 animate-pulse bg-purple-500 blur-lg transition-all duration-100  ease-in-out"></div>
      {showPopup && (
        <motion.div
        initial={{opacity:0, scale: 0.8}} 
        animate={{opacity:1, scale:1}}
        exit={{opacity:0, scale: 0.8}}
        transition={{duration:0.5}}
        >
          <p className="absolute mt-10  bg-button text-center indent-1 text-xl leading-relaxed ">
            Hi there! I'm a junior frontend developer with a focus on HTML, CSS,
            JavaScript, and Python. My goal is to create visually appealing and
            user-friendly websites. I have experience working on a variety of
            projects and am always looking to improve my skills. As a team
            player, I aim to deliver the best results for my clients. Thank you
            for considering me for your project.
          </p>
        </motion.div>
      )}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="rounded-xl bg-button px-5 py-1 font-amatic text-3xl font-bold"
        >
          ABOUT ME
        </button>
      </motion.div>
    </div>
  );
}
