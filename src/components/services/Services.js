import React, { useEffect, useState } from "react";
import ServicesItem from "./ServicesItem";
import { getI18n, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import { fetchServices } from "../../store/services/serviceActions";

function Services() {
  const { t, i18n } = useTranslation();
// Redux
  const dispatch = useDispatch();
  const serviceRedux = useSelector(state => state.service.serviceData);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);


  // useEffect(() => {
  //   async function fetchServices() {
  //     const language = i18n.language;
  //     const response = await axios.get(
  //       "http://10.138.1.35:8000/api/v1/services",
  //       {
  //         headers: { "language": language },
  //       }
  //     );
  //     setServices(response.data);
  //   }
  //   fetchServices();
  // }, [i18n.language]);
  return (
    <div>
      <span className="flex justify-center text-[35px] font-bold text-[#283C83] max-md:text-[30px]">
        Xidmətlərimiz
      </span>
      <div className="grid grid-cols-4 mt-8 max-w-[90%] gap-4 mx-auto max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
        {Object.keys(serviceRedux).map((key) => (
          <Link to={`services/${serviceRedux[key].slug}`}>
            <div className="wrapper">
              <div className="single-card">
                <div className="front flex   flex-col text-start px-7 pt-[7rem] bg-gradient-to-br from-[#e9ffd4] via-[#f5bfd7] to-[#4dc9e6]">
                  <div className="absolute top-[-25px] right-[25px]">
                    <img
                      className=" h-[100px] w-full"
                      src={serviceRedux[key].image}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-[24px] text-start font-normal leading-7"  dangerouslySetInnerHTML={{__html:serviceRedux[key].title}}>

                    </p>
                  </div>
                  <div className="mt-1">
                    <p className="text-[15px] text-start font-normal"  dangerouslySetInnerHTML={{__html:serviceRedux[key].description}}>
                    </p>
                  </div>
                </div>
                <div className="back bg-gradient-to-tl from-[#e9ffd4] via-[#dbd4ff]">
                  <div className="content">
                    <div>
                      <p className="text-[30px] font-medium" dangerouslySetInnerHTML={{__html:serviceRedux[key].back_title}}>
                      </p>
                    </div>
                    <div>
                      <p className="text-[24px]" dangerouslySetInnerHTML={{__html:serviceRedux[key].back_description}}>
                      </p>
                    </div>
                    <div>
                  <Link to='/servicesdetails' className=" bg-lime-400 px-4 py-2 rounded text-white">
                    Daha Ətraflı
                  </Link>
                  </div>
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
