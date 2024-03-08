import React, { useEffect } from "react";
import ServicesItem from "./ServicesItem";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../store/services/serviceActions";
import "../../styles/bubble.css";
function Services() {
  const { i18n, t } = useTranslation();
  // Redux
  const dispatch = useDispatch();
  const serviceRedux = useSelector((state) => state.service.serviceData);

  const serviceMap =
    serviceRedux && serviceRedux.data && serviceRedux.data
      ? serviceRedux.data
      : null;
  console.log(serviceMap);
  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchServices({ language }));
  }, [dispatch, i18n.language]);

  return (
    <div>
      <span className="flex justify-center text-[35px] font-bold text-[white] max-md:text-[30px]">
        {t("Xidmətlərimiz")}
      </span>

      <div className="grid grid-cols-4 mt-12 max-w-[90%] gap-4 mx-auto max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:max-w-[95%]">
        {serviceMap &&
          Object.keys(serviceMap).map((key) => (
            <Link to={`services/${serviceMap[key].general_key}`}>
              <div className="wrapper">
                <div className="single-card">
                  <div className="front flex  flex-col text-start px-7 pt-[7rem] text-white bg-gradient-to-br  from-[#0046ce] via-[#6897f1]  to-[#6897f1]">
                    <div className="absolute top-[-25px] right-[25px]">
                      <img
                        className=" h-[100px] w-full"
                        src={serviceMap[key].image}
                        alt=""
                      />
                    </div>
                    <div>
                      <p
                        className="text-[24px] text-start font-normal leading-7"
                        dangerouslySetInnerHTML={{
                          __html: serviceMap[key].title,
                        }}
                      ></p>
                    </div>
                    <div className="mt-1">
                      <p
                        className="text-[15px] text-start font-normal"
                        dangerouslySetInnerHTML={{
                          __html: serviceMap[key].description,
                        }}
                      ></p>
                    </div>
                  </div>
                  <div className="back  bg-gradient-to-br  from-[#0046ce] via-[#6897f1]  to-[#6897f1]">
                    {/* <div className="content">
                    <div>
                      <p
                        className="text-[30px] font-medium"
                        dangerouslySetInnerHTML={{
                          __html: serviceMap[key].title,
                        }}
                      ></p>
                    </div>
                    <div>
                      <p
                        className="text-[24px]"
                        dangerouslySetInnerHTML={{
                          __html: serviceMap[key].description,
                        }}
                      ></p>
                    </div>
                    <div>
                      <Link
                        to="/servicesdetails"
                        className=" bg-lime-400 px-4 py-2 rounded text-white"
                      >
                        Daha Ətraflı
                      </Link>
                    </div>
                  </div> */}
                  <div className="flex  justify-center items-center h-full">
                    <p className="bg-[#383838] rounded-[12px] px-3 py-2 text-white font-bold">Daha Ətraflı</p>
                  </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Services;
