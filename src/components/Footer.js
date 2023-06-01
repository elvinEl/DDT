import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

function Footer() {
  const [footerData, setFooterData] = useState([]);
  const { t, i18n } = useTranslation();
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    async function fetchGeneralData() {
      const language = i18n.language;
      const response = await axios.get(`${baseUrl}/general-data`);
      setFooterData(response.data);
    }
    fetchGeneralData();
  }, [i18n.language]);

  return (
    <div className="bg-[#4C525E]">
      <div>
        {Object.keys(footerData).map((key) => (
          <div
            key={footerData[key]}
            className="grid grid-cols-4 gap-4 max-w-[90%] mx-auto pt-8 pb-20 text-white "
          >
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
                <div>
                  <NavLink to="/services/h4zRjd7HVIWjymGEnhvf19Eh">
                  {t("Web Səhifələrin Hazirlanması")}
                    
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/services/BGIafLPnDXq2gk4MmBT8G3xS">
                    {t("Veb Saytlara Texniki Dəstək")}
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/services/ecvcQaU0p4oe4ylrmZQEwhEH">
                  {t("Korporativ mail xidməti")}
                   
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/services/auqzvDFfTWcQVCQix1G2xgVL">
                  {t("Online ödəmə sistemi inteqrasiyası")}
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div>
                <p className="text-[22px] font-semibold">SON İŞLƏRİMİZ</p>
              </div>
              <div className="text-[16px] font-normal leading-[31px] pt-4">
                <p>geometry steering wheel</p>
                <p>oil change</p>
                <p>replacement and repair of exhaust</p>
                <p>replacement shock absorbers</p>
              </div>
            </div>
            <div className="col-span-1">
              <div>
                <p className="text-[22px] font-semibold">{t("ƏLAQƏ")} </p>
              </div>
              <div className="text-[16px] font-normal leading-[31px] pt-4">
                <div>{footerData[key].address}</div>
                <div>{footerData[key].phone}</div>
                <div>{footerData[key].phone}</div>
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
