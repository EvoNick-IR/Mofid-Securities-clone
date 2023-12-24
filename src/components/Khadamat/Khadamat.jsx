import { Button_green, Button_nogreen, cardData } from "./services";
import Card from "./Card";
import { memo } from "react";

const Khadamat = () => {
  return (
    <div className=" isreg text-slate-300 text-base mt-10 gap-y-14 lg:gap-x-14 flex flex-col lg:flex-row mx-auto xl:justify-center xl:items-center max-w-[1140px]">
      <div className=" flex flex-col md:text-center lg:w-1/2 lg:text-right justify-center ">
        <h2 className="isbold text-white text-xl lg:text-2xl ">
          خدمات معاملات آنلاین
        </h2>
        <h3 className="lg:text-xl mt-3">معاملات اوراق بهادار</h3>
        <p className="text-sm isreg text-justify md:text-center mt-10 lg:text-base mb-6 lg:text-right">
          اگر علاقه‌مند به فعالیت و خرید و فروش سهام در بازار سرمایه هستید،
          کارگزاری مفید با ارائه خدمات متنوع در این حوزه مانند سامانه‌های
          معاملاتی حرفه‌ای، اعتبار معاملاتی، تخفیف کارمزد، پشتیبانی ۲۴ ساعته و…
          شما را در مسیر رسیدن به اهداف مالی مد نظرتان یاری می‌کند.
        </p>
        <div className="md:flex gap-6 justify-center md-w-1/2 lg:justify-start">
          <div className="my-3 ">
            <Button_green title="دریافت کد بورسی" />
          </div>
          <div className="my-3 ">
            <Button_nogreen title="اطلاعات بیشتر" />
          </div>
        </div>
      </div>
      <div className="w-[90%] grid grid-cols-2 gap-6 md:grid-cols-3 mx-auto text-center md:w-2/3  lg:w-2/3 xl:w-2/4 ">
        {cardData.map((item) => {
          return (
            <div key={"card" + item.id} className="col-span-1 mx-auto">
              <Card data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Khadamat);
