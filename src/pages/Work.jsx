import React from "react";
import WorkCard from "../components/work/WorkCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Work = () => {
  const workImages = [
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/BEST/BEST_site_Thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OSM/thumbnailimage_OSM-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from('#hero', {
      height: 0,
      stagger: {
        amount: 0.4
      },
      scrollTrigger:{
        trigger: '#par',
        markers: true,
        start: "top 100%",
        end: "top -150%",
        scrub: true
      }
    })
  });
  return (
    <>
      <div className="px-2">
        <div className="md:pt-[40vh] pt-[60vh]">
          <h2 className="font-[font2] md:text-[14vw] text-[18vw] uppercase flex gap-2">
            Work <span className="lg:text-5xl text-xl mt-5 lg:mt-15">16</span>
          </h2>
        </div>

        <div id="par" className="lg:-mt-20 md:-mt-10 -mt-5">
          {workImages.map((image, index) => (
            <div
              key={index}
              id="hero"
              className="w-full h-[500px] mb-4 flex md:flex-row flex-col gap-4"
            >
              <WorkCard image1={image.image1} image2={image.image2} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
