import React, { useEffect, useState } from "react";
import "../../styles/portfolio.css";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fetchPortfolio } from "../../store/portfolio/portfolioActions";
import { useDispatch, useSelector } from "react-redux";

function PortfolioComponent() {
  const { i18n } = useTranslation();
  // Redux
  const dispatch = useDispatch();
  const portfolioRedux = useSelector((state) => state.portfolio.portfolioData);
  console.log(portfolioRedux);
  const portfolioDataDetail = portfolioRedux && portfolioRedux[0];

  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchPortfolio({ language }));
  }, [dispatch, i18n.language]);

  // PAGINATION
  const [noOfElement, setNoOfElement] = useState(2);
  const slice =
    portfolioDataDetail && portfolioDataDetail.slice(0, noOfElement);
  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement);
  };

  return (
    <div className="max-md:mt-8" data-aos="fade-up" data-aos-duration="2000">
      <span className="flex justify-center  text-[35px] font-bold text-white max-md:text-[30px]">
        Portfolio
      </span>
      <div className="wrapper_p max-md:py-4 max-md:grid-cols-1">
        {slice &&
          Object.keys(slice).map((key) => (
            <div to={`${portfolioDataDetail[key].general_key}`}>
              <div className="card">
                <img src={portfolioDataDetail[key].image} alt="" />
                <div className="info">
                  <p>{portfolioDataDetail[key].title}</p>
                  <p>{portfolioDataDetail[key].description}</p>
                  <a
                    className="btn rounded"
                    target="_blank"
                    href={portfolioDataDetail[key].url}
                  >
                    Veb Sayta Keçid
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="flex justify-center py-12 max-md:py-4">
        <NavLink
          to="/portfolios"
          className="text-black font-bold  bg-gradient-to-r from-[#87f4b5] via-[#ddb4f6] to-[#93cbf1] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg  shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80  rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => loadMore()}
        >
          Hamısını Gör
        </NavLink>
      </div>
    </div>
  );
}

export default PortfolioComponent;
