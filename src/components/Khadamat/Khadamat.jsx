import { Button_green, Button_nogreen, cardData } from "./services";
import Card from "./Card";

const Khadamat = () => {
  return (
    <div className="max-w-[1140px] ">
      <div className=" isreg text-slate-300 text-base mt-14 flex flex-wrap justify-between">
        <div className=" bg-transparent flex flex-col gap-6">
          <h2 className="ismed text-white text-lg">خدمات معاملات آنلاین</h2>
          <h3>معاملات اوراق بهادار</h3>
          <p className="text-sm isreg">
            اگر علاقه‌مند به فعالیت و خرید و فروش سهام در بازار سرمایه هستید،
            کارگزاری مفید با ارائه خدمات متنوع در این حوزه مانند سامانه‌های
            معاملاتی حرفه‌ای، اعتبار معاملاتی، تخفیف کارمزد، پشتیبانی ۲۴ ساعته
            و… شما را در مسیر رسیدن به اهداف مالی مد نظرتان یاری می‌کند.
          </p>
          <div className=" flex gap-6 justify-start ">
            <Button_green title="دریافت کد بورسی" />
            <Button_nogreen title="اطلاعات بیشتر" />
          </div>
        </div>
        <div className="flex flex-wrap gap-[4%] text-center">
          {cardData.map((item) => {
            return (
              <div key={"card" + item.id} className="col-span-1 ">
                <Card data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Khadamat;
