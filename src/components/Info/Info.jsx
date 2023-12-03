import { infoData } from "./services";
const Info = () => {
  return (
    <div className="grid grid-cols-3 col-span-5 gap-4">
      {infoData.map((data) => {
        return (
          <div
            key={"info" + data.id}
            className="rounded-md p-1 bg-[#F8F9FA] flex justify-center"
          >
            <div className="flex pt-4 ">
              <div className="flex flex-col  justify-start items-center px-2 py-4   ">
                <img src={data.icon} className="w-[91px] h-[91px] mb-2" />
                <span className="w-[140px] h-[44px] text-center isreg text-[14px] mt-3">
                  {data.title}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
//  flex items-start flex-wrap gap-4 col-start-1 col-end-4 flex-grow
