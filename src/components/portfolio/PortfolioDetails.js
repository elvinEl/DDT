import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function PortfolioDetails() {
  const [portfolioDetails, setPortfolioDetails] = useState([]);
  const { i18n } = useTranslation();
  const { slug } = useParams();
  const baseUrl = process.env.REACT_APP_BASE_URL

  const servicePortfolio = useSelector(
    (state) => state.portfolio.portfolioData
  );

  useEffect(() => {
    let dataPort =
    servicePortfolio &&
    servicePortfolio.find(function (item) {
        return item.slug == slug;
      });

    async function fetchPortfolioBySlug() {
      const language = i18n.language;
      const response = await axios.get(
        `${baseUrl}/portfolios/${slug}`,
        {
          headers: {
            language: language,
            general_key: dataPort.general_key,
          },
        }
      );
      setPortfolioDetails(dataPort);
    }
    fetchPortfolioBySlug();
  }, [i18n.language, slug,servicePortfolio]);

  return (
    <div className="mt-24 mb-[1.1rem]">
      <p>{portfolioDetails.title}</p>
      <div className="w-[40%] h-">
        <img src={portfolioDetails.image} alt="" />
      </div>
    </div>
  );
}

export default PortfolioDetails;
