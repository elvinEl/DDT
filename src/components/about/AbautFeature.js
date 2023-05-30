import React, { useState, useEffect } from "react";
import featureData from "../../data/about/aboutFeature.json";
import AboutFeatureItem from "./AboutFeatureItem";

function AbautFeature() {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    setFeatures(featureData);
  });
  return (
    <div className="flex justify-between mt-12 max-lg:flex-col overflow-y-hidden">
      <div>
        <p data-aos="fade-up" className="text-[2.5rem]  font-bold text-[#0b163f]">
          Bizim xüsusiyyətlərimiz
        </p>
        <div>
          {features.map((feature) => (
            <AboutFeatureItem key={feature.id} feature={feature} />
          ))}
        </div>
      </div>

      <div className="max-w-full max-lg:max-w-[50%] mx-auto max-md:max-w-full ">
        <img className="w-full h-[400px] max-lg:h-full" src="./assets/about/person.svg" alt="" />
      </div>
    </div>
  );
}

export default AbautFeature;
