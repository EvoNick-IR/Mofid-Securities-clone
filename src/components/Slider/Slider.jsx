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
    <div className="relative">
      <div className="overflow-hidden flex flex-col justify-center items-center">
        <div
          className="flex transition ease-out duration-500 h-[calc(75vw)] lg:h-[calc(42vw)] "
          style={{ transform: `translateX(${pos * 100}%)` }}
        >
          {slides.map((s, i) => {
            return (
              <img
                src={s}
                key={"sliderImg" + i}
                className="w-full h-auto object-cover"
              />
            );
          })}
        </div>
        <div className="py-8 w-full  z-20 -mt-12 ">
          <div className="bg-white gap-4 flex mx-auto text-center justify-end flex-col w-[90%]  p-4 rounded-md shadow-md max-w-[536px]  md:w-[504px] md:h-[242px] xl:mx-0 xl:w-[270px] xl:h-auto xl:items-start ">
            <div className="w-full flex justify-center h-4 py-4 gap-2 items-center ">
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
            <h3 className="ismed text-2xl text-[#004B69] leading-relaxed ">
              {titles.title}
            </h3>
            <p className="text-sm islight leading-relaxed">{titles.p}</p>
            <div className="text-white flex justify-center p-3 ismed text-sm bg-[#004B69] rounded-md transition-all duration-300 cursor-pointer hover:bg-[#00243C]">
              <button type="Button">{titles.bott}</button>
            </div>
          </div>
        </div>

        <div className="justify-end items-end gap-4 hidden md:flex">
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
      <div className="w-full hidden lg:flex justify-center h-4 py-4 gap-2 items-center z-10 absolute -bottom-8">
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
