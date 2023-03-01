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

function App() {
  return (
    <div className="relative h-screen w-screen selection:bg-indigo-500  overflow-x-hidden  scroll-smooth bg-black/95 bg-cover bg-center font-poppins text-white">
      <AnimatedCursor
        // color="	0, 196, 255"
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
      <Nav first="Home" second="My work" third="Hire me" name="Bogdan A." />

      <div className="pointer-events-none absolute z-0 w-full overflow-x-hidden">
        <img src={fumes} alt="fumes " className="h-full w-full" />
      </div>
      <header
        className="relative z-10 flex flex-col items-center gap-10"
        id="header"
      >
        <h1 className="mx-auto selection:text-black mt-40 flex w-auto justify-center bg-gradient-to-r from-[#4200FF] via-pink-500  to-[#d30fff] bg-clip-text font-amatic text-9xl font-bold text-transparent">
          Web Wizard
        </h1>
        <h2 className="mb-10 font-amatic text-5xl ">
          Transforming Ideas into Interactive Experiences
        </h2>

        <Buttons2 />
      </header>

      <section className="mt-80">
        <Title title="whoami" />
        <About />
      </section>

      <section className="mx-auto  mt-52 px-60" id="projects">
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

      <section className="mt-52 mb-20" id="contact">
        <Title title="Hire me" />
        <Hire />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
