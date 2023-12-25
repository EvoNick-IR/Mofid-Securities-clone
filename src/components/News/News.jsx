import { newsData, arrowLeft } from "./services";
const News = () => {
  return (
    <div className="w-full xl:w-2/5 grid gap-4 justify-start  relative ">
      <h2 className="absolute -top-12 right-0 text-slate-400 text-lg">
        آخرین خبرها
      </h2>
      {newsData.map((news) => {
        return (
          <a href="_self" className="block flex " key={"news" + news.id}>
            <div className="flex gap-3  p-3 bg-[#F8F9FA] rounded-md w-full ">
              <div className="rounded-md w-[126px] md:w-[150px] shrink-0">
                <img
                  src={news.pic}
                  alt=""
                  height="180px"
                  className="max-w-full h-auto rounded-md"
                />
              </div>

              <div className="flex flex-col  justify-between">
                <h3 className="isreg text-xs  lg:text-base">{news.title}</h3>
                <span className="ismed text-[10px] xl:text-xs text-gray-400">
                  {news.time}
                </span>
              </div>
            </div>
          </a>
        );
      })}
      <a href="_self">
        <div className="flex gap-4 pr-4 ismed text-xs md:text-sm mt-4 text-[#004C6A]">
          <span className="">مشاهده همه خبرها</span>
          <img src={arrowLeft} alt="" />
        </div>
      </a>
    </div>
  );
};

export default News;
