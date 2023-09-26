//Packages
import React from 'react'

//Components and styles
import Carousel from '../components/ReactCarousel';
import HomeIntro from '../components/HomeIntro';

const Home = () => {
    return (
      <>
        <HomeIntro/>
        <Carousel/>
      </>
    );
}
 
export default Home;