import React from "react";
import PortfolioComponent from "../components/portfolio/PortfolioComponent";
import { Helmet } from "react-helmet";
function Portfolio() {
  return (
    <div data-aos="fade-up" className="mt-24">
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <PortfolioComponent />
    </div>
  );
}

export default Portfolio;
