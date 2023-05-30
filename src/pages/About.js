import React from "react";
import AbautFeature from "../components/about/AbautFeature";
import AboutServices from "../components/about/AboutServices";
import SetAbout from "../components/about/SetAbout";
import {Helmet} from 'react-helmet'

function About() {
  return (
    <div className="mb-12 mt-24 overflow-x-hidden">
        <Helmet>
        <title>Haqqımızda</title>
      </Helmet>
      <div className="bg-image ">
        <div className="max-w-[90%] pb-12 mx-auto grid grid-cols-2 pt-8 max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col">
          <div className="  col-span-1 max-lg:w-full max-lg:place-content-center ">
            <p data-aos="fade-up"  className="text-[3rem] font-extrabold mb-2 leading-tight max-lg:text-[2rem]">
              WWW Technology ilə Biznesinizi və Müştəri Məmnuniyyətinizi Artırın
            </p>
            <p data-aos="fade-up"  className="text-[1.2rem]  font-medium">
              Dinamik komandamız ilə hazırlanmış yenilikçi texnologiyalar.
            </p>

            <div className="mt-8">
              <img
                className="max-w-[80%] rounded-[24px]"
                src="./assets/about/a5.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="col-span-1 max-lg:hidden">
            <div>
              <img
                className="rounded-[24px] w-full"
                src="./assets/about/a2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

        <div className="mt-12 max-w-[90%] mx-auto overflow-auto" >
          <SetAbout/>
          <AbautFeature/>
          <AboutServices/>
        </div>
    </div>
  );
}
export default About;
