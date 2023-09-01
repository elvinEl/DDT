import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPortfolioById } from "../../store/portfolio/portfolioActions";

function PortfolioDetails() {
  const { i18n } = useTranslation();
  const { general_key } = useParams();
  const portfolioRedux = useSelector((state) => state.portfolio.portfolioData);
  console.log(portfolioRedux);
  const dispatch = useDispatch();
  const portfolioReduxDetail = useSelector(
    (state) => state.portfolioDetail.portfolioDataDetail
  );
  console.log(portfolioReduxDetail);

  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchPortfolioById({ general_key, language }));
  }, [dispatch, general_key, i18n.language]);

  return (
    <div className="mt-24 mb-[1.1rem] max-w-[85%] mx-auto max-md:max-w-[95%] max-lg:max-w-[90%]">
      <p className="text-white font-bold text-[58px] max-md:text-[32px]">
        {portfolioReduxDetail.data && portfolioReduxDetail.data.title}
      </p>

      <div className="grid grid-cols-3 gap-4 text-white mt-12 max-lg:grid-cols-1 max-md:mt-4">
        <div className="col-span-1">
          <p className="mb-4">
            {portfolioReduxDetail.data &&
              portfolioReduxDetail.data.publish_date}
          </p>
          <a
            className="text-blue-400 np-underline hover:underline"
            target="_blank"
            href={portfolioReduxDetail.data && portfolioReduxDetail.data.url}
          >
            {portfolioReduxDetail.data && portfolioReduxDetail.data.url_name}
          </a>
        </div>
        <div className="col-span-2 text-[20px] max-md:text-[16px]">
          <p
            dangerouslySetInnerHTML={{
              __html:
                portfolioReduxDetail.data &&
                portfolioReduxDetail.data.description,
            }}
          ></p>
        </div>
      </div>
      <div className="my-8 max-md:h-[280px] max-w-[90%] mx-auto max-lg:max-w-full">
        <img
          className="w-full h-full rounded-[20px]"
          src={portfolioReduxDetail.data && portfolioReduxDetail.data.image}
          alt=""
        />
      </div>
      <div className="my-8 max-md:h-[280px] max-w-[90%] mx-auto max-lg:max-w-full">
        <img
          className="w-full h-full rounded-[20px]"
          src={portfolioReduxDetail.data && portfolioReduxDetail.data.image2}
          alt=""
        />
      </div>
    </div>
  );
}

export default PortfolioDetails;
