import Button_blue from "../Buttons/Button_blue";

const Sabad = () => {
  return (
    <div className="col-span-5 gap-6 flex flex-col items-start ">
      <h2 className="ismed text-3xl text-gray-900">سبدگردان مفید</h2>
      <h3 className="ismed text-xl text-gray-900">
        آینده در گرو تصمیمات امروز شماست
      </h3>
      <p className="ismed text-lg text-gray-500">
        دستیابی به بازدهی مثبت در بورس نیازمند یادگیری، صرف زمان و هزینه‌ی زیادی
        است. اگر علاقه‌مند به سرمایه‌گذاری هستید اما فرصت کافی برای یادگیری
        روش‌های تحلیل در بورس ندارید صندوق‌های سرمایه‌گذاری انتخاب هوشمندانه‌ای
        هستند.
      </p>
      <div className="">
        <Button_blue
          title="مشاوره رایگان سرمایه گذاری"
          bg="#004B69"
          color="white"
        />
      </div>
    </div>
  );
};

export default Sabad;
