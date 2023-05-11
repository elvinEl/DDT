import React, { useEffect, useState } from "react";
import PortfolioData from "../../data/portfolio.json";
import PortfolioItem from "./PortfolioItem";
import "../../styles/portfolio.css";
import { NavLink } from "react-router-dom";

function PortfolioComponent() {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    setPortfolio(PortfolioData);
  });
  return (
    <div className="max-md:mt-8" data-aos="fade-up"  data-aos-duration="2000">
      <span className="flex justify-center  text-[35px] font-bold text-[#283C83] max-md:text-[30px]">
        Ən Son Görülən İşlər
      </span>
      <div className="wrapper_p max-md:pt-0 max-md:grid-cols-1">
        {portfolio.map((portItem) => (
          <PortfolioItem key={portItem.id} portItem={portItem} />
        ))}
      </div>
      <div className="flex justify-center pb-12 pt-12">
        <NavLink to='/portfolio'   className="text-black font-bold  bg-gradient-to-r from-[#87f4b5] via-[#ddb4f6] to-[#93cbf1] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg  shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80  rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Hamısına Bax</NavLink>
      </div>
    </div>
  );
}

export default PortfolioComponent;
