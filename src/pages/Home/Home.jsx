import {
  Slider,
  Info,
  News,
  Sabad,
  Mazaya,
  Khadamat,
  Amoozesh,
  EasyTrade,
} from "./Services";

const Home = () => {
  return (
    <div className="ismed box-border w-full">
      <div id="carousel" className="w-full m-auto  ">
        <Slider />
      </div>
      <section className=" w-[90%]  flex flex-wrap  gap-24 mt-12 md:mt-1 md:w-2/3 mx-auto xl:w-[1140px] xl:flex-nowrap xl:mt-32">
        <Info />
        <News />
      </section>
      <section className=" w-[90%] flex flex-wrap  gap-x-20 mt-[128px] mx-auto xl:w-[1140px] md:flex-nowrap ">
        <Sabad />
        <Mazaya />
      </section>
      <section className="flex flex-col items-center p-4 lg:p-16  justify-center mt-12 bg-[#00243C] ">
        <Khadamat />
        <EasyTrade />
      </section>
      <section className="w-full flex flex-col items-center p-16  justify-center mt-[64px]">
        <Amoozesh />
      </section>
    </div>
  );
};

export default Home;
