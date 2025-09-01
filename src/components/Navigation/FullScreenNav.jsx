import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { NavbarContext } from "../../context/NavContext";

const FullScreenNav = () => {
  const fullScreenNav = useRef(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(fullScreenNav.current, {
      display: "block",
    });
    tl.to(".stairing", {
      height: "100%",
      stagger: {
        amount: -0.35,
      },
    });
    tl.to(".navlink", {
      opacity: 1,
      rotateX: 0,
    });
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to(".subText", {
      opacity: 1,
      rotateX: 0,
    });
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".subText", {
      opacity: 0,
      rotateX: 90,
    });
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".navlink", {
      opacity: 0,
      rotateX: 90,
    });
    tl.to(".stairing", {
      height: 0,
      stagger: {
        amount: -0.35,
      },
    });
    tl.to(fullScreenNav.current, {
      display: "none",
    });
  }

  useGSAP(() => {
    if (navOpen) {
      gsapAnimation();
    } else {
      gsapAnimationReverse();
    }
  }, [navOpen]);

  return (
    <>
      {/* FullScreenNav */}
      <div
        ref={fullScreenNav}
        className="hidden h-screen absolute w-full  text-white overflow-hidden z-50"
      >
        <div className="h-full w-full fixed">
          <div className="h-full w-full grid grid-cols-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="stairing h-full  bg-black" />
            ))}
          </div>
        </div>
        <div className="relative flex flex-col justify-between h-full">
          <div className="navlink flex justify-between items-start p-2 w-full">
            <Link
              to={"/"}
              onClick={() => setNavOpen(false)}
              className={`fill-white lg:w-33 w-30 z-10`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
                viewBox="0 0 103 44"
              >
                <path
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </Link>
            <button
              type="button"
              onClick={() => setNavOpen(false)}
              className="h-30 w-30 cursor-pointer relative group"
            >
              <div className="h-42 w-0.5 top-0 -rotate-45 origin-top absolute bg-white group-hover:bg-[#D3FD50]" />
              <div className="h-42 w-0.5 top-0 right-0 rotate-45 origin-top absolute bg-white group-hover:bg-[#D3FD50]" />
            </button>
          </div>
          {/* All-Links */}
          <div>
            <div className="group link origin-top relative border-y border-white/80">
              <Link to={"/work"} onClick={() => setNavOpen(false)}>
                <h1 className="font-[font2] md:text-[8vw] text-[16vw] text-center leading-[0.8] pt-3  uppercase">
                  WORK
                </h1>
                <div className="absolute group-hover:opacity-100 opacity-0 transform transition-all duration-150  ease-in-out top-0 flex bg-[#D3FD50] text-black">
                  <div className="flex items-center moveX gap-2">
                    <h2 className="whitespace-nowrap font-[font2] md:text-[8vw] text-[16vw] text-center leading-[0.8] pt-3  uppercase">
                      SEE EVERYTHING
                    </h2>
                    <img
                      className="xl:h-20 lg:h-18 md:h-15 sm:h-20 h-13 shrink-0 w-60 object-cover  rounded-full"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt="img"
                    />
                    <h2 className="whitespace-nowrap font-[font2] md:text-[8vw] text-[16vw] text-center leading-[0.8] pt-3  uppercase">
                      SEE EVERYTHING
                    </h2>
                    <img
                      className="xl:h-20 lg:h-18 md:h-15 sm:h-20 h-13 shrink-0 w-60 object-cover  rounded-full"
                      src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="flex items-center moveX gap-2">
                    <h2 className="whitespace-nowrap font-[font2] md:text-[8vw] text-[16vw] text-center leading-[0.8] pt-3  uppercase">
                      SEE EVERYTHING
                    </h2>
                    <img
                      className="xl:h-20 lg:h-18 md:h-15 sm:h-20 h-13 shrink-0 w-60 object-cover  rounded-full"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt="img"
                    />
                    <h2 className="whitespace-nowrap font-[font2] md:text-[8vw] text-[16vw] text-center leading-[0.8] pt-3  uppercase">
                      SEE EVERYTHING
                    </h2>
                    <img
                      className="xl:h-20 lg:h-18 md:h-15 sm:h-20 h-13 shrink-0 w-60 object-cover  rounded-full"
                      src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                      alt="img"
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="group link origin-top relative border-y border-white/80">
              <Link to={"/agency"} onClick={() => setNavOpen(false)}>
                <h1 className="font-[font2] md:text-[8vw] text-[16vw] text-center leading-[0.8] pt-3  uppercase">
                  agency
                </h1>
                <div className="absolute group-hover:opacity-100 opacity-0 transform transition-all duration-150  ease-in-out top-0 flex bg-[#D3FD50] text-black">
                  <div className="flex items-center moveX gap-2">
                    <h2 className="whitespace-nowrap font-[font2] md:text-[8vw] text-[16vw] text-center leading-[0.8] pt-3  uppercase">
                      Know Us
                    </h2>
                    <img
                      className="xl:h-20 lg:h-18 md:h-15 sm:h-20 h-13 shrink-0 w-60 object-cover  rounded-full"
                      src="https://k72.ca/uploads/teamMembers/SophieA_640X290-640x290.jpg"
                      alt="img"
                    />
                    <h2 className="whitespace-nowrap font-[font2] md:text-[8vw] text-[16vw] text-center leading-[0.8] pt-3  uppercase">
                      Know Us
                    </h2>
                    <img
                      className="xl:h-20 lg:h-18 md:h-15 sm:h-20 h-13 shrink-0 w-60 object-cover  rounded-full"
                      src="https://k72.ca/uploads/teamMembers/MEL_640X290-640x290.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="flex items-center moveX gap-2">
                    <h2 className="whitespace-nowrap font-[font2] md:text-[8vw] text-[16vw] text-center leading-[0.8] pt-3  uppercase">
                      Know Us
                    </h2>
                    <img
                      className="xl:h-20 lg:h-18 md:h-15 sm:h-20 h-13 shrink-0 w-60 object-cover  rounded-full"
                      src="https://k72.ca/uploads/teamMembers/SophieA_640X290-640x290.jpg"
                      alt="img"
                    />
                    <h2 className="whitespace-nowrap font-[font2] md:text-[8vw] text-[16vw] text-center leading-[0.8] pt-3  uppercase">
                      Know Us
                    </h2>
                    <img
                      className="xl:h-20 lg:h-18 md:h-15 sm:h-20 h-13 shrink-0 w-60 object-cover  rounded-full"
                      src="https://k72.ca/uploads/teamMembers/MEL_640X290-640x290.jpg"
                      alt="img"
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="group link origin-top relative border-y border-white/80">
              <h1 className="font-[font2] md:text-[8vw] text-[16vw] text-center leading-[0.8] pt-3  uppercase">
                contact
              </h1>
              <div className="absolute group-hover:opacity-100 opacity-0 transform transition-all duration-150  ease-in-out top-0 flex bg-[#D3FD50] text-black">
                <div className="flex items-center moveX gap-2">
                  <h2 className="whitespace-nowrap font-[font2] md:text-[8vw] text-[16vw] text-center leading-[0.8] pt-3  uppercase">
                    send us a fax
                  </h2>
                  <img
                    className="xl:h-20 lg:h-18 md:h-15 sm:h-20 h-13 shrink-0 w-60 object-cover  rounded-full"
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    alt="img"
                  />
                  <h2 className="whitespace-nowrap font-[font2] md:text-[8vw] text-[16vw] text-center leading-[0.8] pt-3  uppercase">
                    send us a fax
                  </h2>
                  <img
                    className="xl:h-20 lg:h-18 md:h-15 sm:h-20 h-13 shrink-0 w-60 object-cover  rounded-full"
                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                    alt="img"
                  />
                </div>
                <div className="flex items-center moveX gap-2">
                  <h2 className="whitespace-nowrap font-[font2] md:text-[8vw] text-[16vw] text-center leading-[0.8] pt-3  uppercase">
                    send us a fax
                  </h2>
                  <img
                    className="xl:h-20 lg:h-18 md:h-15 sm:h-20 h-13 shrink-0 w-60 object-cover  rounded-full"
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    alt="img"
                  />
                  <h2 className="whitespace-nowrap font-[font2] md:text-[8vw] text-[16vw] text-center leading-[0.8] pt-3  uppercase">
                    send us a fax
                  </h2>
                  <img
                    className="xl:h-20 lg:h-18 md:h-15 sm:h-20 h-13 shrink-0 w-60 object-cover  rounded-full"
                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                    alt="img"
                  />
                </div>
              </div>
            </div>

            <div className="group link origin-top relative border-y border-white/80">
              <h1 className="font-[font2] md:text-[8vw] text-[16vw] text-center leading-[0.8] pt-3  uppercase">
                blog
              </h1>
              <div className="absolute group-hover:opacity-100 opacity-0 transform transition-all duration-150  ease-in-out top-0 flex bg-[#D3FD50] text-black">
                <div className="flex items-center moveX gap-2">
                  <h2 className="whitespace-nowrap font-[font2] md:text-[8vw] text-[16vw] text-center leading-[0.8] pt-3  uppercase">
                    read articles
                  </h2>
                  <img
                    className="xl:h-20 lg:h-18 md:h-15 sm:h-20 h-13 shrink-0 w-60 object-cover  rounded-full"
                    src="https://k72.ca/uploads/teamMembers/SophieA_640X290-640x290.jpg"
                    alt="img"
                  />
                  <h2 className="whitespace-nowrap font-[font2] md:text-[8vw] text-[16vw] text-center leading-[0.8] pt-3  uppercase">
                    read articles
                  </h2>
                  <img
                    className="xl:h-20 lg:h-18 md:h-15 sm:h-20 h-13 shrink-0 w-60 object-cover  rounded-full"
                    src="https://k72.ca/uploads/teamMembers/MEL_640X290-640x290.jpg"
                    alt="img"
                  />
                </div>
                <div className="flex items-center moveX gap-2">
                  <h2 className="whitespace-nowrap font-[font2] md:text-[8vw] text-[16vw] text-center leading-[0.8] pt-3  uppercase">
                    read articles
                  </h2>
                  <img
                    className="xl:h-20 lg:h-18 md:h-15 sm:h-20 h-13 shrink-0 w-60 object-cover  rounded-full"
                    src="https://k72.ca/uploads/teamMembers/SophieA_640X290-640x290.jpg"
                    alt="img"
                  />
                  <h2 className="whitespace-nowrap font-[font2] md:text-[8vw] text-[16vw] text-center leading-[0.8] pt-3  uppercase">
                    read articles
                  </h2>
                  <img
                    className="xl:h-20 lg:h-18 md:h-15 sm:h-20 h-13 shrink-0 w-60 object-cover  rounded-full"
                    src="https://k72.ca/uploads/teamMembers/MEL_640X290-640x290.jpg"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="subText p-4">
            <p className="text-[10px] uppercase font-[font1] text-center">
              All rights reserved © K72
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullScreenNav;
