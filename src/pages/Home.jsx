import React from "react";
import Video from "../components/home/Video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";

const Home = () => {
  return (
    <>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative overflow-hidden flex flex-col lg:justify-between justify-end text-white lg:gap-3 gap-10">
        <HomeHeroText />
        <div className="flex justify-end w-full pr-4">
        <p className=" max-w-[18.75rem] text-sm font-[font2] ">
          K72 is an agency that builds brands from every angle. Today, tomorrow
          and years from now. We think the best sparks fly when comfort zones
          get left behind and friction infuses our strategies, brands and
          communications with real feeling. We're transparent, honest and say
          what we mean, and when we believe in something, we're all in.
        </p>
        </div>
        <HomeBottomText />
      </div>
    </>
  );
};

export default Home;
