import { useEffect, useState, memo } from "react";
import { arrowLeft } from "../News/services";

const Button_bg = (props) => {
  const { title } = props;
  const [btnTitle, setBtnTitle] = useState(title);

  useEffect(() => {
    setBtnTitle(title);
  }, [title]);
  return (
    <div className="text-[#004B69] gap-3  flex justify-center py-3 px-8 items-center ismed text-sm border-solid border-[1px]  border-[#004B69]  transition-all duration-300 cursor-pointer rounded-md hover:bg-[#D0D8DD]">
      <button type="button">{btnTitle}</button>
      <img src={arrowLeft} alt="" className="w-3 " />
    </div>
  );
};

export default memo(Button_bg);
