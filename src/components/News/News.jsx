import { newsData, arrowLeft } from "./services";
const News = () => {
  return (
    <div className=" col-span-4 flex flex-col gap-4 justify-start  relative ">
      <h2 className="absolute -top-12 right-0 text-slate-400 text-lg">
        آخرین خبرها
      </h2>
      {newsData.map((news) => {
        return (
          <a href="_self" key={"news" + news.id}>
            <div className="flex gap-3  p-3 bg-[#F8F9FA] rounded-md ">
              <img src={news.pic} alt="" className="w-[150px] rounded-md" />
              <div className="flex flex-col max-w-[300px] justify-between">
                <h3 className="isreg text-base">{news.title}</h3>
                <span className="ismed text-xs text-gray-400">{news.time}</span>
              </div>
            </div>
          </a>
        );
      })}
      <a href="_self">
        <div className="flex gap-4 pr-4 ismed text-sm mt-4 text-[#004C6A]">
          <span className="">مشاهده همه خبرها</span>
          <img src={arrowLeft} alt="" />
        </div>
      </a>
    </div>
  );
};

export default News;
