import profile from "../assets/profile.png";

export default function Navbar(props) {
  return (
    <div className="flex bg-[#15002F] py-2 gap-96 justify-around ">
      <div className="flex gap-3 items-center">
        <img src={profile} alt="profile pic" className="w-10 pointer-events-none" />
        <p className="font-amatic text-3xl font-bold select-none">{props.name}</p>
      </div>
      <ul className="flex gap-10 items-center ">
        <a href=""><li className="text-[#6865FF] font-medium">{props.first}</li></a>
        <a href=""><li>{props.second}</li></a>
        <button className="bg-button font-medium px-3 py-1 rounded-md">{props.third}</button>
      </ul>
    </div>
  );
}
