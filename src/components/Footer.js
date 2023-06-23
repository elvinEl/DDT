import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { fetchServices } from "../store/services/serviceActions";
import { fetchContact } from "../store/contact/contactActions";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import "../styles/footer.css"
function Footer() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const contactRedux = useSelector((state) => state.contact.contactData);

  const serviceRedux = useSelector((state) => state.service.serviceData);

  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchServices({ language }));
    dispatch(fetchContact({ language }));
  }, [dispatch, i18n.language]);

  return (
    <div className="bg-[#4C525E]">
      <div>
        {Object.keys(contactRedux).map((key) => (
          <div className="grid grid-cols-4 gap-4 max-w-[90%] mx-auto pt-8 pb-20 text-white ">
            <div className="col-span-1">
              <div >
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
                  {Object.keys(serviceRedux).map((key) => (
                    <Link to={`services/${serviceRedux[key].general_key}`}>
                      {serviceRedux[key].title}
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
                <div>{contactRedux[key].address}</div>
                <div>{contactRedux[key].email}</div>
                <div>{contactRedux[key].phones.split(",")[0]}</div>
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
