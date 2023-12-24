import { memo } from "react";

const Amoozesh = () => {
  return (
    <div className=" text-right mt-12 w-[90%] md:text-center md:w-[80%] lg:w-[70%] xl:w-[60%] ">
      <h2 className="text-xl mb-6 text-slate-900 isbold lg:text-2xl">
        آموزش مفید
      </h2>
      <div className="text-slate-600 mx-auto text-sm">
        <p className="lg:text-lg xl:text-xl ">
          سامانه آموزش کارگزاری مفید برای ارائه آموزش کاربردی و ساده به تمام
          سرمایه‌گذاران ایران به صورت کاملا رایگان و فراگیر راه‌اندازی شده است.
          کلاس‌های آنلاین روزانه، دوره‌های ویدیویی آموزشی و صدها مقاله در
          حوزه‌های مختلف بازار سرمایه، از جمله امکانات آموزشی این سامانه است.
        </p>
      </div>
    </div>
  );
};

export default memo(Amoozesh);
