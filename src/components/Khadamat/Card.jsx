const Card = (props) => {
  const item = props.data;
  return (
    <div className="flex flex-col gap-3 items-center justify-start bg-[#052840] h-[170px] p-2 w-36 rounded-md">
      <div className=" flex justify-center rounded-full w-20 h-20 bg-[#00334D]">
        <img src={item.pic} alt={item.title} className="w-8" />
      </div>
      <div>
        <span className="text-sm ismed">{item.title}</span>
      </div>
    </div>
  );
};

export default Card;
