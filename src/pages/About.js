import React from "react";
import AbautFeature from "../components/about/AbautFeature";
import AboutServices from "../components/about/AboutServices";
import SetAbout from "../components/about/SetAbout";

function About() {
  return (
    <div className="mb-12">
      <div className=" bg-image ">
        <div className="max-w-[90%] pb-12 mx-auto grid grid-cols-2 pt-8">
          <div className="max-w-[600px]  col-span-1">
            <p data-aos="fade-right"  className="text-[3rem] font-extrabold mb-2 leading-tight">
              WWW Technology ilə Biznesinizi və Müştəri Məmnuniyyətinizi Artırın
            </p>
            <span  className="text-[1.2rem]  font-medium">
              Dinamik komandamız ilə hazırlanmış yenilikçi texnologiyalar.
            </span>

            <div className="mt-8">
              <img
                className="max-w-[80%] rounded-[24px]"
                src="./assets/about/a5.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="col-span-1 ">
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