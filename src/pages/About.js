import React from "react";
import AbautFeature from "../components/about/AbautFeature";
import AboutServices from "../components/about/AboutServices";
import SetAbout from "../components/about/SetAbout";
import { Helmet } from "react-helmet";
import AboutCompany from "../components/about/AboutCompany";

function About() {
  return (
    <div className="max-w-[90%] mx-auto mb-12 mt-24 overflow-x-hidden">
      <Helmet>
        <title>Haqqımızda</title>
      </Helmet>

      <AboutCompany />

      <div className="mt-12  overflow-auto">
        <SetAbout />
        <AbautFeature />
        <AboutServices />
      </div>
    </div>
  );
}
export default About;
