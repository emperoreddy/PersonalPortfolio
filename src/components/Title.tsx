import { motion } from "framer-motion";

export default function Title(props) {
  const animations = {
    hidden: { opacity: 0, y: 100, clipPath: "inset(100% 0% 0% 0%)" },
    visible: { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.7 }}
      viewport={{once:true}}
      variants={animations}
      className="flex flex-col items-center"
    >
      <span className="font-amatic text-4xl font-bold md:text-5xl">
        {props.title}
      </span>
      <div className="mt-3 mb-20 h-2 w-16 rounded-lg bg-button md:mb-32 md:w-20"></div>
    </motion.div>
  );
}
