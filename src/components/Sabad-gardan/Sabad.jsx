import { Button_blue, Button_noblue } from "./services";

const Sabad = () => {
  return (
    <div className="w-full p-4 gap-4 flex flex-col items-start text-[#444954]">
      <h2 className="ismed text-2xl lg:text-4xl">سبدگردان مفید</h2>
      <h3 className="ismed text-base lg:text-xl ">
        آینده در گرو تصمیمات امروز شماست
      </h3>
      <p className="ismed mt-6 text-sm lg:text-lg text-gray-500">
        دستیابی به بازدهی مثبت در بورس نیازمند یادگیری، صرف زمان و هزینه‌ی زیادی
        است. اگر علاقه‌مند به سرمایه‌گذاری هستید اما فرصت کافی برای یادگیری
        روش‌های تحلیل در بورس ندارید صندوق‌های سرمایه‌گذاری انتخاب هوشمندانه‌ای
        هستند.
      </p>
      <div className="  w-full items-center gap-4">
        <div className="p-2">
          <Button_blue title="مشاوره رایگان سرمایه گذاری" />
        </div>
        <div className="p-2">
          <Button_noblue title="اطلاعات بیشتر" />
        </div>
      </div>
    </div>
  );
};

export default Sabad;
