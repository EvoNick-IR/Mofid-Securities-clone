import { useEffect, useState, memo } from "react";
import { arrowLeft } from "../News/services";

const Button_bg = (props) => {
  const { title } = props;
  const [btnTitle, setBtnTitle] = useState(title);

  useEffect(() => {
    setBtnTitle(title);
  }, [title]);
  return (
    <div className="text-[#00A796] gap-3  flex justify-center p-3 items-center whitespace-nowrap ismed text-sm border-solid border-[1px]  border-[#00A796]  transition-all duration-300 cursor-pointer rounded-md hover:bg-gray-700">
      <button type="button">{btnTitle}</button>
      <img src={arrowLeft} alt="" className="w-3  " />
    </div>
  );
};

export default memo(Button_bg);
