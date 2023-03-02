import profile from "../assets/profile.png";
import circle from "../assets/circle.svg";

export default function About() {
  return (
    <>
      <div className="items-start gap-20 mx-auto flex flex-col justify-center px-28">
        <div className=" relative  flex justify-center gap-40  text-justify text-xl font-light">
          <p className="w-1/2 leading-relaxed  ">
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
            websites. I have experience working on a variety of projects and I'm
            always looking to improve my skills. As a team player, I aim to
            deliver the best results for my clients. Thank you for considering
            me for your project.
          </p>

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

        <div className="h-10 w-2/5 bg-[#3800D6] flex justify-center ">helo</div>
      </div>
    </>
  );
}
