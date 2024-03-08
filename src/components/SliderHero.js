import React, { useState, useEffect } from "react";
import "../styles/slider.css";
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
        console.log(response.data.data);
        setPeople(response.data.data);
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
    }, 60000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="section-center">
        {people &&
          people.map((item, indexPeople) => {
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
                <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-4 max-w-[90%] mx-auto max-md:max-w-[95%]">
                  <div
                    className="flex justify-center items-center max-md:h-[300px] max-md:my-8"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    <div className="circle-bg flex justify-center items-center"></div>
                    <img src={image} alt={name} className="person-img" />
                  </div>

                  <div
                  
                    className="flex justify-center items-center flex-col"
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    <p className="title text-[24px] max-md:text-[20px] font-bold">{title}</p>
                    <p
                      className="text max-md:line-clamp-5 text-[18px] max-md:text-[15px]"
                      dangerouslySetInnerHTML={{ __html: description }}
                    ></p>
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
