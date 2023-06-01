import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolio } from "../../store/portfolio/portfolioActions";

function HomePortfolio() {
  const { t, i18n } = useTranslation();
  const [sliceElement] = useState(4);
  const dispatch = useDispatch();
  const portfolioRedux = useSelector((state) => state.portfolio.portfolioData);
  const slice = portfolioRedux.slice(0, sliceElement);
  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchPortfolio({ language }));
  }, [dispatch, i18n.language]);

  // ENV ISTIFADESI
  const baseUrl = process.env.REACT_APP_BASE_URL;
  //

  return (
    <>
      <div className="max-md:mt-8" data-aos="fade-up" data-aos-duration="2000">
        <span className="flex justify-center  text-[35px] font-bold text-[white] max-md:text-[30px]">
         {t("Ən Son Görülən İşlər")} 
        </span>
        <div className="wrapper_p  max-md:grid-cols-1">
          {Object.keys(slice).map((key) => (
            <Link to={`portfolios/${portfolioRedux[key].general_key}`}>
              <div className="card">
                <img src={portfolioRedux[key].image} alt="" />
                <div className="info">
                  <p>{portfolioRedux[key].title}</p>
                  <p>{portfolioRedux[key].description}</p>
                  <a className="btn rounded" href={portfolioRedux[key].url}>
                    {t("Veb Sayta Keçid")}
                    
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center py-12">
          <NavLink
            to="/portfolios"
            className="text-black font-bold  bg-gradient-to-r from-[#87f4b5] via-[#ddb4f6] to-[#93cbf1] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg  shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80  rounded-lg text-sm px-5 py-2.5 text-center "
          >
            {t("Hamısını Gör")}
            
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default HomePortfolio;
