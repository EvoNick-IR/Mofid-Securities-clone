import React, { useEffect, useState } from "react";
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
          return <img src={s} key={i} />;
        })}
      </div>
      <div
        id="sliderMidContainer"
        className="w-[82%] flex absolute top-[30%] h-[50%] justify-between"
      >
        <div className="bg-white gap-4 flex items-end flex-col  p-8 rounded-md shadow-md max-w-[536px] w-full md:w-[504px] md:h-[242px] xl:mx-0 xl:w-[270px] xl:h-auto xl:items-start ">
          <h3 className="ismed text-2xl text-[#004B69] leading-relaxed ">
            {titles.title}
          </h3>
          <p className="text-sm islight leading-relaxed">{titles.p}</p>
          <span className="ismed text-sm px-4 py-3 bg-[#004B69] rounded-md text-white hover:bg-[#00243C] ease-out cursor-pointer transition-all">
            {titles.bott}
          </span>
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
      <div className="w-full flex justify-center h-4 py-4 gap-2 items-center">
        {slides.map((s, i) => {
          return (
            <div
              key={"bullet" + i}
              className={`${
                i === pos ? "w-4 bg-[#004b69]" : "w-1 bg-[#11a699]"
              } h-1 bg-white rounded-full`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
