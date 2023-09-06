import PageWrapper from "../PageWrapper/PageWrapper";
import trainerOne from "../../../../../../public/images/trainerOne.png";
import trainerTwo from "../../../../../../public/images/trainerTwo.png";
import trainerThree from "../../../../../../public/images/trainerThree.png";

import Image from "next/image";
import {
  Facebook,
  InstagramTwo,
  Linkedin,
  SliderArrowLeft,
  SliderArrowRight,
} from "../Svg";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

function OurTeam() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: {
      origin: "auto",
      perView: 5,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 767px)": {
        slides: {
          origin: "auto",
          perView: 2,
          spacing: 16,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="bg-[#F2F2F2] w-full overflow-hidden">
      <PageWrapper>
        <div className="flex md:flex-row md:gap-[162px] gap-[130px] flex-col md:pt-[164px] md:pb-[91px] py-[73px] 2xl:pl-[120px] xl:pl-[60px] lg:pl-[30px]">
          <div className="sm:w-[200px] w-[323px] flex flex-col justify-between">
            <div className="flex flex-col gap-[41px]">
              <h2 className="sm:text-[64px] sm:leading-[64px] text-[40px] leading-[40px] text-[#0A0A0C] font-[900] uppercase">
                Meet our team
              </h2>
              {loaded && instanceRef.current && (
                <div className="flex flex-row gap-[17px]">
                  <SliderArrowLeft
                    width={37}
                    height={37}
                    fill="#070709"
                    className="cursor-pointer"
                    onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled={currentSlide === 0}
                  />

                  <SliderArrowRight
                    width={37}
                    height={37}
                    fill="#070709"
                    className="cursor-pointer"
                    onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.next()
                    }
                    disabled={
                      currentSlide ===
                      instanceRef.current.track.details.slides.length - 1
                    }
                  />
                </div>
              )}
            </div>
            <button className="md:mt-[190px] mt-[41px] text-secondary py-[12px] text-[18px] leading-[22px] font-semibold bg-primary px-[45px] w-[200px] sm:w-full">
              Subscribe
            </button>
          </div>
          <div className="relative">
            <div className="sm:left-[-72px] sm:top-[103px] left-[68px] top-[-78px] absolute w-screen h-[140%] sm:h-[120%] bg-white z-10"></div>
            <div className="relative keen-slider !w-[130%]" ref={sliderRef}>
              <div className="keen-slider__slide number-slide1 relative z-20 flex-col flex gap-[18px]">
                <div className="relative min-w-[292px] h-[399px] ">
                  <Image
                    className="w-full h-full"
                    src={trainerOne}
                    alt="trainer-img"
                  />
                  <div className="flex flex-col absolute top-[17px] right-[17px]">
                    <div className="p-[4px] bg-primary">
                      <Facebook width={24} height={24} />
                    </div>{" "}
                    <div className="p-[4px] bg-primary">
                      <Linkedin width={24} height={24} />
                    </div>
                    <div className="p-[4px] bg-primary">
                      <InstagramTwo width={24} height={24} />
                    </div>
                  </div>
                </div>
                <p className="text-secondary text-[12px] leading-[12px] tracking-[1.5px] uppercase">
                  Bodybuilding
                </p>
                <h4 className="pb-[18px] border-b-[1px] border-b-[#070709] text-[20px] leading-[29px] tracking-[0.5px] font-semibold text-secondary">
                  Sanja Radović
                </h4>
              </div>
              <div className="keen-slider__slide number-slide2 relative z-20 flex-col flex gap-[18px]">
                <div className=" min-w-[292px] h-[399px] ">
                  <Image
                    className="w-full h-full"
                    src={trainerTwo}
                    alt="trainer-img"
                  />
                  <div className="flex flex-col absolute top-[17px] right-[17px]">
                    <div className="p-[4px] bg-primary">
                      <Facebook width={24} height={24} />
                    </div>{" "}
                    <div className="p-[4px] bg-primary">
                      <Linkedin width={24} height={24} />
                    </div>
                    <div className="p-[4px] bg-primary">
                      <InstagramTwo width={24} height={24} />
                    </div>
                  </div>
                </div>
                <p className="text-secondary text-[12px] leading-[12px] tracking-[1.5px] uppercase">
                  Bodybuilding
                </p>
                <h4 className="pb-[18px] border-b-[1px] border-b-[#070709] text-[20px] leading-[29px] tracking-[0.5px] font-semibold text-secondary">
                  Marko Mihajlović
                </h4>
              </div>
              <div className="keen-slider__slide number-slide3 relative z-20 flex-col flex gap-[18px]">
                <div className=" min-w-[292px] h-[399px] ">
                  <Image
                    className="w-full h-full"
                    src={trainerThree}
                    alt="trainer-img"
                  />
                  <div className="flex flex-col absolute top-[17px] right-[17px]">
                    <div className="p-[4px] bg-primary">
                      <Facebook width={24} height={24} />
                    </div>{" "}
                    <div className="p-[4px] bg-primary">
                      <Linkedin width={24} height={24} />
                    </div>
                    <div className="p-[4px] bg-primary">
                      <InstagramTwo width={24} height={24} />
                    </div>
                  </div>
                </div>
                <p className="text-secondary text-[12px] leading-[12px] tracking-[1.5px] uppercase">
                  Bodybuilding
                </p>
                <h4 className="pb-[18px] border-b-[1px] border-b-[#070709] text-[20px] leading-[29px] tracking-[0.5px] font-semibold text-secondary">
                  Marko Dumnić
                </h4>
              </div>
              <div className="relative keen-slider__slide number-slide4 z-20 flex-col flex gap-[18px]">
                <div className=" min-w-[292px] h-[399px] ">
                  <Image
                    className="w-full h-full"
                    src={trainerOne}
                    alt="trainer-img"
                  />
                  <div className="flex flex-col absolute top-[17px] right-[17px]">
                    <div className="p-[4px] bg-primary">
                      <Facebook width={24} height={24} />
                    </div>{" "}
                    <div className="p-[4px] bg-primary">
                      <Linkedin width={24} height={24} />
                    </div>
                    <div className="p-[4px] bg-primary">
                      <InstagramTwo width={24} height={24} />
                    </div>
                  </div>
                </div>
                <p className="text-secondary text-[12px] leading-[12px] tracking-[1.5px] uppercase">
                  Bodybuilding
                </p>
                <h4 className="pb-[18px] border-b-[1px] border-b-[#070709] text-[20px] leading-[29px] tracking-[0.5px] font-semibold text-secondary">
                  Sanja Radović
                </h4>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}

export default OurTeam;
