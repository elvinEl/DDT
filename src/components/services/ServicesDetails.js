import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchServicesById } from "../../store/services/serviceActions";
import "../../styles/servicesDetails.css";
function ServicesDetails() {
  const { i18n } = useTranslation();
  const { general_key } = useParams();
  const dispatch = useDispatch();
  const serviceReduxDetail = useSelector(
    (state) => state.serviceDetail.serviceDataDetail
  );
  console.log(serviceReduxDetail);

  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchServicesById({ general_key, language }));
  }, [dispatch, general_key, i18n.language]);

  return (
    <div className="">
      <div>
        {/* <div class="bg"></div>
         <div class="bg bg2"></div>
         <div class="bg bg3"></div> */}
        <div className="max-w-full  mx-auto bg-[#5C5C5C]  mt-24">
          <p className="text-[32px] text-white py-7 px-2 font-medium flex justify-center items-center max-md:text-[22px] max-md:py-4">
            {serviceReduxDetail && serviceReduxDetail.detail_title}
          </p>
        </div>

        <div className="grid grid-cols-2 max-w-[85%] mx-auto gap-8 my-12 max-lg:grid-cols-1 max-lg:max-w-[95%]">
          <div className="col-span-1 flex justify-center items-center">
            <p
              className="text-white text-center text-[24px] font-medium max-md:text-[20px] max-lg:text-start"
              dangerouslySetInnerHTML={{
                __html:
                  serviceReduxDetail && serviceReduxDetail.detail_description1,
              }}
            ></p>
          </div>
          <div className="col-span-1 max-lg:flex max-lg:justify-center">
            <img
              src={serviceReduxDetail && serviceReduxDetail.detail_image1}
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-2 max-w-[85%] mx-auto gap-8 my-12 max-md:max-w-[95%] max-lg:flex max-lg:flex-col-reverse ">
          <div className="col-span-1 max-lg:flex max-lg:justify-center">
            <img
              src={serviceReduxDetail && serviceReduxDetail.detail_image2}
              alt=""
            />
          </div>
          <div className="col-span-1 flex justify-center items-center max-lg:justify-start">
            <p
              className="text-white text-[24px] font-medium max-lg:text-[20px]"
              dangerouslySetInnerHTML={{
                __html:
                  serviceReduxDetail && serviceReduxDetail.detail_description2,
              }}
            ></p>
          </div>
        </div>
        <div className="grid grid-cols-2 max-w-[85%] mx-auto gap-8 my-12 max-md:max-w-[95%] max-lg:flex max-lg:flex-col-reverse">
          <div className="col-span-1 flex justify-center items-center max-lg:justify-start">
            <p
              className="text-white text-[24px] font-medium max-lg:text-[20px]"
              dangerouslySetInnerHTML={{
                __html:
                  serviceReduxDetail && serviceReduxDetail.detail_description3,
              }}
            ></p>
          </div>
          <div className="col-span-1 max-lg:flex max-lg:justify-center">
            <img
              src={serviceReduxDetail && serviceReduxDetail.detail_image3}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesDetails;
