import React from 'react'
import Video from '../components/abstractVideo/Video'
import Counter from '../components/counter/Counter'
import HeroSection from '../components/HeroSection'
import Partners from '../components/partners/Partners'
import PortfolioComponent from '../components/portfolio/PortfolioComponent'
function Home() {
  return (
    <div>
        <HeroSection/>
        <Counter/>
        <PortfolioComponent/>
        <Video/>
        <Partners/>
    </div>
  )
}

export default Home