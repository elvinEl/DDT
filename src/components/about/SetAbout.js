import React, { useState, useEffect } from "react";
import aboutData from "../../data/about/about.json";
import SetAboutItem from "./SetAboutItem";

function SetAbout() {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    setAbouts(aboutData);
  });
  return (
    <>
      <div className="mb-8">
        <p data-aos="fade-right" className="text-[2.5rem]  font-bold text-[#0b163f]">
          WWW Technology
        </p>
        {abouts.map((about) => (
          <SetAboutItem   key={about.id} about={about} />
        ))}
      </div>
    </>
  );
}

export default SetAbout;
