import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchServicesById } from "../../store/services/serviceActions";
import "../../styles/servicesDetails.css"
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
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
        <div className="max-w-full  mx-auto bg-[#f3f3f5]  mt-24">
          <p className="text-[42px] py-7 font-medium flex justify-center items-center max-md:text-[24px] max-md:py-4 max-lg:text-[32px]">
            {serviceReduxDetail.data && serviceReduxDetail.data.title}
          </p>
        </div>
        <div className="max-w-[90%] mx-auto rounded-[20px] bg-[#f7f7f5] my-8 p-8 min-h-[60vh] max-md:max-w-[95%] max-md:p-4">
          <p
            className="text-[18px]"
            dangerouslySetInnerHTML={{
              __html:
                serviceReduxDetail.data &&
                serviceReduxDetail.data.detail_description,
            }}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default ServicesDetails;
