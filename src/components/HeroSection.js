import React from "react";
import Slider from "react-slick";
import Services from "./services/Services";
import SliderHero from "./SliderHero";

function HeroSection() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div className="max-w-[100%] object-cover  mx-auto  relative max-md:max-w-full">
      {/* <Slider {...settings}>
        <div className="w-fit relative " >
          <img className="w-[100%] block" src="./assets/hero-img/h5.jpg" alt="" />
       <div className="absolute top-0 left-0 w-full h-full bg-[#00000080]"></div>
          <p className="absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2  font-extrabold text-white text-[45px] max-md:text-[15px] max-md:hidden">Sizin üçün effektiv həllər!</p>
        </div>{" "}
        <div className="w-fit relative">
          <img className="w-[100%] block" src="./assets/hero-img/h6.jpg" alt="" />
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000080]"></div>
          <p className="absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2  font-extrabold text-white text-[45px] max-md:text-[15px] max-md:hidden">Sizin üçün effektiv həllər!</p>
        </div>
      </Slider> */}
      <div className="pt-8">
        <SliderHero />
      </div>
      <div className="mt-4" data-aos="fade-up" data-aos-duration="2000">
        <Services />
      </div>
    </div>
  );
}

export default HeroSection;
