import profile from "../assets/profile.png";

export default function Navbar(props) {
  return (
    <div className="flex bg-[#15002F] py-2 gap-96 justify-around sticky top-0 z-50 ">
      <div className="flex gap-3 items-center">
        <img src={profile} alt="profile pic" className="w-10 pointer-events-none" />
        <p className="font-amatic text-3xl font-bold select-none">{props.name}</p>
      </div>
      <ul className="flex gap-10 items-center ">
        <a href="#header"><li className="text-[#6865FF] font-medium transition-all duration-100">{props.first}</li></a>
        <a href="#projects"><li className="hover:text-[#6865FF] transition-all duration-100">{props.second}</li></a>
        <a href="#contact"><button className="bg-button hover:bg-button/70 transition-all duration-100  font-medium px-3 py-1 rounded-md">{props.third}</button></a>
      </ul>
    </div>
  );
}
