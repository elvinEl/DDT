import React, { useState, useEffect } from "react";
import "../styles/slider.css";
import data from "../data/data";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";

const SliderHero = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 93000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <div className="hero-box ">
                {/* <div className=""> */}
                  <div className="flex justify-center items-center">
                  <div className="circle-bg flex justify-center items-center">
                  </div>
                  <img src={image} alt={name} className="person-img" />
                  </div>
                 

                  {/* </div> */}
                <div>
                  <h4>{name}</h4>
                  <p className="title">{title}</p>
                  <p className="text">{quote}</p>
                </div>
              </div>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <BiLeftArrow />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <BiRightArrow />
        </button>
       
      </div>
    </section>
  );
};

export default SliderHero;
