import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPortfolioById } from "../../store/portfolio/portfolioActions";

function PortfolioDetails() {
  const { i18n } = useTranslation();
  const { general_key } = useParams();
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const portfolioRedux = useSelector((state) => state.portfolio.portfolioData);
  const dispatch = useDispatch();
  const portfolioReduxDetail = useSelector(
    (state) => state.portfolioDetail.portfolioDataDetail
  );
  console.log(portfolioReduxDetail);

  useEffect(() => {
    let dataPort =
      portfolioRedux &&
      portfolioRedux.find((item) => item.general_key == general_key);
    const language = i18n.language;
    dispatch(fetchPortfolioById({ dataPort, language }));
  }, [dispatch, general_key, i18n.language]);

  return (
    <div className="mt-24 mb-[1.1rem]">
      <p className="text-white">
        {portfolioReduxDetail.content && portfolioReduxDetail.content.title}
      </p>
      <div className="w-[40%]">
        <img
          src={
            portfolioReduxDetail.content && portfolioReduxDetail.content.image
          }
          alt=""
        />
      </div>
    </div>
  );
}

export default PortfolioDetails;
