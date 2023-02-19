import { motion } from "framer-motion";

export default function Project(props) {
  const className = `${
    props.color === "purple"
      ? "from-purple-500/60 to-blue-500/60"
      : "from-indigo-500/70 to-pink-500/70"
  } ${props.right === true ? "justify-end" : "justify-start"}`;

  return (
    <div className={`flex ${className}`}>
      <div className="absolute h-96 w-96    animate-spin-slow rounded-full bg-gradient-to-tr blur-3xl"></div>
      <div className="z-10 mx-8 mt-10 flex h-72 w-80 flex-col gap-3 overflow-hidden rounded-xl bg-[#0F006C] p-4">
        <div
          className="h-1/2 rounded-t-sm bg-cover bg-center "
          style={{ backgroundImage: `url(${props.mockup})` }}
        ></div>

        <div className="h-1/2 rounded-b-sm w-full bg-gradient-to-br from-button to-[#4100AC]/40 shadow-xl">
        <div className="flex flex-col px-5 py-3 gap-3">
          <p className="font-semibold">{props.title}</p>
          <p className="text-sm font-light">{props.description}</p>
          <button className="flex justify-start text-sm font-medium">See website</button>
        </div>
        </div>
      </div>
    </div>
  );
}
