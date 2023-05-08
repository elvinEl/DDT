import React, { useEffect, useState } from "react";
import aboutServicesData from "../../data/about/aboutServices.json";
import AboutServicesItem from "./AboutServicesItem";

function AboutServices() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    setServices(aboutServicesData);
  });
  return (
    <>
      <div className="flex justify-between mt-12">
        <div className="w-[50%]">
          <img
            className="w-full h-[400px]"
            src="./assets/about/person2.svg"
            alt=""
          />
        </div>

        <div className="mt-12">
          <p data-aos="fade-right" className="text-[2.5rem]  font-bold text-[#0b163f]">Niyə biz?</p>
          <div className="grid grid-cols-2 gap-x-6 mt-4 text-[18px]">
            {services.map((service) => (
              <AboutServicesItem key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutServices;
