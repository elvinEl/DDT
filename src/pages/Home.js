import React from "react";
import Video from "../components/abstractVideo/Video";
import Counter from "../components/counter/Counter";
import HeroSection from "../components/HeroSection";
import Partners from "../components/partners/Partners";
import HomePortfolio from "../components/portfolio/HomePortfolio";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Ana Səhifə</title>
      </Helmet>
      <HeroSection />
      <Counter />
      <HomePortfolio />
      <Video />
      <Partners />
    </div>
  );
}

export default Home;
