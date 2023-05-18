import axios from "axios";
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function PortfolioLayout() {
  const [portfolioData, setPortfolioData] = useState(null);

  async function fetchPortfolio() {
    const response = await axios.get(
      "http://10.138.1.35:8000/api/v1/portfolios"
    );
    setPortfolioData(response.data);
  }
  useEffect(() => {
    fetchPortfolio();
  }, []);

  return (
    <div>
      <Outlet context={[portfolioData]} />
    </div>
  );
}

export default PortfolioLayout;
