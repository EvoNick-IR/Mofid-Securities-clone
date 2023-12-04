import { useEffect, useState, memo } from "react";

const Button_bg = (props) => {
  const { bg, hover, title, color } = props;

  const [btnBg, setBtnBg] = useState(bg);
  const [btnHover, setBtnHover] = useState(hover);
  const [btnTitle, setBtnTitle] = useState(title);
  const [btnColor, setBtnColor] = useState(color);

  console.log(btnBg);
  useEffect(() => {
    setBtnBg(bg);
    setBtnHover(hover);
    setBtnColor(color);
  }, []);
  useEffect(() => {
    setBtnTitle(title);
  }, [title]);
  return (
    <button
      type="button"
      className={`ismed text-sm px-4 py-3 bg-[${
        btnBg ? btnBg : bg
      }]  rounded-md text-${btnColor} hover:${
        hover ? `bg-[${btnHover}]` : "opacity-80"
      } ease-out cursor-pointer transition-all`}
    >
      {btnTitle}
    </button>
  );
};

export default memo(Button_bg);
