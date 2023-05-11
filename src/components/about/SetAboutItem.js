import React from "react";
function AboutItem({ about }) {
  return (
    <>
      <p data-aos="fade-up"  className="mt-4 text-[18px]">{about.description}</p>
     
    </>
  );
}

export default AboutItem;
