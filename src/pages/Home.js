import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Video from "../components/abstractVideo/Video";
import Counter from "../components/counter/Counter";
import HeroSection from "../components/HeroSection";
import Partners from "../components/partners/Partners";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import {Helmet} from 'react-helmet'

function Home() {

  const { t, i18n } = useTranslation();
  const [homePortfolio, setHomePortfolio] = useState([]);
  const [sliceElement] = useState(4);
  const slice = homePortfolio.slice(0, sliceElement);
  
// ENV ISTIFADESI
const baseUrl = process.env.REACT_APP_BASE_URL
//

useEffect(() => {
    async function fetchPortfolio() {
      const language = i18n.language;
      const response = await axios.get(
        `${baseUrl}/portfolios`,
        {
          headers: { "language": language },
        }
      );
      setHomePortfolio(response.data);
    }
    fetchPortfolio();
  }, [i18n.language]);

  return (
    <div>
      <Helmet>
        <title>Ana Səhifə</title>
      </Helmet>
      <HeroSection />
      <Counter />

      <div className="max-md:mt-8" data-aos="fade-up" data-aos-duration="2000">
        <span className="flex justify-center  text-[35px] font-bold text-[#283C83] max-md:text-[30px]">
          Ən Son Görülən İşlər
        </span>
        <div className="wrapper_p max-md:pt-0 max-md:grid-cols-1">
          {Object.keys(slice).map((key) => (
            <Link to={`portfolio/${homePortfolio[key].slug}`}>
              <div className="card">
                <img src={homePortfolio[key].image} alt="" />
                <div className="info">
                  <p>{homePortfolio[key].title}</p>
                  <p>{homePortfolio[key].description}</p>
                  <a  className="btn rounded"  href={homePortfolio[key].url}>
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
            className="text-black font-bold  bg-gradient-to-r from-[#87f4b5] via-[#ddb4f6] to-[#93cbf1] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg  shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80  rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Hamısını Gör
          </NavLink>
        </div>
      </div>

      <Video />
      <Partners />
    </div>
  );
}

export default Home;
