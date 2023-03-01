import profile from "../assets/profile.png";
import circle from "../assets/circle.svg";

export default function About() {
  return (
    <>
      <div className=" relative mx-auto flex justify-center gap-40 px-28 text-justify text-xl font-light">
        <p className="w-[50%] leading-relaxed  ">
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
          . My goal is to create visually appealing and user-friendly websites.
          I have experience working on a variety of projects and I'm always
          looking to improve my skills. As a team player, I aim to deliver the
          best results for my clients. Thank you for considering me for your
          project.
        </p>

        <div className="relative h-64 group">
          <div className="bg-indigo-600/40 absolute inset-0 w-65 h-64 rounded-full z-30 group-hover:bg-transparent transition-all duration-150 ease-in-out"></div>
          <img
            src={profile}
            alt="profile image"
            className="z-20 h-full rounded-full relative "
          />
          <img
            src={circle}
            alt="profile image"
            className="absolute inset-0 z-10 ml-8  mt-5 h-64 rounded-full group-hover:ml-4 group-hover:mt-2 transition-all duration-150 ease-in-out"
          />
        </div>
      </div>
    </>
  );
}
