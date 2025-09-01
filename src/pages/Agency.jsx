import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";


const Agency = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg'
  ];
  
  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger:{
        trigger: imageDivRef.current,
        start: "top top",
        end: window.innerHeight <= 700 ? "top -120%" : "top -25%",
        pin:true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (e) => {
          let imageIndex;
          if (e.progress < 1) {
            imageIndex = Math.floor(e.progress * imageArray.length);
          }else{
            imageIndex = imageArray.length - 1
          }
          
          imageRef.current.src = imageArray[imageIndex];
        }
      }
    })
  })
  return (
    <>
    <div className="section1 py-1">
      <div ref={imageDivRef} className="absolute md:h-[20vw] md:w-[15vw] h-[40vw] w-[25vw] lg:rounded-2xl rounded-lg top-36 left-[30vw] overflow-hidden">
        <img ref={imageRef} className="h-full w-full object-cover" src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt='photo1' />
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
          <p className="text-[4vw] lg:text-[2.5vw]">
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
