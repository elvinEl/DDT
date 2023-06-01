import React, { useEffect, useState } from "react";
import PartnersItem from "./PartnersItem";
import partnersData from "../../data/partners.json";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
function Partners() {
  const { i18n } = useTranslation();

  const [partners, setPartners] = useState([]);

  useEffect(() => {
    setPartners(partnersData);
  });

  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <span className="flex justify-center items-center mt-8 text-[35px] font-bold text-[white] max-md:text-[30px]">
     {t("Bizim Müştərilərimiz")}   
      </span>
      {
        <div className="grid grid-cols-5 mb-8 max-w-[90%] mx-auto gap-16 mt-[3rem] py-8 max-xl:max-w-[90%] bg-white  max-lg:grid-cols-3 max-md:grid-cols-2">
          {partners.map((partner) => (
            <PartnersItem key={partner.id} partner={partner} />
          ))}
        </div>
      }
    </div>
  );
}

export default Partners;
