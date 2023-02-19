export default function Title(props) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-amatic text-5xl font-bold">{props.title}</span>
      <div className="bg-button w-20 h-2 mt-3 mb-32 rounded-lg"></div>
    </div>
  );
}
