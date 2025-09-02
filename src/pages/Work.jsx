import React from "react";

const Work = () => {
  return (
    <>
      <div className="px-2">
        <div className="md:pt-[40vh] pt-[60vh]">
          <h2 className="font-[font2] md:text-[14vw] text-[18vw] uppercase flex gap-2">
            Work <span className="lg:text-5xl text-xl mt-5 lg:mt-15">16</span>
          </h2>
        </div>

        <div className="lg:-mt-20 md:-mt-10 -mt-5">
          <div className="w-full h-[500px] mb-4 flex md:flex-row flex-col gap-4">
            <div className="md:w-1/2 relative group h-full hover:rounded-[40px] overflow-hidden transition-all ease-in-out duration-300">
            <img src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg" alt="img" className="h-full w-full object-cover" />
            <div className="hidden group-hover:flex items-center justify-center absolute top-0 left-0 h-full w-full bg-black/50">
              <h2 className="font-[font2] text-[4.5vw] text-white uppercase border-4 px-6 py-2  rounded-full">
                View Project
              </h2>
            </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Work;
