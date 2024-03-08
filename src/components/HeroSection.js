import React from "react";
import Services from "./services/Services";
import SliderHero from "./SliderHero";

function HeroSection() {

  return (
    <div className="max-w-[100%] object-cover  mx-auto  relative max-md:max-w-full">
      <div className="pt-4">
        <SliderHero />
      </div>
      <div class="wrapper-a">
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
    </div>
      <div className="py-16" data-aos="fade-up" data-aos-duration="2000">
        <Services />
      </div>
    </div>
  );
}

export default HeroSection;
