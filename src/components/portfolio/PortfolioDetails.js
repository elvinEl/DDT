import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {fetchPortfolioById} from '../../store/portfolio/portfolioActions'

function PortfolioDetails() {
  const { i18n } = useTranslation();
  const { general_key } = useParams();
  const baseUrl = process.env.REACT_APP_BASE_URL
  const portfolioRedux = useSelector((state)=>state.portfolio.portfolioData)
  const dispatch = useDispatch()
  const portfolioReduxDetail = useSelector((state)=>state.portfolioDetail.portfolioDataDetail)

  useEffect(()=>{
let dataPort = 
portfolioRedux && portfolioRedux.find(function(item)=>item.general_key == general_key);
const language = i18n.language;
dispatch(fetchPortfolioById({dataS,lannguage}));
  },[dispatch,general_key,i18n.language])




  // useEffect(() => {
  //   let dataPort =
  //   servicePortfolio &&
  //   servicePortfolio.find(function (item) {
  //       return item.slug == slug;
  //     });

  //   async function fetchPortfolioBySlug() {
  //     const language = i18n.language;
  //     const response = await axios.get(
  //       `${baseUrl}/portfolios/${slug}`,
  //       {
  //         headers: {
  //           language: language,
  //           general_key: dataPort.general_key,
  //         },
  //       }
  //     );
  //     setPortfolioDetails(dataPort);
  //   }
  //   fetchPortfolioBySlug();
  // }, [i18n.language, slug,servicePortfolio]);

  return (
    <div className="mt-24 mb-[1.1rem]">
      <p>{portfolioReduxDetail.content && portfolioReduxDetail.content.title}</p>
      <div className="w-[40%] h-">
        <img src={portfolioReduxDetail.content && portfolioReduxDetail.content.img}alt="" />
      </div>
    </div>
  );
}

export default PortfolioDetails;
