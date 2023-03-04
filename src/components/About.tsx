import profile from "../assets/profile.png";
import circle from "../assets/circle.svg";
import Typewriter from "typewriter-effect";

export default function About() {
  return (
    <>
      <div className=" flex flex-col justify-center gap-20 px-28">
        <div className=" relative  flex justify-center gap-40  text-justify text-xl font-light">
          <div className="flex w-1/2 flex-col gap-40">
            <p className=" leading-relaxed ">
              I'm a junior{" "}
              <span className="font-medium text-[#7746ff] selection:text-black">
                Fullstack Developer
              </span>{" "}
              with a focus on{" "}
              <span className="font-medium text-[#7746ff] selection:text-black">
                HTML, CSS, JavaScript,
              </span>{" "}
              <span className="font-medium text-[#7746ff] selection:text-black">
                and Python
              </span>
              . My goal is to create visually appealing and user-friendly
              websites. I have experience working on a variety of projects and
              I'm always looking to improve my skills. As a team player, I aim
              to deliver the best results for my clients. Thank you for
              considering me for your project.
            </p>

            <div className="flex justify-start ">
              <div className="flex h-12 w-[33rem] items-center justify-center rounded-lg bg-[#3800D6] font-medium">
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
            </div>
          </div>

          <div className="group relative h-64">
            <div className="w-65 absolute inset-0 z-30 h-64 rounded-full bg-indigo-600/40 transition-all duration-150 ease-in-out group-hover:bg-transparent"></div>
            <img
              src={profile}
              alt="profile image"
              className="relative z-20 h-full rounded-full "
            />
            <img
              src={circle}
              alt="profile image"
              className="absolute inset-0 z-10 ml-8  mt-5 h-64 rounded-full transition-all duration-150 ease-in-out group-hover:ml-4 group-hover:mt-2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
