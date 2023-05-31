import React, { useEffect, useState } from "react";
import "../../styles/portfolio.css";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fetchPortfolio } from "../../store/portfolio/portfolioActions";
import { useDispatch, useSelector } from "react-redux";


function PortfolioComponent() {
  const {i18n } = useTranslation();
  // Redux
  const dispatch = useDispatch();
  const portfolioRedux = useSelector((state) => state.portfolio.portfolioData);

  useEffect(() => {
    const language = i18n.language
    dispatch(fetchPortfolio({language}));
  }, [dispatch,i18n.language]);

  // PAGINATION
  const [noOfElement, setNoOfElement] = useState(2);
  const slice = portfolioRedux.slice(0, noOfElement);
  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement);
  };

  return (
    <div className="max-md:mt-8" data-aos="fade-up" data-aos-duration="2000">
      <span className="flex justify-center  text-[35px] font-bold text-[#283C83] max-md:text-[30px]">
        Portfolio
      </span>
      <div className="wrapper_p max-md:pt-0 max-md:grid-cols-1">
        {Object.keys(slice).map((key) => (
          <Link to={`${portfolioRedux[key].general_key}`}>
            <div className="card">
              <img src={portfolioRedux[key].image} alt="" />
              <div className="info">
                <p>{portfolioRedux[key].title}</p>
                <p>{portfolioRedux[key].description}</p>
                <a className="btn rounded" href="#">
                  Veb Sayta Keçid
                </a>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center py-12">
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
