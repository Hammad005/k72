import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";


const Agency = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger:{
        trigger: imageDivRef.current,
        markers: true,
        start: 'top 23%',
        end: 'top -100%',
        pin:true,
        scrub: true,
      }
    })
  })
  return (
    <>
    <div className="section1">
      <div ref={imageDivRef} className="absolute h-[20vw] w-[15vw] lg:rounded-2xl rounded-lg top-36 left-[30vw] overflow-hidden">
        <img className="h-full w-full object-cover" src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt='photo1' />
      </div>
      <div className="relative font-[font2]">
        <div className="lg:mt-[57vh] mt-[33vh]">
          <h1 className="text-[20vw] text-center uppercase leading-[17vw]">
            SEVEN7Y
            <br />
            TWO
          </h1>
        </div>
        <div className="lg:pl-[35%] mt-20 px-5">
          <p className="lg:text-[2.8vw] text-[4vw]">
           &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;We're inquisitive and open-minded, and we make sure creativity
            crowds out ego from every corner. A brand is a living thing, with
            values, a personality and a story. If we ignore that, we can achieve
            short-term success, but not influence that goes the distance. We
            bring that perspective to every brand story we help tell.
          </p>
        </div>
      </div>
    </div>
    <div className="section2 h-screen">

    </div>
    </>
  );
};

export default Agency;
