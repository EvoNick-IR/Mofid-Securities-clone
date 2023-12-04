import { useEffect, useState, memo } from "react";

const Button_bg = (props) => {
  const { title } = props;
  const [btnTitle, setBtnTitle] = useState(title);

  useEffect(() => {
    setBtnTitle(title);
  }, [title]);
  return (
    <div className="text-[#004B69] flex justify-center p-3 ismed text-sm border-solid border-[1px]  border-[#004B69]  transition-all duration-300 cursor-pointer rounded-md hover:opacity-80">
      <button type="button">{btnTitle}</button>
    </div>
  );
};

export default memo(Button_bg);
