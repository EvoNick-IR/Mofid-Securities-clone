import { Button_noblue } from "./services";
import Days from "./Days";

const Classes = () => {
  return (
    <div className="bg-[#F8F9FA] w-full flex flex-nowrap justify-between rounded-md p-8 text-slate-800">
      <div className="flex flex-col items-start w-4/12 pl-6 gap-10 ">
        <div className="flex flex-col gap-10">
          <h2 className="isbold text-2xl">کلاس‌های آموزشی روزانه رایگان</h2>
          <p className=" text-slate-700">
            کارگزاری مفید روزانه با برگزاری ۳ کلاس مرتبط با موضوعات تخصصی بازار
            سرمایه به صورت آنلاین و رایگان، در تلاش است تا سرمایه‌گذاران را در
            راستای تحقق اهداف مالی خود یاری کند.
          </p>
        </div>
        <div className="flex">
          <Button_noblue title="آرشیو رویدادهای آموزشی" />
        </div>
      </div>
      <div className="flex flex-col items-center  w-2/12 gap-10 pr-6">
        <Days day="شنبه" tarikh="11 آذر" />
        <Days day="یکشنبه" tarikh="12 آذر" />
        <Days day="دوشنبه" tarikh="13 آذر" />
        <Days day="سشنبه" tarikh="14 آذر" />
        <Days day="چهارشنبه" tarikh="15 آذر" />
      </div>
      <div className="flex items-start  w-6/12"></div>
    </div>
  );
};

export default Classes;
