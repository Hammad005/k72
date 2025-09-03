import React from "react";
import Video from "./Video";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HomeHeroText = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".spin",
      { strokeDashoffset: 0 },
      {
        strokeDasharray: "425.743px, 0px",
        strokeDashoffset: 1000, // move dash around
        duration: 3,
        ease: "power4.inOut",
        repeat: -1,
        yoyo: true,
      }
    );
  });

  return (
    <div className="font-[font1] pt-5 text-center">
      <div className="text-[9.5vw] flex items-center justify-center uppercase leading-[8vw]">
        The spark for
      </div>

      <div className="text-[9.5vw] flex items-start justify-center uppercase leading-[8vw]">
        all
        <div className="h-[7vw] w-[16vw] rounded-full overflow-hidden">
          <Video />
        </div>
        things
      </div>

      <div className="text-[9.5vw] flex items-center justify-center uppercase leading-[8vw] relative">
        <div className="absolute w-fit h-full mb-11">
          <svg viewBox="0 0 233.171875 42.84375" className="w-full h-full">
            <ellipse
              cx="116.5859375"
              cy="21.421875"
              rx="114.5859375"
              ry="19.421875"
              className="fill-none stroke-[#D3FD50] spin"
              style={{
                strokeDasharray: "425.743px, 425.743px", // fixed dashes
                strokeDashoffset: 0, // start offset
              }}
            />
          </svg>
        </div>
        creative
      </div>
    </div>
  );
};

export default HomeHeroText;
