import { Slider, Info, News } from "./Services";

const Home = () => {
  return (
    <div className="">
      <div id="carousel" className="w-full m-auto ">
        <Slider />
      </div>
      <section className="w-[1140px] flex justify-between mt-10 mx-auto">
        <Info />
        <News />
      </section>
    </div>
  );
};

export default Home;
