import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function ServicesDetails() {
  const [serviceDetails, setServiceDetails] = useState([]);
  const { i18n } = useTranslation();
  const [serviceData] = useOutletContext();
  const { slug } = useParams();

  useEffect(() => {
    let dataS =
      serviceData &&
      serviceData.find(function (obj) {
        return obj.slug == slug;
      });

    console.log(dataS, "obj");

    async function fetchServices() {
      console.log(slug, "slug");
      const language = i18n.language;
      const response = await axios.get(
        `http://10.138.1.35:8000/api/v1/services/${slug}`,
        {
          headers: {
            language: language,
            general_key: dataS.general_key,
          },
        }
      );
      setServiceDetails(dataS);
    }

    console.log(serviceData);
    console.log(serviceDetails);

    fetchServices();
  }, [i18n.language, slug, serviceData]);

  return (
    <div>
      <div>
        <div className="max-w-full  mx-auto bg-[#f3f3f5]  mt-24">
          <p className="text-[42px] h-[7rem] font-medium flex justify-center items-center">
            {serviceDetails.title}
          </p>
        </div>
        <div className="max-w-[90%] mx-auto rounded-[20px] bg-[#f7f7f5] my-8 p-8">
          <p className="text-[18px]"  dangerouslySetInnerHTML={{__html:serviceDetails.detail_description}}>
           
          </p>
         
        </div>
      </div>
    </div>
  );
}

export default ServicesDetails;
