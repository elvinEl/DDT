import React, { useState, useEffect } from "react";
import "../styles/slider.css";
import data from "../data/data";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import axios from "axios";

const SliderHero = () => {
  const [people, setPeople] = useState([]);
  const [index, setIndex] = useState(0);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/sliders`);
       console.log(response.data[0].description);
        setPeople(response.data);
      } catch (error) {
        console.error(error, "Error");
      }
    };
    fetchData();
  }, []);

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
    }, 6000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, description } = item;
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
                  <div className="circle-bg flex justify-center items-center"></div>
                  <img src={image} alt={name} className="person-img" />
                </div>

                {/* </div> */}
                <div className="flex justify-center items-center flex-col">
                  <p className="title">{title}</p>
                  <p className="text" dangerouslySetInnerHTML={{__html:description}}></p>
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
