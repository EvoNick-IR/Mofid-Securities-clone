import {
  Slider,
  Info,
  News,
  Sabad,
  Mazaya,
  Khadamat,
  EasyTrade,
  Archive,
} from "./Services";

const Home = () => {
  return (
    <div className="ismed box-border w-full">
      <div id="carousel" className="w-full m-auto  ">
        <Slider />
      </div>
      <section className=" w-[90%]  flex flex-wrap  gap-24 mt-12 md:mt-1 md:w-2/3 xl:w-auto mx-auto max-w-[1140px] xl:flex-nowrap xl:mt-32">
        <Info />
        <News />
      </section>
      <section className=" w-[90%] flex flex-wrap  gap-x-20 mt-[128px] mx-auto max-w-[1140px] md:flex-nowrap ">
        <Sabad />
        <Mazaya />
      </section>
      <section className="flex flex-col items-center p-4 lg:p-16  justify-center mt-12 bg-[#00243C] ">
        <Khadamat />
        <EasyTrade />
      </section>
      <section className="my-[64px] sm:my-[76px] lg:my-[96px] container mx-auto flex flex-col !mb-0 w-[90%] md:text-center">
        <h2 className="mb-6 font-bold lg:text-xl text-slate-800">آموزش مفید</h2>
        <p className="max-w-2xl mb-20 text-slate-600 text-sm lg:text-base md:text-center mx-auto">
          سامانه آموزش کارگزاری مفید برای ارائه آموزش کاربردی و ساده به تمام
          سرمایه‌گذاران ایران به صورت کاملا رایگان و فراگیر راه‌اندازی شده است.
          کلاس‌های آنلاین روزانه، دوره‌های ویدیویی آموزشی و صدها مقاله در
          حوزه‌های مختلف بازار سرمایه، از جمله امکانات آموزشی این سامانه است.
        </p>
      </section>
      <section className="my-[64px] sm:my-[76px] lg:my-[96px] bg-[#F8F9FA] container mx-auto !p-8 !mt-0 bg-m-neutral-00 rounded-md grid grid-cols-12 gap-5 ">
        <Archive />
      </section>
    </div>
  );
};

export default Home;
