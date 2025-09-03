import React from "react";

const WorkCard = ({image1,image2}) => {
  return (
    <>
      
        <div className="md:w-1/2 bg-[#D3FD50] relative group h-full hover:rounded-[40px] overflow-hidden transition-all ease-in-out duration-300">
          <img
            src={image1}
            alt="img"
            className="h-full w-full object-cover"
          />
          <div className="opacity-0 group-active:opacity-100 group-hover:opacity-100 flex items-center justify-center absolute top-0 left-0 h-full w-full bg-black/50 transition-all ease-in-out duration-300">
            <h2 className="font-[font1] text-[4.5vw] text-white uppercase border-4 px-6 pt-2  rounded-full">
              View Project
            </h2>
          </div>
        </div>
        <div className="md:w-1/2 bg-[#D3FD50] relative group h-full hover:rounded-[40px] overflow-hidden transition-all ease-in-out duration-300">
          <img
            src={image2}
            alt="img"
            className="h-full w-full object-cover"
          />
          <div className="opacity-0 group-hover:opacity-100 group-active:opacity-100 flex items-center justify-center absolute top-0 left-0 h-full w-full bg-black/50 transition-all ease-in-out duration-300">
            <h2 className="font-[font1] text-[4.5vw] text-white uppercase border-4 px-6 pt-2  rounded-full">
              View Project
            </h2>
          </div>
        </div>
    </>
  );
};

export default WorkCard;
