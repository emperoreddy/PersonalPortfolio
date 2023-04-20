import { motion } from "framer-motion";
import Nav from "./components/Navbar";
import fumes from "./assets/fumes.png";
import Title from "./components/Title";
import Project from "./components/Project";
import firstDesign from "./assets/firstDesign.png";
import Buttons2 from "./components/Button";
import Hire from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Info from "./project-info";
import AnimatedCursor from "react-animated-cursor";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const animations = {
    hidden: { opacity: 0, y: 100, clipPath: "inset(100% 0% 0% 0%)" },
    visible: { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" },
  };

  return (
    <div className="app relative h-screen  w-screen overflow-x-hidden  scroll-smooth  bg-black/95 bg-cover bg-center font-poppins text-white selection:bg-indigo-500">
      <div className="max-md:hidden">
        <AnimatedCursor
          color="255,255,255"
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={0}
          outerStyle={{
            border: "3px solid #6c00ff",
          }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      </div>

      <Nav first="Home" second="My work" third="Hire me" name="Bogdan A." />

      <div className="pointer-events-none absolute z-0 w-full overflow-x-hidden">
        <img src={fumes} alt="fumes bg" className="h-full w-full" />
      </div>

      {/* WRAPPER */}
      <div className="mx-auto max-w-screen-2xl">
        <header
          className="relative z-10 -mt-12 flex flex-col items-center gap-10 md:mt-auto"
          id="header"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="mx-auto mt-40 flex w-auto justify-center bg-gradient-to-r from-[#4200FF] via-pink-500 to-[#d30fff]  bg-clip-text font-amatic text-8xl font-bold text-transparent selection:text-black md:text-9xl"
          >
            Web Wizard
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="mb-5 font-amatic text-2xl md:mb-10 md:text-5xl "
          >
            Transforming Ideas into Interactive Experiences
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              delay: 2,
              type: "spring",
              bounce: 0.5,
            }}
          >
            <Buttons2 />
          </motion.div>
        </header>

        <section className="mt-72" id="about">
          <Title title="$whoami" />
          <About />
        </section>

        <section className="mx-auto  mt-52 px-9 md:px-60" id="projects">
          <Title title="My projects" />
          <div className="flex flex-col gap-20">
            {Info.map((info) => {
              return (
                <Project
                  key={info.title}
                  mockup={info.mockup}
                  color={info.color}
                  right={info.right}
                  title={info.title}
                  description={info.description}
                  link={info.link}
                />
              );
            })}
          </div>
        </section>

        <section className="mt-52 mb-14 md:mb-20" id="contact">
          <Title title="Hire me" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Hire />
          </motion.div>
        </section>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
