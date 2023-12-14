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
      <div className="overflow-hidden flex flex-col justify-center items-center relative">
        <div
          className="flex transition ease-out duration-500 h-[calc(75vw)] lg:h-[calc(45vw)] "
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
        <div className="py-8 w-full  z-20 -mt-12 md:-mt-28 ">
          <div className="bg-white gap-4 items-center relative flex mx-auto text-center flex-col w-[90%]  p-4 rounded-md shadow-md max-w-[536px]  md:w-[504px] md:h-[242px]  xl:w-[270px] xl:h-auto xl:min-h-[250px] xl:items-start xl:justify-end xl:text-start xl:absolute xl:bottom-16 xl:right-36 xl:p-10  ">
            <div className="w-full md:hidden flex justify-center h-4 py-4 gap-2 items-center ">
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
            <div className="text-white flex justify-center items-center gap-2 p-3 w-fit ismed text-sm bg-[#004B69] rounded-md transition-all duration-300 cursor-pointer hover:bg-[#00243C]">
              <button type="Button" className="block">
                {titles.bott}
              </button>
            </div>
            <div className="w-full hidden md:mb-2 md:flex xl:hidden justify-center h-4 py-4 gap-2 items-center ">
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
            <div className="hidden bg-transparent absolute md:flex md:justify-between md:w-[130%] xl:bottom-0 xl:w-32 xl:right-[900px]">
              <img src={next} alt="" className="w-12" onClick={rightBtn} />
              <img src={prev} alt="" className="w-12" onClick={leftBtn} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full hidden xl:flex justify-center h-4 py-4 gap-2 items-center z-10 absolute -bottom-8">
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
