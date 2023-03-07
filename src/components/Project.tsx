import { motion } from "framer-motion";
import "../Button.css";

export default function Project(props) {
  const className = `${
    props.color === "purple"
      ? "from-purple-500/60 to-blue-500/60"
      : "from-indigo-500/70 to-pink-500/70"
  } ${props.right === true ? "justify-end" : "justify-start"}`;

  const animate = `${
    props.right ? 200 : -200
  }`

  return (
    <div className={`flex ${className}`}>
      <div className="absolute h-96 w-96  animate-spin-slow rounded-full bg-gradient-to-tr blur-3xl"></div>
      <motion.div
        initial={{ opacity: 0, x: `${animate}` }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 0.5 , type:"spring", bounce:0.5}}
        viewport={{ once: true }}
        className="box z-10 mt-10 flex h-80   w-80  flex-col gap-3 overflow-hidden rounded-xl bg-[#0F006C] p-4 lg:mx-8 "
      >
        <div
          className="h-1/2 rounded-t-sm bg-cover bg-center "
          style={{ backgroundImage: `url(${props.mockup})` }}
        ></div>

        <div className="w-full flex-1 rounded-b-sm bg-gradient-to-br from-button to-[#4100AC]/40 shadow-xl">
          <div className="flex flex-col items-start  gap-4 px-5 py-3 ">
            <p className="font-semibold">{props.title}</p>
            <p className="text-sm font-light">{props.description}</p>
            <a href={props.link}>
              <button className="cssbuttons-io-button bg-gradient-to-br from-[#00c8ff] to-[#00C6FF]/80 text-xs font-medium text-black">
                See Website
                <div className="icon">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
