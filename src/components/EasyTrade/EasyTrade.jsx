import {
  easyTrade,
  rainbow_larg,
  hami,
  karmozd,
  Button_nogreen,
} from "./services";

const EasyTrade = () => {
  return (
    <div className="max-w-[1140px] w-full px-4 flex flex-col justify-center items-center mt-[128px] text-white">
      <div className="flex gap-4 mb-10">
        <div className="flex flex-col ismed gap-2 text-xs">
          <img src={rainbow_larg} alt="" className="w-[63px] h-[42px]" />
          <div className="flex ">
            <span className="isreg">Trader</span>
            <span className="isbold">Easy</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="isbold text-2xl">ایزی تریدر؛</h2>
          <h3 className="isreg text-base">ساده اما حرفه ای</h3>
        </div>
      </div>

      <img src={easyTrade} alt="" className="block w-full" />

      <div className="isreg text-slate-300 mt-2 flex flex-col items-center gap-2 lg:gap-6 md:flex-row md:justify-between md:w-[95%] ">
        <div className="md:w-4/5 lg:w-2/3">
          <p className="text-center text-sm md:text-right lg:text-lg">
            ایزی‌تریدر هم اکنون بیشترین تعداد کاربر را در میان سامانه‌های
            معاملاتی در بازار سرمایه کشور داراست. این نرم‌افزار با محیطی ساده،
            امکاناتی حرفه‌ای را در اختیار معامله‌گران قرار می‌دهد. ایزی‌تریدر در
            دو نسخه وب و موبایل قابل استفاده است.
          </p>
        </div>
        <div className="w-full md:w-1/5">
          <Button_nogreen title="اظلاعات بیشتر" />
        </div>
      </div>
      <div className="flex flex-wrap mt-16  items-end gap-10 text-base isreg text-slate-100 mb-16 justify-center lg:flex-nowrap lg:w-[85%] ">
        <div className="flex px-4 py-8 rounded-md gap-6 flex-col  bg-[#052840] md:w-1/2 lg:h-[270px]">
          <div className="flex gap-2  ">
            <img src={hami} alt="" />
            <div className="flex flex-col gap-2">
              <h2>طرح حامی</h2>
              <h3 className="text-sm">با حامی سرمایه شما بیکار نمی‌ماند</h3>
            </div>
          </div>
          <div className="isreg text-sm">
            <p>
              در طرح حامی برای مانده‌حساب بلااستفاده در حساب معاملاتی شما نزد
              کارگزاری، سود محاسبه شده و این سود ۲مرتبه در ماه (در نیمه ماه و
              پایان ماه) به قدرت خرید شما اضافه می‌شود.
            </p>
          </div>
          <div className="flex">
            <Button_nogreen title="اطلاعات بیشتر" />
          </div>
        </div>
        <div className="flex px-4 py-8 rounded-md gap-6 flex-col  bg-[#052840] md:w-1/2 lg:h-[270px]">
          <div className="flex gap-2 w-full ">
            <img src={karmozd} alt="" className="" />
            <div className="flex flex-col gap-2">
              <h2>تخفیف کارمزد</h2>
              <h3 className="text-sm">۲۵٪ تخفیف کارمزد معاملات</h3>
            </div>
          </div>
          <div className="isreg text-sm">
            <p>
              شما می‌توانید به اندازه ۲۵ درصد از کارمزد کارگزاری مفید بر روی
              تمام معاملات خود تخفیف دریافت کنید. تخفیف کارمزد معاملات یکی از
              پاداش‌های باشگاه مشتریان پلکان است.
            </p>
          </div>
          <div className="flex">
            <Button_nogreen title="اطلاعات بیشتر" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyTrade;
