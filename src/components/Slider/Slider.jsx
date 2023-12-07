import { useEffect, useState, memo } from "react";
import { next, prev, slides, boxTitles } from "./services";

const Slider = () => {
  const [pos, setpos] = useState(0);
  const [titles, setTitles] = useState(boxTitles[0]);

  function leftBtn() {
    if (pos === 0) setpos(3);
    else setpos(pos - 1);
  }
  function rightBtn() {
    if (pos === 3) setpos(0);
    else setpos(pos + 1);
  }

  useEffect(() => {
    let interval = setInterval(() => {
      rightBtn();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  });
  useEffect(() => {
    setTitles(boxTitles[pos]);
  }, [pos]);
  return (
    <div className="overflow-hidden flex flex-col justify-center relative items-center">
      <div
        className="flex transition ease-out duration-500"
        style={{ transform: `translateX(${pos * 100}%)` }}
      >
        {slides.map((s, i) => {
          return <img src={s} key={"sliderImg" + i} />;
        })}
      </div>
      <div
        id="sliderMidContainer"
        className="w-[82%] flex absolute top-[30%] h-[50%] justify-between"
      >
        <div className="bg-white gap-4 flex justify-end flex-col  p-8 rounded-md shadow-md max-w-[536px] w-full md:w-[504px] md:h-[242px] xl:mx-0 xl:w-[270px] xl:h-auto xl:items-start ">
          <h3 className="ismed text-2xl text-[#004B69] leading-relaxed ">
            {titles.title}
          </h3>
          <p className="text-sm islight leading-relaxed">{titles.p}</p>
          <div className="text-white flex justify-center p-3 ismed text-sm bg-[#004B69] rounded-md transition-all duration-300 cursor-pointer hover:bg-[#00243C]">
            <button type="Button">{titles.bott}</button>
          </div>
        </div>
        <div className="flex justify-end items-end gap-4">
          <div className="flex justify-center items-center ">
            <img
              src={next}
              alt=""
              className="w-[100%] shadow-md cursor-pointer"
              onClick={rightBtn}
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={prev}
              alt=""
              className="w-[100%] shadow-md cursor-pointer"
              onClick={leftBtn}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center h-4 py-4 gap-2 items-center z-10">
        {slides.map((s, i) => {
          return (
            <div
              key={"bullet" + i}
              className={`${
                i === pos ? "w-4 bg-[#004b69]" : "w-1 bg-[#11a699]"
              } h-1 rounded-full`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Slider);
