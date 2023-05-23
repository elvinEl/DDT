import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useParams, useOutletContext } from "react-router-dom";

function PortfolioDetails() {
  const [portfolioDetails, setPortfolioDetails] = useState([]);
  const { i18n } = useTranslation();
  const [portfolioData] = useOutletContext();
  const { slug } = useParams();

  useEffect(() => {
    let dataPort =
      portfolioData &&
      portfolioData.find(function (item) {
        return item.slug == slug;
      });

    async function fetchPortfolio() {
      const language = i18n.language;
      const response = await axios.get(
        `http://10.138.1.35:8000/api/v1/portfolios/${slug}`,
        {
          headers: {
            language: language,
            general_key: dataPort.general_key,
          },
        }
      );
      setPortfolioDetails(dataPort);
    }
    fetchPortfolio();
  }, [i18n.language, slug, portfolioData]);

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
