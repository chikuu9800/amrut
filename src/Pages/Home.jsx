import React from 'react'
import EmbassyBanner from '../Components/Banner'
import SLogon from '../Components/SLogon'
import Tabs from '../Components/Tabs'
import AnimatedMap from '../Components/AnimatedMap'
import MaharashtraShowcase from '../Components/SliderMaha'
import Footer from '../Components/Footer'
// import YojanaSlider from '../Components/Slider'


const Home = () => {
  return (
    <div className='overflow-hidden' >
      <EmbassyBanner/>
      <SLogon/>
      <Tabs/>
      {/* <YojanaSlider/> */}
      <AnimatedMap/>
      <MaharashtraShowcase/>
      <Footer/>
    </div>
  )
}

export default Home
