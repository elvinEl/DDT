import React, { useEffect, useState } from "react";
import ServicesData from "../../data/services.json";
import ServicesItem from "./ServicesItem";

function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    setServices(ServicesData);
  });

  return (
    <div>
 <span className="flex justify-center   text-[35px] font-bold text-[#283C83] max-md:text-[30px]">
       Xidmətlərimiz
      </span>
    <div className="flex justify-around mt-8 max-w-[90%] mx-auto">
      {services.map((service) => (
        <ServicesItem key={service.id} service={service} />
      ))}
    </div>
    </div>
  );
}

export default Services;
