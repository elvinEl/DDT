import React, { useEffect, useState } from "react";
import PartnersItem from "./PartnersItem";
import partnersData from "../../data/partners.json";
import { useTranslation } from "react-i18next";
import axios from "axios";
function Partners() {
  const { i18n } = useTranslation();

  const [partners, setPartners] = useState([]);

  useEffect(() => {
    setPartners(partnersData);
  });

  // useEffect(() => {
  //   async function fetchPartners() {
  //     const language = i18n.language;
  //     const response = await axios.get(
  //       "http://192.168.31.32:8010/api/partners",
  //       {
  //         headers: { "Accept-Language": language },
  //       }
  //     );
  //     setPartners(response.data);
  //   }
  //   fetchPartners();
  // }, [i18n.language]);

  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <span className="flex justify-center items-center mt-8 text-[35px] font-bold text-[#283C83] max-md:text-[30px]">
        Bizim Müştərilərimiz
      </span>
      {
        <div className="grid grid-cols-4 mb-8 max-w-[80%] mx-auto gap-16 mt-[3rem] max-xl:max-w-[90%]  max-lg:grid-cols-3 max-md:grid-cols-2">
          {partners.map((partner) => (
            <PartnersItem key={partner.id} partner={partner} />
          ))}
          {/* {Object.keys(partners).map((key) => (
            <div className=" flex justify-center items-center opacity-40 hover:opacity-100 duration-500 hover:scale-150">
              <img
                className="max-w-[150px]  max-md:max-w-[100px]  "
                src={partners[key].img}
                alt=""
              />
            </div>
          ))} */}
        </div>
      }
    </div>
  );
}

export default Partners;
