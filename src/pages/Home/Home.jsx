import Mazaya from "../../components/Mazaya/Mazaya";
import Sabad from "../../components/Sabad-gardan/Sabad";
import { Slider, Info, News } from "./Services";

const Home = () => {
  return (
    <div className="">
      <div id="carousel" className="w-full m-auto ">
        <Slider />
      </div>
      <section className="max-w-[1140px] w-[90%] grid grid-cols-9 gap-x-32 mt-[64px] mx-auto">
        <Info />
        <News />
      </section>
      <section className="max-w-[1140px] w-[90%] grid grid-cols-9 gap-x-32 mt-[64px] mx-auto ">
        <Sabad />
        <Mazaya />
      </section>
    </div>
  );
};

export default Home;
