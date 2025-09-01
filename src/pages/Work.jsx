import React from "react";

const Work = () => {
  return (
    <>
      <div className="px-2">
        <div className="md:mt-[40vh] mt-[60vh]">
          <h2 className="font-[font2] md:text-[14vw] text-[18vw] uppercase flex gap-2">
            Work <span className="lg:text-5xl text-xl mt-5 lg:mt-15">16</span>
          </h2>
        </div>

        <div>
          <div className="w-full h-[800px] flex gap-4 bg-red-500 md:-mt-20 -mt-8">
            <div className="w-1/2 h-full bg-green-400"></div>
            <div className="w-1/2 h-full bg-blue-400"></div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Work;
