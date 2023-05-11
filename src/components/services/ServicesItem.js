import React from "react";
import "../../styles/services.css";

function ServicesItem({ service }) {
  return (

    <div className="wrapper">
      <div className="single-card">
        <div className="front flex  justify-center items-center flex-col text-start px-7 bg-gradient-to-br from-[#e9ffd4] via-[#f5bfd7] to-[#4dc9e6]">
         <div className="absolute top-[-25px] right-[25px]">
          <img className=" h-[100px] w-full" src={service.img} alt="" /> 
         </div>
          <div >
            <p className="text-[24px]  font-normal leading-7">{service.titleFront}</p>
          </div>
          <div className="mt-1">
            <p className="text-[15px] font-normal">{service.descriptionFront}</p>
          </div>
        </div>
        <div className="back bg-gradient-to-tl from-[#e9ffd4] via-[#dbd4ff]">
          <div className="content">
            <div>
              <p className="text-[30px] font-medium">{service.titleBack}</p>
            </div>
            <div>
              <p className="text-[24px]">{service.descriptionBack}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesItem;
