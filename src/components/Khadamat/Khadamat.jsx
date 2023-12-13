import { Button_green, Button_nogreen, cardData } from "./services";
import Card from "./Card";

const Khadamat = () => {
  return (
    <div className=" isreg text-slate-300 text-base mt-10 lg:flex lg:w-full xl:flex-wrap mx-auto">
      <div className=" bg-transparent flex flex-col gap-6 md:p-10 md:text-center  lg:text-right ">
        <h2 className="ismed text-white text-lg lg:text-2xl">
          خدمات معاملات آنلاین
        </h2>
        <h3 className="lg:text-xl">معاملات اوراق بهادار</h3>
        <p className="text-sm isreg text-justify mt-6 lg:text-base ">
          اگر علاقه‌مند به فعالیت و خرید و فروش سهام در بازار سرمایه هستید،
          کارگزاری مفید با ارائه خدمات متنوع در این حوزه مانند سامانه‌های
          معاملاتی حرفه‌ای، اعتبار معاملاتی، تخفیف کارمزد، پشتیبانی ۲۴ ساعته و…
          شما را در مسیر رسیدن به اهداف مالی مد نظرتان یاری می‌کند.
        </p>
        <div className="  gap-6 justify-center md:flex lg:block">
          <div className="my-3">
            <Button_green title="دریافت کد بورسی" />
          </div>
          <div className="my-3">
            <Button_nogreen title="اطلاعات بیشتر" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2  gap-6 md:grid-cols-3 w-[90%] mx-auto text-center mt-20 lg:mt-6 lg:w-[55%] xl:w-auto ">
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

export default Khadamat;
