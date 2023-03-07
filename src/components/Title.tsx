export default function Title(props) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-amatic text-4xl md:text-5xl font-bold">{props.title}</span>
      <div className="bg-button w-16 md:w-20 h-2 mt-3 mb-20 md:mb-32 rounded-lg"></div>
    </div>
  );
}
