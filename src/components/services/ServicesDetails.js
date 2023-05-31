import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchServicesById } from "../../store/services/serviceActions";

function ServicesDetails() {
  const { i18n } = useTranslation();
  const { general_key } = useParams();
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const serviceR = useSelector((state) => state.service.serviceData);
  const dispatch = useDispatch();
  const serviceReduxDetail = useSelector(
    (state) => state.serviceDetail.serviceDataDetail
  );
  console.log(serviceReduxDetail);

  useEffect(() => {
    let dataS =
      serviceR && serviceR.find((obj) => obj.general_key == general_key);
    const language = i18n.language;
    dispatch(fetchServicesById({ dataS, language }));
  }, [dispatch, general_key, i18n.language]);

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
