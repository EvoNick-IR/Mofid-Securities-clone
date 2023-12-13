import { useEffect, useState } from "react";
import { data } from "./services";

const Mazaya = () => {
  const [mazData, setMazData] = useState(data);
  useEffect(() => {
    setMazData(data);
  }, [data]);
  return (
    <div className="w-5/12 bg-[#F8F9FA] p-6 rounded-md flex flex-col gap-10 justify-start ">
      <h3 className="ismed text-xl text-[#444954]">
        مزایای صندوق‌های سرمایه‌گذاری
      </h3>
      <div className="flex flex-col gap-5">
        {mazData.map((item) => {
          return (
            <div
              className="isreg flex gap-4 justify-start"
              key={"mazaya" + item.id}
            >
              <div className="w-[2px] bg-neutral-200 ">
                <div className="w-[2px] bg-[#00243C] hidden"></div>
              </div>
              <div className=" ">
                <h4 className="text-base ismed text-[#004B69]">{item.title}</h4>
                <p className="text-xs text-[#717888]">{item.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mazaya;
