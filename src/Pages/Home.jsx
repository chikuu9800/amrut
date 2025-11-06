import React from 'react'
import EmbassyBanner from '../Components/Banner'
import SLogon from '../Components/SLogon'
import Tabs from '../Components/Tabs'
import AnimatedMap from '../Components/AnimatedMap'
import MaharashtraShowcase from '../Components/SliderMaha'
import Footer from '../Components/Footer'
import AmrutStats from '../Components/Dynamic'
import AmrutMissionVision from '../Components/Vison'
// import YojanaSlider from '../Components/Slider'


const Home = () => {
  return (
    <div className='overflow-hidden' >
      <EmbassyBanner/>
      <AmrutStats/>
      <SLogon/>
      <Tabs/>
      {/* <YojanaSlider/> */}
      <AnimatedMap/>
      <AmrutMissionVision/>
      <MaharashtraShowcase/>
      <Footer/>
    </div>
  )
}

export default Home
