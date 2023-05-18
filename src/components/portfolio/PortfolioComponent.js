import React, { useEffect, useState } from "react";
import "../../styles/portfolio.css";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

function PortfolioComponent() {
  const { t, i18n } = useTranslation();
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    async function fetchPortfolio() {
      const language = i18n.language;
      const response = await axios.get(
        "http://10.138.1.35:8000/api/v1/portfolios",
        {
          headers: { "Accept-Language": language },
        }
      );
      setPortfolio(response.data);
    }
    fetchPortfolio();
  }, [i18n.language]);

  // PAGINATION
  const [noOfElement, setNoOfElement] = useState(2);
  const slice = portfolio.slice(0, noOfElement);
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
          <Link to={`${portfolio[key].slug}`}>
            <div className="card">
              <img src={portfolio[key].image} alt="" />
              <div className="info">
                <p>{portfolio[key].title}</p>
                <p>{portfolio[key].description}</p>
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
          to="/portfolio"
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
