import profile from "../assets/profile.png";

export default function Navbar(props) {
  return (
    <div className="sticky top-0 z-50 flex justify-around gap-96 bg-[#200047]/80  py-2 backdrop-blur-md ">
      <div className="flex items-center gap-3">
        <img
          src={profile}
          alt="profile pic"
          className="pointer-events-none w-10"
        />
        <p className="select-none font-amatic text-3xl font-bold">
          {props.name}
        </p>
      </div>
      <ul className="flex items-center gap-10 ">
        <a href="#header">
          <li className="font-medium text-[#6865FF] transition-all duration-100">
            {props.first}
          </li>
        </a>
        <a href="#projects">
          <li className="transition-all duration-100 hover:text-[#6865FF]">
            {props.second}
          </li>
        </a>
        <a href="#contact">
          <button className="rounded-md bg-button px-3 py-1  font-medium transition-all duration-100 hover:bg-button/70">
            {props.third}
          </button>
        </a>
      </ul>
    </div>
  );
}
