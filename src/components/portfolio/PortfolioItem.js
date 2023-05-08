import React from "react";
import '../../styles/portfolio.css'

function PortfolioItem({ portItem }) {
  return (
    <div>
      
<div className="card">
<img  src={portItem.img} alt="" />
<div className="info">
<p>{portItem.title}</p>
<p>{portItem.description}</p>
<a className="btn rounded" href="#">Ətraflı</a>
</div>
</div>
    </div>
  );
}

export default PortfolioItem;
