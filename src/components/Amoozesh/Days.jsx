const Days = (props) => {
  return (
    <div className="flex w-2/3 flex-col gap-1 p-4 border-r-2">
      <div className="flex justify-center text-xl">
        <span className="">{props.day}</span>
      </div>
      <div className="flex justify-start ">
        <span>{props.tarikh}</span>
      </div>
    </div>
  );
};

export default Days;
