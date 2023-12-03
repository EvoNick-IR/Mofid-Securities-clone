import { infoData } from "./services";
const Info = () => {
  return (
    <div className="w-[560px] flex flex-wrap ">
      {infoData.map((data) => {
        return (
          <div
            key={"info" + data.id}
            className="flex justify-center items-center pt-4 w-1/3 flex-grow mb-1"
          >
            <div className="flex flex-col bg-[#F8F9FA] justify-start items-center m-3 px-2 h-[200px] w-full py-4 bg-m-neutral-00 rounded-md ">
              <img src={data.icon} className="w-[91px] h-[91px] mb-2" />
              <span className="max-w-[140px] max-h-[44px] text-center isreg text-[14px] mt-3">
                {data.title}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
