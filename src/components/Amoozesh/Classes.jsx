import Button_noblue from "../Buttons/Button_noblue";

const Classes = () => {
  return (
    <div className="bg-[#F8F9FA]  w-[1140px] flex flex-nowrap justify-between rounded-md p-8 text-slate-800">
      <div className="flex flex-col items-start w-3/12 gap-10 ">
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
      <div className="flex items-start h-9 w-2/12 bg-amber-700"></div>
      <div className="flex items-start h-9 w-6/12 bg-green-600"></div>
    </div>
  );
};

export default Classes;
