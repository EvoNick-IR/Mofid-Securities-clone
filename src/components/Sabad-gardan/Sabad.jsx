import {Button_blue,Button_noblue} from "./services"

const Sabad = () => {
  return (
    <div className="col-span-5 gap-6 flex flex-col items-start text-[#444954]">
      <h2 className="ismed text-3xl">سبدگردان مفید</h2>
      <h3 className="ismed text-xl ">آینده در گرو تصمیمات امروز شماست</h3>
      <p className="ismed text-lg text-gray-500">
        دستیابی به بازدهی مثبت در بورس نیازمند یادگیری، صرف زمان و هزینه‌ی زیادی
        است. اگر علاقه‌مند به سرمایه‌گذاری هستید اما فرصت کافی برای یادگیری
        روش‌های تحلیل در بورس ندارید صندوق‌های سرمایه‌گذاری انتخاب هوشمندانه‌ای
        هستند.
      </p>
      <div className="flex items-center gap-4">
        <Button_blue title="مشاوره رایگان سرمایه گذاری" />
        <Button_noblue title="اطلاعات بیشتر" />
      </div>
    </div>
  );
};

export default Sabad;
