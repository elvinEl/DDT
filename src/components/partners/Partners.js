import React, { useEffect, useState } from "react";
import PartnersItem from "./PartnersItem";
import partnersData from "../../data/partners.json";
function Partners() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    setPartners(partnersData);
  });

  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <span className="flex justify-center items-center text-[35px] font-bold text-[#283C83] max-md:text-[30px]">
        Bizim Müştərilərimiz
      </span>
      {
        <div className="grid grid-cols-4 mb-8 max-w-[80%] mx-auto gap-16 mt-[3rem] max-xl:max-w-[90%]  max-lg:grid-cols-3 max-md:grid-cols-2">
          {partners.map((partner) => (
            <PartnersItem key={partner.id} partner={partner} />
          ))}
        </div>
      }
    </div>
  );
}

export default Partners;
