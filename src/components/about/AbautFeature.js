import React, { useState, useEffect } from "react";
import featureData from "../../data/about/aboutFeature.json";
import AboutFeatureItem from "./AboutFeatureItem";

function AbautFeature() {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    setFeatures(featureData);
  });
  return (
    <div className="flex justify-between mt-12">
      <div>
        <p data-aos="fade-right" className="text-[2.5rem]  font-bold text-[#0b163f]">
          Bizim xüsusiyyətlərimiz
        </p>
        <div>
          {features.map((feature) => (
            <AboutFeatureItem key={feature.id} feature={feature} />
          ))}
        </div>
      </div>

      <div className="w-[50%]">
        <img className="w-full h-[400px]" src="./assets/about/person.svg" alt="" />
      </div>
    </div>
  );
}

export default AbautFeature;
