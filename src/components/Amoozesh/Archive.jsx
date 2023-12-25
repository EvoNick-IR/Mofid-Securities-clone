import { Button_noblue } from "./services";
const Archive = () => {
  return (
    <div className="col-span-12 xl:col-span-3 text-right md:text-center">
      <h2 className="text-slate-800 isbold lg:text-lg">
        کلاس‌های آموزشی روزانه رایگان
      </h2>
      <p className="my-6 text-slate-600 text-sm lg:text-base max-w-2xl mx-auto">
        کارگزاری مفید روزانه با برگزاری ۳ کلاس مرتبط با موضوعات تخصصی بازار
        سرمایه به صورت آنلاین و رایگان، در تلاش است تا سرمایه‌گذاران را در
        راستای تحقق اهداف مالی خود یاری کند.
      </p>
      <div className="flex justify-center">
        <Button_noblue title="آرشیو رویداد های آموزشی" />
      </div>
    </div>
  );
};

export default Archive;
