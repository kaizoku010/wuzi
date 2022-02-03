import React from 'react'
import HeroSection from './HeroSection';
import "./Home.css";
import ItemHolder from './ItemHolder';
import OurDesigners from './OurDesigners';
import StillIntrested from './StillIntrested';
import TopbarMenu from "./TopbarMenu";
import WuziSlider from './WuziSlider';

function Home() {
    return (
        <div>
            <TopbarMenu />   
            <HeroSection />
            <StillIntrested />
            <WuziSlider />
            <OurDesigners/>
        </div>
    )
}

export default Home
