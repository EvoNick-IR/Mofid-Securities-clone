import { Slider, Info, News } from "./Services";

const Home = () => {
  return (
    <main className="">
      <div id="carousel" className="w-[100%] m-auto ">
        <Slider />
        <section className="w-[90%] flex justify-between bg-slate-500 mx-auto h-[700px]">
          <Info />
          <News />
        </section>
      </div>
    </main>
  );
};

export default Home;
