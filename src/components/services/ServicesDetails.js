import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchServices,
  fetchServicesBySlug,
} from "../../store/services/serviceActions";

function ServicesDetails() {
  const [serviceDetails, setServiceDetails] = useState([]);
  const { i18n } = useTranslation();
  const { slug } = useParams();
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const serviceR = useSelector((state) => state.service.serviceData);
  const dispatch = useDispatch();
  const serviceReduxDetail = useSelector(
    (state) => state.serviceDetail.serviceDataDetail
  );

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  useEffect(() => {
    let dataS =
      serviceR &&
      serviceR.find(function (obj) {
        return obj.slug == slug;
      });

    const language = i18n.language;
    dispatch(fetchServicesBySlug({ dataS, language, slug }));
  }, [serviceR]);

  //   useEffect(() => {
  // console.log("Test");
  //     let dataS =
  //       serviceR &&
  //       serviceR.find(function (obj) {

  //         return obj.slug == slug;
  //       });
  //     async function fetchServiceBySlug() {
  //       const language = i18n.language;
  //       const response = await axios.get(`${baseUrl}/services/${slug}`, {
  //         headers: {
  //           language: language,
  //           general_key: dataS.general_key,
  //         },
  //       });
  //       setServiceDetails(dataS);
  //     }
  //     fetchServiceBySlug();
  //   }, [i18n.language, slug, serviceR]);

  return (
    <div>
      <div>
        <div className="max-w-full  mx-auto bg-[#f3f3f5]  mt-24">
          <p className="text-[42px] h-[7rem] font-medium flex justify-center items-center">
            {serviceReduxDetail.content && serviceReduxDetail.content.title}
          </p>
        </div>
        <div className="max-w-[90%] mx-auto rounded-[20px] bg-[#f7f7f5] my-8 p-8">
          <p
            className="text-[18px]"
            dangerouslySetInnerHTML={{
              __html:
                serviceReduxDetail.content &&
                serviceReduxDetail.content.detail_description,
            }}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default ServicesDetails;
