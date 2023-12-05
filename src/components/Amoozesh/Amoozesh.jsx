import Classes from "./Classes";

const Amoozesh = () => {
  return (
    <div className="flex flex-col w-full items-center gap-16">
      <div className="flex flex-col gap-8 justify-center w-3/5">
        <div className="text-slate-900 mx-auto ">
          <h2 className="isbold text-3xl">آموزش مفید</h2>
        </div>
        <div className="text-slate-900 mx-auto">
          <p>
            سامانه آموزش کارگزاری مفید برای ارائه آموزش کاربردی و ساده به تمام
            سرمایه‌گذاران ایران به صورت کاملا رایگان و فراگیر راه‌اندازی شده
            است. کلاس‌های آنلاین روزانه، دوره‌های ویدیویی آموزشی و صدها مقاله در
            حوزه‌های مختلف بازار سرمایه، از جمله امکانات آموزشی این سامانه است.
          </p>
        </div>
      </div>
      <Classes />
    </div>
  );
};

export default Amoozesh;
