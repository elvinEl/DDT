import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { fetchServices } from "../store/services/serviceActions";
import { fetchContact } from "../store/contact/contactActions";
import {
  BsFacebook,
  BsYoutube,
  BsInstagram,
  BsLinkedin,
  BsTelephone,
} from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import { GoMail } from "react-icons/go";
import "../styles/footer.css";
function Footer() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const contactRedux = useSelector((state) => state.contact.contactData);

  const serviceRedux = useSelector((state) => state.service.serviceData);
  const serviceData = serviceRedux && serviceRedux.data;
  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchServices({ language }));
    dispatch(fetchContact({ language }));
  }, [dispatch, i18n.language]);

  return (
    <div className="bg-[#4C525E]">
      <div>
        {Object.keys(contactRedux).map((key) => (
          <div className="grid grid-cols-4 gap-4 max-w-[90%] mx-auto pt-8 pb-20 text-white max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:pb-4 max-md:pt-4 max-md:grid-cols-1">
            <div className="col-span-1">
              <div>
                <p className="text-[22px] font-semibold">
                  Sosial Şəbəkələrimiz
                </p>
              </div>
              <div className=" text-[16px] pt-4 flex ">
                <a
                  className="soli "
                  target="_blank"
                  href={contactRedux[key].facebook}
                >
                  <span className="text-[24px] relative ">
                    <BsFacebook />
                  </span>
                </a>
                <a
                  className="soli"
                  target="_blank"
                  href={contactRedux[key].instagram}
                >
                  <span className="text-[24px] relative">
                    <BsInstagram />
                  </span>
                </a>
                <a
                  className="soli "
                  target="_blank"
                  href={contactRedux[key].linkedin}
                >
                  <span className="text-[24px] relative">
                    <BsLinkedin />
                  </span>
                </a>
                <a
                  className="soli "
                  target="_blank"
                  href={contactRedux[key].youtube}
                >
                  <span className="text-[24px] relative ">
                    <BsYoutube />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-span-1">
              <div>
                <p className="text-[22px] font-semibold">{t("NAVİQASİYA")} </p>
              </div>
              <div className="text-[16px] font-normal leading-[31px] pt-4">
                <div>
                  <NavLink to="/">{t("Ana səhifə")}</NavLink>
                </div>
                <div>
                  <NavLink to="/about">{t("Haqqımızda")}</NavLink>
                </div>
                <div>
                  <NavLink to="/portfolios">{t("Portfolio")}</NavLink>
                </div>
                <div>
                  <NavLink to="/connect">{t("Əlaqə")}</NavLink>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div>
                <p className="text-[22px] font-semibold">{t("XİDMƏTLƏR")}</p>
              </div>
              <div className="text-[16px] font-normal leading-[31px] pt-4">
                <div className="flex flex-col">
                  {serviceData &&
                    Object.keys(serviceData).map((key) => (
                      <Link to={`services/${serviceData[key].general_key}`}>
                        {serviceData[key].title}
                      </Link>
                    ))}
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div>
                <p className="text-[22px] font-semibold">{t("ƏLAQƏ")} </p>
              </div>
              <div className="text-[16px] font-normal leading-[31px] pt-4">
                <div className="flex items-center gap-2">
                  {" "}
                  <span className="text-[18px]">
                    <TfiLocationPin />
                  </span>{" "}
                  {contactRedux[key].address}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[18px]">
                    <GoMail />
                  </span>{" "}
                  {contactRedux[key].email}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[18px]">
                    <BsTelephone />
                  </span>{" "}
                  {contactRedux[key].phones.split(",")[0]}
                </div>
                <div></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] py-8 border-[white]"></div>
    </div>
  );
}

export default Footer;
